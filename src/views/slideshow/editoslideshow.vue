<template>
  <div class="swiper">
    <el-form :data="oneimg">
      <el-form-item label="分类名">
        <el-input v-model="oneimg.title"></el-input>
      </el-form-item>
      <el-form-item label="分类图片">
        <upimg v-model="oneimg.img"></upimg>
      </el-form-item>
      <el-form-item label="分类排序">
        <el-input-number v-model="oneimg.index"  :min="1" :max="998" label="越大越靠前"></el-input-number>
      </el-form-item>
      <el-form-item >
        <el-button type="warning" @click="changeData">提交修改</el-button>
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
        oneimg:{
          img:"",
          title:"",
          book:"",
          index:"",
        },
    }
    },
    methods:{
      getimg(){
        let id =this.$route.query.id
        this.$axios.get(`/swiper/${id}`).then(res=>{
          this.oneimg=res.data
          this.oneimg.book=this.oneimg.book._id
        })
      },
      changeData(){
        let id =this.$route.query.id
        console.log( this.oneimg.book)
       this.$axios.put(`/swiper/${id}`,this.oneimg).then(res=>{
         if(res.code==200){
           this.$message('修改成功')
           setTimeout(()=>{
             this.$router.push('/my/allslideshow')
           },1000)
         }else{
           this.$message.error(res.msg)
         }
       })
      }

    },
    created(){
      this.getimg()
    }
  }
</script>

<style scoped>

</style>
