<template>
  <div class="addbook">
    <el-form :data="formData">
      <el-form-item label="爬虫链接">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="书籍图片">
        <el-switch
          v-model="isupload"
          active-text="手动上传"
          inactive-text="填写链接"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
        <el-input v-model="formData.url" v-show="!isupload"></el-input>
        <upimg v-model="formData.url" v-show="isupload"></upimg>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="formData.author"></el-input>
      </el-form-item>
      <el-form-item label="书籍分类">
        <el-select v-model="formData.type">
          <el-option
            v-for="(item,index) in booktype"
            :key="index"
            :label="item.title"
            :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item >
        <el-button type="warning" @click="addData">提交添加</el-button>
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
        formData:{
          desc:'',
          author:'',
          img:'',
          typeId:''
        },
        booktype:[],
        isupload:true

      }
    },
    methods:{
      async addData(){
        console.log(124)
        try{
          const data =await this.$axios.post('/book',this.formData)
          if(data.code==200){
            this.$message(data.msg)
              this.$router.push('/my/allbook')
          }else{
            this.$message.error(data.msg)
          }
        }
        catch (err) {
          alert(err)
        }
      },
      async gettype(){
        const {data}= await this.$axios.get('/category')
        this.booktype=data
      },
    },
    created(){
      this.gettype()
    }
  }
</script>

<style scoped>
  .category{

  }


</style>
