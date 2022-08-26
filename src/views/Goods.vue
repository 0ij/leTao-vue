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
        // list:[{
        //   gid:'121',
        //   gpic:'https://pic2.zhimg.com/v2-a3c175180fa7ec48700a5ab8325ca92e_1440w.jpg?source=172ae18b',
        //   gname:'衣服1',
        //   gtype:'11',
        //   price:'134',
        //   inventory:'890',
        //   sid:'12',
        //   onSale:'1'
        // },{
        //   gid:'1',
        //   gpic:'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/1c6c/1c6c4b391281ad7fc1e937bce01e6c3b_0_0_0_0_water.jpg',
        //   gname:'衣服3',
        //   gtype:'11',
        //   price:'134',
        //   inventory:'890',
        //   sid:'12',
        //   onSale:'1'
        // }
        // ]
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
