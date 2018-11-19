// 实际调用接口
import {
  serverUrl
} from '../config'
import {
  axios
} from '../axios.js'


/**
 *@param login_type	[登录类型	是]  [邮箱名登录1 手机号登录2 用户名登录4 微博登录8 QQ登录16 微信登录32
  @param username		[用户名	是]
  @param password		[密码	否]
  @param nickname		[昵称	否]
  @param avatar		[头像地址	否]
  @param reg_channel		[注册渠道	否] 
 */
export function login( //接收页面传入的参数
  login_type,
  username,
  password,
  nickname,
  avatar,
  reg_channel
) {
  const url = serverUrl + 'yishuo/api_web/account/login'

  const data = Object.assign({},{ //传给后台的参数
    login_type,
    username,
    password,
    nickname,
    avatar,
    reg_channel
  })

  return axios(url, data)
}
