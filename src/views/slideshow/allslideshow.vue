<template>
  <div class="allslideshow">
    <el-table
      :data="allslideshowData"
      stripe
    >
      <el-table-column
        width="300"
        label="轮播图"
        prop="">
        <template slot-scope="scope">
          <img :src="scope.row.img"
               @click="changeimg(scope.row._id)"
               style="width: 200px; height:200px" >
        </template>
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
            allslideshowData:[],
            pn:1,
            size:8

          }
        },
      methods:{
          getslideshowData(){
            let pn=this.pn
            let size=this.size
            let params={
               pn,
              size
            }
            this.$axios.get('/swiper',params).then(res=>{
              this.allslideshowData=res.data
              console.log(this.allslideshowData)
            })
          },
        handleEdito(id){
         this.$router.push(`editoslideshow/?id=${id}`)
        }
      },
      created(){
          this.getslideshowData()
      }
    }
</script>

<style scoped>

</style>
