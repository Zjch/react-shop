import { login } from '../api/api.model';
import { wxLogin } from '../utils/utils'

class LoginService {
    token = ''
    user = {}

    async login(refresh = false){
        let token = wx.getStorageSync('token')
        if(token && !refresh){
            this.token = token
            this.user = wx.getStorageSync('user')
        }else{
            let wxLoginInfo = await wxLogin()
            let res = await login({
                code: wxLoginInfo.code
            })
            wx.setStorageSync('token', res.data.token)
            wx.setStorageSync('user', res.data.user.user)
            this.token = res.data.token
            this.user = res.data.user.user
        }
    }
}

export default new LoginService()