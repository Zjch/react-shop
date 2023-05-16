
/**
 * 获取导航栏高度
 * @returns Number 导航栏高度
 */
export function navHeight(){
    const res = wx.getSystemInfoSync()
    return res.statusBarHeight + 44
}

/**
 * 判断是否是ios X以上机型
 * @returns 是否是异形屏
 */
export function isIOS(){
    const res = wx.getSystemInfoSync()
    console.log(res);
    if(res.safeArea.top > 20){
        return true
    }else{
        return false
    }
}

/**
 * 路由跳转
 * @param {String} path 页面路径
 * @param {Number} type 跳转类型
 */
export function jumpTo(path, type){
    if(type === 3){
        wx.reLaunch({
            url: path
        })
    }else if(type === 2){
        wx.switchTab({
            url: path
        })
    }else {
        wx.navigateTo({
            url: path
        })
    }
}

/**
 * wx.login接口
 * @returns 微信登录
 */
export function wxLogin(){
    return new Promise((resolve, reject) => {
        wx.login({
            success (res) {
              resolve(res)
            },
            fail (err) {
                reject(err)
            }
        })
    })
}