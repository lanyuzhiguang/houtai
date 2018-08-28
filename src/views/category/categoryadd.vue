<template>
  <div class="addcategory">
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
        <el-button type="warning" @click="changeData">添加分类</el-button>
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
      }
    },
    methods:{
      changeData(){
        this.$axios.post('/category',this.formData).then(res=>{
          if(res.code==200){
            this.$message.success('添加成功')
          }
          else{
            this.$message.error(res.msg)
          }
        })
      }
    }
  }
</script>

<style scoped>



</style>
