<template>
    <div class="login">
      <div class="content-title">
        <h1>欢迎来到cloudBook后台操作系统</h1>
      </div>

      <div class="login-content">
        <div class="data">
          <div class="title">请登录</div>
          <div class="input-one">
            用户名：<input type="text" v-model="formData.username">
          </div>
          <div class="input-one">
            密&nbsp; &nbsp;码：<input type="password" v-model="formData.password" >
          </div>
          <div class="btns">
            <el-button type="primary" @click="loginDone" :loading="loading">登录</el-button>
            <el-button type="info">重置</el-button>
          </div>
        </div>

      </div>

    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
      data(){
        return{
          formData:{
            username:'test',
            password:'123456',
          },
          loading:false
        }
      },
      methods: {
        //不使用mapActions
        loginDone() {
            this.loading = true
        this.$axios.post('/login', this.formData).then(res=>{
          console.log(res)
            this.loading = false
            if (res.code == 200) {
              this.$store.commit('SET_USERINFO',res.data)
              this.$router.push('/my')
            }
            else {
              this.$message.error(res.msg);
            }
          })

        }
        //使用mapActions
        // loginDone() {
        //   this.loading = true
        //
        //   this.login(this.formData).then(stateloading=>{
        //       this.loading=false
        //         if (stateloading) {
        //           this.$router.push('/my')
        //         }
        //   })
        //   .catch(err=>{
        //         this.loading=false
        //         this.$message.error('连接超时，请检查您的网络')
        //       })
        // },
        // ...mapActions(['login'])

          //不使用mapActions
        //   loginDone(){
        //     this.loading=true
        //   this.$store.dispatch('login',this.formData).then((stateloading)=>{
        //     this.loading=false
        //       if (stateloading) {
        //         this.$router.push('/my')
        //       }
        //       else {
        //         this.$message.error(data.msg);
        //       }
        //
        //   }).catch(
        //     err=>{
        //       this.loading=false
        //       this.$message.error('连接超时，请检查您的网络')
        //     })
        // },

       //没用状态管理
        // async loginDone() {
        //   this.loading = true
        //   const data = await this.$axios.post('/login', this.formData)
        //   this.loading = false
        //   if (data.code == 200) {
        //     this.$router.push('/my')
        //   }
        //   else {
        //     this.$message.error(data.msg);
        //   }
        // }

      },
    }
</script>

<style scoped>
.login{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  text-align: center;
}
.content-title{
  margin-top: 70px;
  color: #fff;
}
.login-content{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #fff;
  padding: 50px 70px;
  width: 350px;
  height: 250px;
}
.data{
}
.title{
  font-size: 28px;
  font-weight: 700;
  color: #000;
}
.input-one{
  margin-top: 30px;
}
  .input-one input{
    width: 250px;
    height: 30px;
  }
  .btns{
    margin: 0 auto;
    margin-top: 10px;
  }
</style>
