<template>
  <el-container>
    <el-aside>
      <Aside/>
    </el-aside>
    <el-container>
      <el-main>
        <div style="margin: 10px 0">
          <el-row>
            <el-col :span="8" v-for="(item, index) in list" :key="item" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
<!--                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201209%2F28%2F20120928111518_AYYJr.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663845252&t=35da9a1404aa56cdc1ac2c41e90b6801" class="image" alt="汉堡">-->
                <img class="img" :src="item.gpic" style="width: 10%">
                <div style="padding: 14px;">
                  <span>{{ item.gname }}</span>
                  <div>￥{{ item.price }}</div>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button" @click="load">详情</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "@/components/Aside";
import router from "@/router";
import goods from "@/api/goods"

export default {
  name: "Goods",
  components: {
    Aside
  },
  data() {
    return {
        list:[{
          gid:'121',
          gpic:'https://pic2.zhimg.com/v2-a3c175180fa7ec48700a5ab8325ca92e_1440w.jpg?source=172ae18b',
          gname:'衣服1',
          gtype:'11',
          price:'134',
          inventory:'890',
          sid:'12',
          onSale:'1'
        },{
          gid:'1',
          gpic:'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/1c6c/1c6c4b391281ad7fc1e937bce01e6c3b_0_0_0_0_water.jpg',
          gname:'衣服3',
          gtype:'11',
          price:'134',
          inventory:'890',
          sid:'12',
          onSale:'1'
        }
        ]
    }
  },
  created() {
    this.listGoods();
  },
  methods: {
    load() {
      router.push('/item')
    },
    listGoods(){
      goods.getGoodsList()
        .then(response=>{
          console.log(response);
          this.list=response.data.Goods;
          if(response.data.Goods.onSale==true){
            // this.onS = '未下架'
            // this.onSB = '商品下架'
          }else{
            // this.onS = '已下架'
            // this.onSB = '商品上架'
          }

        })
    },
  }
}
</script>

<style scoped>

</style>
