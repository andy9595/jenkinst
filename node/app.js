// 引入express创建服务器模块
const express = require('express')
// 引入body-parser处理Post请求的请求数据
const bodyParser = require('body-parser')
// 引入Multer处理上传的文件
const multer = require('multer')
// 创建 上传组件，指定 保存文件的 文件夹
const upload = multer({ dest: './uploads/' })
// 引入时间处理moment
// const moment = require('moment')
// 引入cookie-parser
const cookieParser = require('cookie-parser')

// 创建服务器
const app = express()
// 中间件注册cookie-parser
app.use(cookieParser())

// 注册body-parser中间件
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// 也可以用express自带的功能处理Post的body
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// 注册路由
app.get('/api/info', (req, res) => {
  res.send({
    mes: '成功',
    name: 'andy',
    age: 18
  })
})
// 登录
app.post('/api/login', (req, res) => {
  if (req.body.username == 'andy' && req.body.password == 'a3228125') {
    // res.cookie('user','Andy')
    res.send({
      code: '200',
      message: '登录成功',
      data: {
        nickname: 'andy',
        token: 'alj43oi5jjk6nlewkmk53lk4m324'
      }
    })
  } else {
    res.send({
      code: '500',
      message: '密码错误'
    })
  }
})
// 退出登录
app.get('/api/logout', (req, res) => {
  res.send({
    code: '200',
    message: '退出登录',
    data: {
      time: moment().format('YYYY-MM-DD HH:mm:ss')
    }
  })
})
app.post('/updatainfo', upload.single('icon2'), (req, res) => {
  res.send({
    mes: '修改成功'
  })
})

// 监听服务器
app.listen(8989, err => {
  if (err == null) {
    console.log('8989服务器开启成功')
  } else {
    console.log('服务器开启失败', err.message)
  }
})
