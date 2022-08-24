<template>
  <div>
    <el-table
         :data="list"
         border
         highlight-current-row
         style="width: 100%">
         <el-table-column
           prop="kid"
           label="商家编号">
         </el-table-column>
         <el-table-column
           prop="kname"
           label="商家名称">
         </el-table-column>
         <el-table-column
           prop="kpassword"
           label="商家密码">
         </el-table-column>
         <el-table-column
           prop="kavatar"
           label="商家头像">
         </el-table-column>
         <el-table-column
           prop="sid"
           label="门店编号">
         </el-table-column>
         <el-table-column label="操作" width="300" align="center">
                 <template slot-scope="scope">
                     <router-link :to="'/storekeeper/edit/'+scope.row.kid">
                         <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
                     </router-link>
                     <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.kid)">删除</el-button>
                 </template>
         </el-table-column>
    </el-table>
  </div>
</template>

<script>

  import storekeeper from "@/api/storekeeper";

  export default {
    name: 'List',
    data() {
      return {
        list: []
      }
    },
    created() {
     this.listStorekeepers();
    },
    methods: {
      listStorekeepers() {
        storekeeper.getStorekeeperList().then(response => {
          console.log(response);
          this.list = response.data.storekeepers;
        })
      },
      removeDataById(kid){
        this.$confirm('是否删除?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          storekeeper.deleteStorekeeperById(kid)
          .then(response=>{
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            console.log(response);
            this.listStorekeepers();
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }

</script>

<style>
</style>
