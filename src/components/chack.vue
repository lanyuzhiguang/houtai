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

    <el-checkbox :indeterminate="isIndeterminate" v-model="allid" @change="handleCheckAllChange">全选</el-checkbox>
    <el-button size="small" type="danger" @click="deluser">删除</el-button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        tableData: [{
        }],
        checkAll: false,
        userIds: [],
        allid: [],
        isIndeterminate: true
      }
    },
    methods:{
      getuser(){
        let allid=[]
        this.$axios.get('/user').then(res=>{
          this.tableData=res.data
          // console.log(this.tableData)
          allid = this.tableData.map(val => {
            return val._id
          })
          this.allid=allid
        })
      },
      changeone(){
        console.log(this.userIds)
      },
      handleCheckAllChange(val){
        this.userIds = val ? this.allid : [];
        this.isIndeterminate = false;
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

</style>
