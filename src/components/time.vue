<template>
<div>
  <upimg ></upimg>
</div>
</template>

<script>
  import upimg from './upimg'
    export default {
      components:{
        upimg
      },
    data(){
      return{

      }


    },
         //时间戳
         filters: {
           time: function (value) {
             let d = new Date(value)
             return (d.getFullYear()) + '-'
               + (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) + '-'
               + (d.getDate() > 9 ? d.getDate() : '0' + d.getDate())+"   "
               +(d.getHours())+':'
               +( d.getMinutes()+ 1 >9 ? d.getMinutes() + 1 : '0'+d.getMinutes())+':'
               +( d.getSeconds())
           }
         },
         uploadSuccess(file){
           this.formData.icon=file.url
         }

    }
</script>

<style scoped>

</style>
