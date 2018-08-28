<template>
<div>
  <el-upload
    class="avatar-uploader"
    :data="UploadData"
    action="https://upload-z1.qiniup.com"
    :show-file-list="false"
    :on-success="uploadSuccess">
    <img :src="value" class="category-img" v-if="value">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</div>
</template>

<script>
  export default {
    props:{
      value:{
        type:String
      }
    },
    data(){
      return{
        UploadData:{
          token:'',
        },
        currentValue:this.value
      }
    },
    methods:{
      uploadSuccess(file){
        this.$emit('input',file.url)
      },
      getToken(){//获取上传凭证
        this.$axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
          this.UploadData.token=res.data
        })
      },
    },
    created(){
      this.getToken()
    },
    watch:{
      value(val) {
        this.currentValue=val
      }
    }
  }
</script>

<style >
  .avatar-uploader{
    float: left;
    margin-top: 20px;
    border: 1px solid #f1f1f1;
    width: 60px;
    height: 60px;
    border-radius: 4px;
    position: relative;
  }
  .category-img{
    width: 100%;
    display: block;
  }
 .el-upload .el-icon-plus{
    color: #f1f1f1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    line-height:60px;
   font-size: 50px;
  }
</style>
