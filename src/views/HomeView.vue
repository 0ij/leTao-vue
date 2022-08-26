<template>
  <el-container>
    <el-aside>
      <Aside/>
    </el-aside>
    <el-container>
      <el-main>
        <div class="block" style="width: 600px;">
          <span >热门商品</span>
          <el-carousel height="480px">
            <el-carousel-item v-for="item in imgList" :key="item.id">
              <img :src="item.src" class="image" style="width: 100%;height: auto" alt="热门">
            </el-carousel-item>
          </el-carousel>
        </div>

        <div style="margin: 10px 0">
          <el-input
            style="width: 50%"
            placeholder="请输入内容"
            clearable
            v-model="input">
          </el-input>
          <el-button type="primary" style="margin-left: 5px" @click="search">搜索</el-button>
        </div>

        <GoodsList/>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import Aside from "@/components/Aside";
import router from "@/router";
import goods from "@/api/goods"
import input from "element-ui/packages/input";
import GoodsList from "../components/GoodsList";

export default {
  name: 'HomeView',
  components: {
    Aside,
    GoodsList
  },
  data() {
    return {
      input: '',
      goods: {},
      imgList: [
        {id: 0, src: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t20590/215/515426016/219946/fe4c5796/5b0faae4N6f3aab95.jpg!q80.dpg'},
        {id: 1, src: 'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100036301392/FocusFullshop/CkNqZnMvdDEvMjA5OTUyLzE1LzI0MTY4LzYyMzE2LzYyZmJlZTRiRWQyMjk1NDRmL2ExODdhZmFlNDdkZTJiODUucG5nEgkzLXR5XzBfNTQwAjjui3pCEAoM6I2j6ICA5omL5py6EAFCEAoM56aP5Yip54uC5LqrEAJCEAoM56uL5Y2z5oqi6LStEAZCCgoG56eN6I2JEAdY0KSD1fQC/cr/s/q.jpg'},
        {id: 2, src: 'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000367/1280920/FocusFullshop/CkBqZnMvdDEvNzk5NS83LzE5Mjg3LzU5NDM5LzYyZjQwOGFjRTBiNTljOGJlLzZlZjg1ZTU5MDAxZTRiOTEucG5nEgkyLXR5XzBfNTMwAjjvi3pCGAoS5Lqs6YCJ5ZOB6LSo5aW954mpEAEYAUIQCgznlYXkuqvkvJjlk4EQAkIQCgznq4vljbPmiqLotK0QBkIKCgbnp43ojYkQB1iYl04/cr/s/q.jpg'},
        {id: 3, src: 'https://imgcps.jd.com/ling4/100026667910/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02f9f7/aad78270/cr/s/q.jpg'},
        {id: 4, src: 'https://img14.360buyimg.com/da/s1180x940_jfs/t1/89877/35/8107/68939/5e01c031E62386e6b/aed10675ed2ce803.jpg.avif'}
      ],
    }
  },
  // created() {
  //   this.listGoods();
  // },
  methods: {
    search() {
      this.info(input)
      this.$router.push("/goods")
    },
    info(Gid) {
      goods.findGoodsById(Gid).then(response => {
        console.log(response)
        this.goods=response.data.items
      })
    },
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
    //
    //     })
    // }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.typing {
  color: #9ac5b6;
  font-size: 2em;
  width: 21em;
  height: 1.5em;
  border-right: 1px solid transparent;
  animation: typing 2s steps(42, end), blink-caret .75s step-end infinite;
  font-family: Consolas, Monaco;
  word-break: break-all;
  overflow: hidden;
}
/* 打印效果 */
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 21em;
  }
}

/* 光标 */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: currentColor;
  }
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
