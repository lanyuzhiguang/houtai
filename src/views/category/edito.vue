<template>
<div class="category">
  <el-form :data="formData">
    <el-form-item label="分类名">
     <el-input v-model="formData.title"></el-input>
    </el-form-item>
    <el-form-item label="分类图片">
     <upimg v-model="formData.icon"></upimg>
    </el-form-item>
    <el-form-item label="分类排序">
      <el-input-number v-model="formData.index"  :min="1" :max="998" label="越大越靠前"></el-input-number>
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
             icon:'',
             index:'',
           },
           UploadData:{
             token:'',
             key:''
           }
         }
       },
      methods:{
        async getData(){
          let id =this.$route.query.id
          try{
            const {data} = await this.$axios.get(`category/${id}`)
            this.formData=data
          }catch (err) {
            alert(err)
          }

        },
        async changeData(){
          let formData=this.formData
          let id =this.$route.query.id
          try{
            const data =await this.$axios.put(`category/${id}`,formData)
                  if(data.code==200){
                  this.$message('修改成功')
                    setTimeout(()=>{
                      this.$router.push('/my/category')
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
         this.getData();
      }
    }
</script>

<style scoped>
  .category{

  }


</style>
