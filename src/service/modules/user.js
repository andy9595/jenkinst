import http from '../../service/http'
import { user } from '../../api/api' //引入用户请求api路径
// 登录
function login({ username, password }) {
  return http({
    url: user.login,
    method: 'POST',
    data: {
      username,
      password
    }
  })
}
//  退出登录
function logout() {
  return http({
    url: user.logout,
    method: 'GET'
  })
}
// 测试
function test(data) {
  return http({
    url: user.test,
    method: 'POST',
    data: data
  })
}
function test1(data) {
  return http({
    url: user.test1,
    method: 'POST',
    data: data
  })
}
//  按需暴露接口
export { login, logout, test, test1 }
