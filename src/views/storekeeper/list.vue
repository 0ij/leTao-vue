<template>
  <div style="margin-left: 30px;width: 90%">
    <h1>商家管理界面</h1>
    <el-input v-model="input" placeholder="请输入商家id进行搜索" style="width: 70%"></el-input>
    <el-button type="primary" @click="research">搜索</el-button>

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
                         <el-button type="primary" size="mini" icon="el-icon-edit" @click="changeStoreKeeper(scope.row)">修改</el-button>
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
        list: [],
        input:''
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
      changeStoreKeeper(row){
        this.$store.commit('SET_STOREKEEPER',row);
         // this.list= this.$store.state.storekeeper
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
      },
      research() {
        if(this.input==''){
          this.listStorekeepers();
        }else{
          storekeeper.findStorekeeperById(parseInt(this.input))
            .then(response=>{
              console.log(response);
              this.list=response.data.storekeeper;
            })
        }
      }
    }
  }

</script>

<style>
</style>
