<template>
  <div style="width: 90%;margin-left: 20px">
    <div>
      <h1>商品销量管理界面</h1>
      <el-button type="primary" @click="addShopSale">添加店铺销量</el-button>
    </div>

    <el-input v-model="input" placeholder="请输入对应数据进行搜索" style="width: 70%"></el-input>
    <el-select v-model="value" placeholder="请选择搜索项">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button type="primary" @click="research">搜索</el-button>

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
                         <el-button type="primary" size="mini" icon="el-icon-edit" @click="changeShopSale(scope.row)">修改</el-button>
                     </router-link>
                     <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.gid)">删除</el-button>
                 </template>
         </el-table-column>
    </el-table>
  </div>
</template>

<script>

import goodssales from "@/api/goodssales";
import router from "@/router";

  export default {
    name: 'List',
    data() {
      return {
        input:'',
        list: [],
        options: [{
          value: 'sid',
          label: '店铺id'
        }, {
          value: 'gid',
          label: '商品id'
        }],
        value: ''
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
      addShopSale(){
        this.$store.state.gs={};//新增时清空
        router.push('/goodssales/tree')
      },
      changeShopSale(row){
        this.$store.commit('SET_GS',row)
        router.push('/goodssales/tree')
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
      },
      research() {
        console.log(parseInt(this.input))
        if(this.input==''){
          this.listGoodssales();
        }else{
          if(this.value!='gid'&&this.value!='sid'){
            alert("选择数据类型")
          }else{
            if(this.value=='gid'){
              goodssales.findGoodssalesByGid(parseInt(this.input))
                .then(response=>{
                  console.log(response);

                  this.list=response.data.goodssales;
                })
            }else if(this.value=='sid'){
              goodssales.findGoodssalesBySid(parseInt(this.input))
                .then(response=>{
                  console.log(response);
                  this.list=response.data.goodssales;
                })
            }
          }
        }
      }
    }
  }

</script>

<style>
</style>
