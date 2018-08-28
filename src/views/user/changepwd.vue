<template>
  <div class="person">
    <el-form :data="pwd">
      <el-form-item label="旧密码" >
        <el-input v-model="pwd.password"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="pwd.new_password"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="warning" @click="changepwd">提交修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        data(){
          return{
            pwd:{
              password:'',
              new_password:''
            }
          }
        },
      methods:{
        changepwd(){
          this.$axios.put('/user/password',this.pwd).then(res=>{
            if(res.code==200){
              this.$message.success('修改成功')
            }
            else{
              this.$message.error(res.msg)
            }
            }
          )
        }
      }
    }
</script>

<style scoped>

</style>
