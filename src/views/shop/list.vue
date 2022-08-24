<template>
  <div>
    <el-table
         :data="list"
         border
         highlight-current-row
         style="width: 100%">
         <el-table-column
           prop="sid"
           label="门店编号">
         </el-table-column>
         <el-table-column
           prop="sname"
           label="门店名称">
         </el-table-column>
         <el-table-column
           prop="sscore"
           label="门店评分">
         </el-table-column>
         <el-table-column
           prop="savatar"
           label="门店头像">
         </el-table-column>
         <el-table-column
           prop="goodsnum"
           label="商品销量">
         </el-table-column>
         <el-table-column
           prop="locate"
           label="门店位置">
         </el-table-column>
         <el-table-column label="操作" width="300" align="center">
                 <template slot-scope="scope">
                     <router-link :to="'/shop/edit/'+scope.row.sid">
                         <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
                     </router-link>
                     <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.sid)">删除</el-button>
                 </template>
         </el-table-column>
    </el-table>
  </div>
</template>

<script>

  import shop from "@/api/shop";

  export default {
    name: 'List',
    data() {
      return {
        list: []
      }
    },
    created() {
     this.listShops();
    },
    methods: {
      listShops() {
        shop.getShopList().then(response => {
          console.log(response);
          this.list = response.data.shops;
        })
      },
      removeDataById(sid){
        this.$confirm('是否删除?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          shop.deleteShopById(sid)
          .then(response=>{
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            console.log(response);
            this.listShops();
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
