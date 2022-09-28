<template>
  <el-container class="wrap">
    <el-header class="top-bar">
      <div class="top-bar">
        <div class="logo">此处放Logo</div>
        <div class="userInfo">
          <img src="../assets/Snipaste_2020-04-11_16-33-34.png"
               alt="">
          <span>{{userName}}</span>
          <span class="logout"
                @click='logout'>退出登录</span>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px"
                class="nav-bar">
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 background-color="#282c34"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="/welcome">用户修改信息操作</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航三</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
     
        
          <router-view></router-view>
          <router-view name="test"></router-view>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { logout } from '../service/modules/user'
export default {
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    // 退出登录
    async logout () {
      // 判断用户是否点击退出  对官方原来的then,catch async/await 使用,如果用户点击取消,confirm会报错,此时利用try/catch进行处理
      try {
        await this.$confirm('是否退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        // 要去清除Node的缓存
        let res = await logout();
        if (res.data.code === "200") {
          this.$message.success(`${res.data.data.time} 成功退出`)
          this.$router.push({ name: 'login' })
        }
      } catch (error) {
        this.$message.warning('取消退出登录')
      }
    }
  },
  created () {
    this.userName = localStorage.getItem('userInfo')
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
}
.top-bar {
  background-color: #282c34;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 20px;
    margin-left: 50px;
    font-weight: bold;
    color: #fff;
  }
  .userInfo {
    vertical-align: middle;
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
      border-radius: 50%;
    }
    span {
      color: #fff;
    }
    .logout {
      font-size: 16px;
      margin-left: 16px;
      color: yellowgreen;
    }
  }
}
.nav-bar {
  background-color: #20232a;
  width: 200px;
  height: 100%;
  overflow: hidden;
}
.el-menu {
  border-right-width: 0;
}
</style>