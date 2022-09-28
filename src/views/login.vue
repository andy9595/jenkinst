<template>
  <div class="login-wrap">
    <div class="login-bar">
      <div class="userInfo">
        <el-form ref="form" :model="form" label-width="80px"  @keyup.enter.native="toLogin">
          <el-form-item label="账号">
            <el-input v-model="form.username"  placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"  show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toLogin" >登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import { login } from "../service/modules/user";
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "andy",
        password: "a3228125"
      }
    };
  },
  methods: {
    // 登录请求
    async toLogin() {
      // console.log(1)
      // let res = await login(this.form);
      // console.log(res)
      // if (res.data && res.data.code === "200") {
      //   const { nickname, token} = res.data.data;
      //   this.$message.success( res.data.message);//成功弹窗
      //   localStorage.setItem("userInfo", nickname);
      //   localStorage.setItem("token", token);
       this.$router.push({
         name:'layout',
         params:{
           name1:'asd'
         }
       })
      // } else {
      //   this.$message.error(res.data.message);
      // }
    },
  }
};
</script>
<style lang='scss'>
.login-wrap {
  height: 100%;
}
.login-bar {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border: 1px;
}
</style>
