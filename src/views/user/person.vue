<template>
    <div class="person">
        <el-form :data="userInfo">
          <el-form-item label="用户名" >
            <el-input v-model="userInfo.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="userInfo.nickname"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <upimg v-model="userInfo.avatar"></upimg>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="userInfo.email"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="userInfo.desc"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="warning" @click="changeuser">提交修改</el-button>
          </el-form-item>
        </el-form>
      </div>
</template>

<script>
  import {mapState} from 'vuex'
  import upimg from '@/components/upimg'
    export default {
    components:{
      upimg
    },
      data(){
        return{

        }
      },
       methods:{
         changeuser(){
           let avatar = this.userInfo.avatar
           let nickname = this.userInfo.nickname
           let email = this.userInfo.email
           let desc= this.userInfo.desc
           let changeData ={
             avatar,
             nickname,
             email,
             desc
           }
           console.log(changeData)

           this.$axios.put('/user/userInfo',changeData).then(res=>{
             if(res.code==200){
               this.$store.commit('SET_USERINFO', {avatar:changeData.avatar,email:changeData.email,
                                                      desc:changeData.desc,nickname:changeData.nickname,
                                                       username:this.userInfo.username})
               this.$message.success('修改成功')
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
  .person{
    margin: 100px auto;
    text-align: center;
  }

</style>
