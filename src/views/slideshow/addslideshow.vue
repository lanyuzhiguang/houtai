<template>
  <div class="addswiper">
    <el-form :data="oneimg">
      <el-form-item label="轮播图名">
        <el-input v-model="oneimg.title"></el-input>
      </el-form-item>
      <el-form-item label="轮播图图片">
        <el-switch
          v-model="isupload"
          active-text="手动上传"
          inactive-text="填写链接"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
        <el-input v-model="oneimg.img" v-show="!isupload"></el-input>
        <upimg v-model="oneimg.img" v-show="isupload"></upimg>
      </el-form-item>
      <el-form-item label="轮播图排序">
        <el-input-number v-model="oneimg.index"  :min="1" :max="998" label="越大越靠前"></el-input-number>
      </el-form-item>
      <el-form-item label="轮播图对应图书">
        <el-select v-model="oneimg.type">
          <el-option
            v-for="(item,index) in swipertype"
            :key="index"
            :label="item.title"
            :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item >
        <el-button type="warning" @click="addData">添加轮播图</el-button>
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
        swipertype:[],
        isupload:true
      }
    },
    methods:{
      getallbook() {
        this.$axios.get('/book').then(res => {
          if(res.code==200){
            this.swipertype=res.data
            console.log(res.data)
          }
        })
      },
      addData(){
        this.$axios.post('/swiper',this.oneimg).then(res=>{
          if(res.code==200){
            this.$message.success(res.msg)
            this.getcategory()
          }
          else{
            this.$message.error(res.msg)
          }
        })
      },

    },
    created(){
      this.getallbook()
    }

  }
</script>

<style scoped>

</style>
