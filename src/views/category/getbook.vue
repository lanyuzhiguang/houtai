<template>
  <div class="geibook">
    <el-table
      :data="bookarr"
      stripe
    >
      <el-table-column
        width="120"
        style="text-align: center"
        label="书名"
        prop="title">
      </el-table-column>
      <el-table-column
        width="90"
        label="作者"
        prop="author">
      </el-table-column>
      <el-table-column
        width="100"
        label="书籍图标"
        prop="">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" style="width: 80px; height:80px" >
        </template>
      </el-table-column>
      <el-table-column
        width="40"
        label="书籍排序"
        prop="index">
      </el-table-column>
      <el-table-column
        width="600"
        label="简介"
        prop="desc">
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
    <el-button-group>
    <el-button type="primary" icon="el-icon-arrow-left" @click="back">上一页</el-button>
    <el-button type="primary" @click="go">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          bookarr:[],
          pn:1,
          size:2,
          pages:true

        }
      },
       methods: {
         getbook() {
           let pn=this.pn
           let size=this.size
           let id =this.$route.query.id
           this.$axios.get(`category/${id}/books`,{pn,size}).then(res => {
             if(res.code==200){
               if(res.data.books.length==0){
                 this.pages=false
               }
               else{
                 this.$router.push(`?id=${id}&pn=${pn}`)
                 this.bookarr = (res.data.books)
               }

             }
           })
         },
         go() {
           let pages = this.pages
           if (pages) {
             this.pn += 1
             this.getbook()
           }
         },
        back(){
           this.pages=true
           let pages=this.pages
           if(pages){
             this.pn--
             this.getbook()
           }
         }
       },
      created(){
         this.getbook()
      }


    }
</script>

<style scoped>
  .el-button-group{
    margin-top: 20px;
    float: right;
  }

</style>
