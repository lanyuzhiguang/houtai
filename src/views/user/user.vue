<template>
    <div class="user" >
      <el-table
        :data="tableData"
        border
         >
        <el-table-column
          width="180"
          label="分类名"
          prop="">
          <template slot-scope="scope">
            <el-checkbox v-model="userIds" :label="scope.row._id" @change="changeone">{{scope.row.username}}</el-checkbox>
          </template>
        </el-table-column>
        <el-table-column
          label="创建日期"
          prop="createdTime">
        </el-table-column>
        <el-table-column
          label="用户头像"
          prop="">
          <template slot-scope="scope">
            <img :src="scope.row.avatar" alt="" class="user-avatar">
          </template>
        </el-table-column>
      </el-table>
      <div class="delbtn">
      <button  @click="deluser" class="btn">删除</button>
      </div>
    </div>
</template>

<script>
    export default {
       data(){
         return{
           tableData: [{
           }],
           userIds: [],
         }
       },
      methods:{
        getuser(){
           this.$axios.get('/user').then(res=>{
               this.tableData=res.data
             })
         },
        changeone(){
          console.log(this.userIds)
        },
        deluser(){
          this.$axios.post('/user/delete',{userIds:this.userIds}).then(res=>{
            if(res.code==200){
              this.$message.success(res.msg)
              this.getuser()
            }
            else{
              this.$message.error(res.msg)
            }
          })
        },
        handledetails(val){
          console.log(val)
           this.$router.push(`details/?id=${val}`)
        }

      },
      mounted(){
         this.getuser()
      },

    }
</script>

<style scoped>
.user{
text-align: center;
}
.el-table th{
  text-align: center;
}
  .user-avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .delbtn{
    margin-top: 20px;
  }
.btn{
  color: #fff;
  font-size: 20px;
  line-height: 45px;
  border-radius: 4px;
  background: #F56C6C;
  border: 1px solid #F56C6C;
  width: 300px;
  height: 45px;
}


</style>
