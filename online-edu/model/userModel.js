import Http from "@/utils/http.js"

class UserModel extends Http {
	/**
	 * 用户注册接口
	 */
	static userRegister(data){
		return Http.request({
			url : '/mobile/reg',
			method : 'POST',
			data
		})
	}
	
	/**
	 * 用户登录接口
	 */
	static userLogin(data){
		return Http.request({
			url : '/mobile/login',
			method : 'POST',
			data
		})
	}
	
	/**
	 * 获取验证码接口
	 */
	static userGetCaptcha(data){
		return Http.request({
			url : '/mobile/get_captcha',
			method : 'POST',
			data
		})
	}
	
	/**
	 * 绑定手机号接口
	 */
	static userBindPhone(data){
		return Http.request({
			url : '/mobile/bind_mobile',
			method : 'POST',
			data
		})
	}
}

export default UserModel