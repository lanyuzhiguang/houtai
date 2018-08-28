<template>
  <div class="category">
    <el-table
      :data="tableData"
      stripe
    >
      <el-table-column
        width="180"
        style="text-align: center"
        label="分类名"
        prop="title">
      </el-table-column>
      <el-table-column
        label="分类图标"
        prop="">
        <template slot-scope="scope">
          <img :src="scope.row.icon" alt="" style="width: 80px; height:80px" >
        </template>
      </el-table-column>
      <el-table-column
        label="分类排序"
        prop="index">
      </el-table-column>
      <el-table-column
        label=""
      >
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="handleEdito(scope.row._id)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleremove(scope.row._id)">删除</el-button>
          <el-button size="small" type="primary" @click="getbook(scope.row._id)">获取书籍</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--<el-button-group>-->
      <!--<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>-->
      <!--<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon&#45;&#45;right"></i></el-button>-->
    <!--</el-button-group>-->
  </div>
</template>

<script>
    export default {
       data(){
         return{
           tableData:[{

           }],
           pn:1,
           size:6
         }
       },
      methods:{
        async getcategory(){
          let pn =this.pn
          let size=this.size
           const {data}= await this.$axios.get('/category')
             this.tableData=data
         },
        // handleremove(val){
        //   this.$axios.de
        // },
        handleEdito(val){
          this.$router.push(`edito/?id=${val}`)
        },
        getbook(id){
          this.$router.push(`getbook/?id=${id}&pn=1`)
        },
        handleremove(id){
          this.$confirm('此操作将永久删除该分类, 请确认该分类下没有别的图书，', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios.delete(`/category/${id}`).then(res=>{
              if(res.code==200){
                this.$message.success('删除成功')
                this.getcategory()
              }
              else{
                this.$message.error(res.msg)
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      },
      created(){
         this.getcategory()
      }
    }
</script>

<style scoped>
  .el-button-group{
   float: right;
    margin-top: 20px;
  }

</style>
