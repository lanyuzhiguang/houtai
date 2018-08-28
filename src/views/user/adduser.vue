  <template>
    <div class="person">
      <el-form :data="adduser">
        <el-form-item label="用户名" >
          <el-input v-model="adduser.username" ></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="adduser.nickname"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <upimg v-model="adduser.avatar"></upimg>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="adduser.email"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="adduser.desc"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="adduser.password"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="warning" @click="addData">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>

<script>
  import upimg from '@/components/upimg'
    export default {
    components:{
      upimg
    },
       data(){
         return{
           adduser:{
             username:'',
             password:'',
             nickname:'',
             avatar:'',
             email:'',
             desc:''
           }
         }
       },
      methods:{
        addData(){
          this.$axios.post('/user',this.adduser).then(res=>{
            if(res.code==200){
              this.$message.success('添加成功')
            }
            else{
              this.$message.error(res.msg)
            }
          })
        }
      },
    }
</script>

<style scoped>

</style>
