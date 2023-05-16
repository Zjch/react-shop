import request from "./request";
import loginService from "../services/login.service";

// 登录
export const login = (data) => request('/auth/wxSign', 'get', {...data}, {
    'content-type': 'application/x-www-form-urlencoded'
}, {
    token: false
})

// 上传图片
export const uploadImg = (filePath) => {
    return new Promise((resolve, reject) => {
        wx.uploadFile({
            url: 'http://8.134.50.12:7980/api/localStorage/pictures', 
            filePath: filePath.tempFilePath,
            name: 'file',
            header: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': loginService.token
            },
            success (res){
              const data = res.data
              console.log(data);
              resolve(res)
            },
            fail(err){
                console.log(err);
                resolve(null)
            }
        })
    })
}


// 我的类目
export const myMenu = (data) => request('/menu', 'get', {}, {
    'Authorization': loginService.token
}, {
    token: true
})

export const addMyMenu = (data) => request('/menu', 'post', data, {
    'Authorization': loginService.token
}, {
    token: true
})


// 商品
export const addProduct = (data) => request('/dish', 'post', data, {
    'Authorization': loginService.token
}, {
    token: true
})

export const getProduct = (data) => request('/dish', 'get', data, {
    'Authorization': loginService.token
}, {
    token: true
})


// 商家类目


// 订单
export const confirmOrder = (data) => request('/order', 'post', data, {
    'Authorization': loginService.token
}, {
    token: true
})

export const myOrder = data => request('/order/buyerOrder', 'get', data, {
    'Authorization': loginService.token
}, {
    token: true
})

export const shopOrder = data => request('/order/shopOrder', 'get', data, {
    'Authorization': loginService.token
}, {
    token: true
})