import loginService from "../services/login.service"

/**
 * 请求方法
 * @param {String} url 请求地址
 * @param {String} method 请求方式
 * @param {Object} data 入参
 * @param {Object} header header头信息
 * @returns promise
 */
const request = async (url, method, data, header, options) => {
    if(options.token && loginService.token === ''){
        await loginService.login()
        header['Authorization'] = loginService.token
    }
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'http://8.134.50.12:7980'+url,
            header,
            method,
            data,
            success: res => {
                // console.log(res);
                if(res.statusCode == 200){
                    resolve(res)
                }else if(res.statusCode == 401) {
                    // token失效
                    const param = {
                        url, method, data, header, options
                    }
                    loginService.login()
                    return request(param)
                }else{
                    reject(res)
                }
            },
            fail: err => {
                reject(err)
            }
        })
    })
}

export default request;
// class request {

//     get(url, data, header, options){
//         if(options.token){

//         }else {
//             wxRequest(url, 'get', data, header)
//         }
//     }

//     post(){

//     }

//     delete(){

//     }

//     put(){
        
//     }
// }

// export default new request();