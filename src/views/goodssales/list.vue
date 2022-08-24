<template>
  <div>
    <el-table
         :data="list"
         border
         highlight-current-row
         style="width: 100%">
         <el-table-column
           prop="gid"
           label="商品编号">
         </el-table-column>
         <el-table-column
           prop="goodsales"
           label="商品销量">
         </el-table-column>
         <el-table-column label="操作" width="300" align="center">
                 <template slot-scope="scope">
                     <router-link :to="'/goodssales/edit/'+scope.row.gid">
                         <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
                     </router-link>
                     <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.gid)">删除</el-button>
                 </template>
         </el-table-column>
    </el-table>
  </div>
</template>

<script>

  import goodssales from "@/api/goodssales";

  export default {
    name: 'List',
    data() {
      return {
        list: []
      }
    },
    created() {
     this.listGoodssales();
    },
    methods: {
      listGoodssales() {
        goodssales.getGoodssalesList().then(response => {
          console.log(response);
          this.list = response.data.goodssales;
        })
      },
      removeDataById(gid){
        this.$confirm('是否删除?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          goodssales.deleteGoodssalesById(gid)
          .then(response=>{
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            console.log(response);
            this.listGoodssales();
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
