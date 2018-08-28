<template>
  <div class="category">
    <el-form :data="formData">
      <el-form-item label="分类名">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="分类图片">
        <el-upload
          class="avatar-uploader"
          :data="UploadData"
          action="https://upload-z1.qiniup.com"
          :show-file-list="false"
          :on-success="uploadSuccess"
          :before-upload="beforeUpload">
          <img :src="formData.icon" class="category-img" v-if="formData.icon">
          <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
        </el-upload>
      </el-form-item>
      <el-form-item label="分类排序">
        <el-input-number v-model="formData.index"  :min="1" :max="998" label="越大越靠前"></el-input-number>
      </el-form-item>
      <el-form-item >
        <el-button type="warning" >提交修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
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
      uploadSuccess(file){
        this.formData.icon=file.url
      },
      beforeUpload(){

      },
      getToken(){//获取上传凭证
        this.$axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
          this.UploadData.token=res.data
        })
      }

    },
    created(){
      this.getData();
      this.getToken()
    }
  }
</script>

<style scoped>
  .category{
    margin: 0 50px;
  }
  .avatar-uploader{
    float: left;
    margin-top: 20px;
    border: 1px solid #f1f1f1;
    width: 60px;
    height: 60px;
    border-radius: 4px;
  }
  .category-img{
    width: 100%;
    display: block;

  }
</style>
