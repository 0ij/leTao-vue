<template>
  <el-container>
    <el-aside>
      <Aside/>
    </el-aside>
    <el-container>
      <el-main>
        <div style="margin: 10px 0">
          <GoodsList/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "@/components/Aside";
import router from "@/router";
import goods from "@/api/goods"
import GoodsList from "../components/GoodsList";

export default {
  name: "Goods",
  components: {
    Aside,
    GoodsList
  },
  data() {
    return {

    }
  },
  // created() {
  //   this.listGoods();
  // },
  methods: {
    // listGoods() {
    //   goods.getGoodsList()
    //     .then(response=>{
    //       console.log(response);
    //       this.list=response.data.Goods;
    //       if(response.data.Goods.onSale==true){
    //         // this.onS = '未下架'
    //         // this.onSB = '商品下架'
    //       }else{
    //         // this.onS = '已下架'
    //         // this.onSB = '商品上架'
    //       }
    //     })
    // }
  }
}
</script>

<style scoped>

</style>
