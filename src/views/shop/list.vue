<template>
  <div style="width: 90%;margin-left: 20px">
    <div style="margin-bottom: 20px">
      <h1>商店管理界面</h1>
      <el-button type="primary" @click="addShop">添加店铺</el-button>
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
                         <el-button type="primary" size="mini" icon="el-icon-edit" @click="changeShop(scope.row)">修改</el-button>
                     </router-link>
                     <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.sid)">删除</el-button>
                 </template>
         </el-table-column>
    </el-table>
  </div>
</template>

<script>
import shop from "@/api/shop";
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
          value: 'name',
          label: '商店名称'
        }],
        value: ''
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
      addShop(){
        this.$store.state.shop={};//新增时清空
        router.push('/shop/tree')
      },
      changeShop(row){
        this.$store.commit('SET_SHOP',row)
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
      },
      research() {
        console.log(parseInt(this.input))
        if(this.input==''){
          this.listShops();
        }else{
          if(this.value!='name'&&this.value!='sid'){
            alert("选择数据类型")
          }else{
            if(this.value=='sid'){
              shop.findShopById(parseInt(this.input))
                .then(response=>{
                  console.log(response);

                  this.list=response.data.shop;
                })
            }else if(this.value=='name'){
              shop.findShopByName(this.input)
                .then(response=>{
                  console.log(response);
                  this.list=response.data.shop;
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
