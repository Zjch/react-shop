import { login } from '../api/api.model';
import { wxLogin } from '../utils/utils'

class LoginService {
    token = ''
    user = {}

    async login(){
        let wxLoginInfo = await wxLogin()
        let res = await login({
            code: wxLoginInfo.code
        })
        console.log(res);
        this.token = res.data.token
        this.user = res.data.user.user
    }
}

export default new LoginService()