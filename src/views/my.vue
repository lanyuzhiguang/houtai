<template>
<div class="my">
<div class="navigation">
  <el-menu
    :router="true"
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item-group>
        <template slot="title">用户管理</template>
        <el-menu-item index="/my/user">用户列表</el-menu-item>
        <el-menu-item index="/my/adduser">添加用户</el-menu-item>
        <el-menu-item index="/my/changepwd">修改密码</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>分类管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/my/category">分类列表</el-menu-item>
        <el-menu-item index="/my/categoryadd">添加分类</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>图书管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/my/allbook">全部书籍</el-menu-item>
        <el-menu-item index="/my/addbook">添加书籍</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>轮播图管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/my/allslideshow">全部轮播图</el-menu-item>
        <el-menu-item index="/my/addslideshow">添加轮播图</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>

</div>
  <div class="view">
    <div class="my-header">
      <div class="title">
      <h2>后台操作系统</h2>
    </div>
        <el-dropdown class="user-msg">
          <div class="user-avatar">
            <img :src="userInfo.avatar" v-if="userInfo.avatar">
          </div>
          <div class="nickname">{{userInfo.nickname}}</div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="handleperson">个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="outlogin">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
    <div class="view-content">

      <router-view></router-view>

    </div>
  </div>
</div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      methods:{
        handleperson(){
          this.$router.push('/my/person')
        },
        outlogin(){
          this.$axios.get('/logout').then(res=>{
           if(res.code==200){
             this.$message.success('退出登录成功')
             this.$store.commit('SET_USERINFO',{userInfo:'',avatar:'',email:'',desc:'',})
             this.$router.push('/')
           }
           else{
             this.$message.error(res.msg)
           }
          }).catch(err=>{
            this.$message.error(err)
          })
        }
      },
      computed:{
        ...mapState(['userInfo'])
      }
    }
</script>

<style scoped>
.navigation{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 202px;
  height: 100%;
  background: #545C64;
}
.view{
  position: relative;
  margin-left: 202px;
}
.my-header{
  height: 80px;
  background: #545C64;
}
  .title{
   position: absolute;
    top: 0;
    left: 50%;
   transform: translateX(-50%);
    text-align: center;
    color: #fff;
    line-height: 60px;
  }
  .view-content{
    padding: 20px;

  }
  .user-msg{
   position: absolute;
    top: -10px;
    right: 20px;
    color: #fff;
  }
  .nickname{
    text-align: center;
  }
  .user-avatar{
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    margin-top: 16px;
    width: 50px;
    height: 50px;
  }
  .user-avatar img{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
