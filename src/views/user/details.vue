<template>
  <div class="details">
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        width="180"
        style="text-align: center"
        label="用户名"
        prop="username">
      </el-table-column>
      <el-table-column
        label="创建日期"
        prop="createdTime">
      </el-table-column>
      <el-table-column
        label="用户头像"
        prop="">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" class="user-avatar">
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button size="small" type="primary" >查看详情</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        data(){
          return{
            tableData:[{

            }]
          }
        },
      methods:{
       getoneuser(){
         this.$axios.get('/')
       }
      }
    }
</script>

<style scoped>

</style>
