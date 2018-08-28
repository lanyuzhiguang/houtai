<template>
  <div class="allbook">
    <el-table
      :data="bookarr"
      stripe
    >
      <el-table-column
        width="180"
        style="text-align: center"
        label="书名"
        prop="title">
      </el-table-column>
      <el-table-column
        label="作者"
        prop="author">
      </el-table-column>
      <el-table-column
        label="书籍图标"
        prop="">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" style="width: 80px; height:80px" >
        </template>
      </el-table-column>
      <el-table-column
        label="书籍排序"
        prop="index">
      </el-table-column>
      <el-table-column
        label="书籍分类"
        prop="type.title">
      </el-table-column>
      <el-table-column
        label=""
      >
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="handleEdito(scope.row._id)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleremove(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        bookarr:[]
      }
    },
    methods: {
      getallbook() {
        this.$axios.get('/book').then(res => {
          if(res.code==200){
            this.bookarr=res.data
          }
        })
      },
      handleEdito(id){
        this.$router.push(`editobook/?id=${id}`)
      },
      handleremove(id){
        this.$axios.delete(`book/${id}`).then(res=>{
          if(res.code==200){
            this.$message(res.msg)
            this.getallbook()
          }else{
            this.$message.error(res.msg)
          }
        })
      }
    },
    created(){
      this.getallbook()
    }


  }
</script>

<style scoped>

</style>
