<template>
  <div class="editobook">
    <el-form :data="formData">
      <el-form-item label="书籍名">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="formData.author"></el-input>
      </el-form-item>
      <el-form-item label="书籍图片">
        <upimg v-model="formData.img"></upimg>
      </el-form-item>
      <el-form-item label="书籍排序">
        <el-input-number v-model="formData.index"  :min="1" :max="998" label="越大越靠前"></el-input-number>
      </el-form-item>
      <el-form-item label="书籍简介">
        <el-input v-model="formData.desc"></el-input>
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
        formData:{
          title:'',
          author:'',
          img:'',
          index:'',
          dsec:'',
          type:''
        },
        booktype:[],

      }
    },
    methods:{
      async getData(){
        let id =this.$route.query.id
        try{
          const {data} = await this.$axios.get(`book/${id}`)
          this.formData=data
          this.formData.book_id =this.$route.query.id
        }catch (err) {
          alert(err)
        }

      },
      async gettype(){
        const {data}= await this.$axios.get('/category')
        this.booktype=data
      },
      async changeData(){
        let formData=this.formData

        try{
          const data =await this.$axios.put('book',formData)
          if(data.code==200){
            this.$message('修改成功')
            setTimeout(()=>{
              this.$router.push('/my/allbook')
            },1000)
          }else{
            this.$message.error(data.msg)
          }
        }catch (err) {
          alert(err)
        }
      }
    },
    created(){
      this.gettype()
      this.getData();

    }
  }
</script>

<style scoped>
  .category{

  }


</style>
