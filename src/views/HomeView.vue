<template>
  <div>
    <div style="display: flex;flex-direction: row">
      <el-aside>
        <Aside/>
      </el-aside>

      <div style="display:flex;flex-direction: column;width:100%">
        <div class="block" style="width: 600px;margin-top: 20px">

          <el-carousel height="480px">
            <el-carousel-item v-for="item in imgList" :key="item.id">
              <img :src="item.src" class="image" style="width: 100%;height: auto" alt="热门">
            </el-carousel-item>
          </el-carousel>
        </div>

        <div style="margin: 10px 0">
          <el-input
            style="width: 50%"
            placeholder="请输入商品名"
            clearable
            v-model="input">
          </el-input>
          <el-button type="primary" style="margin-left: 5px" @click="search">搜索</el-button>
        </div>

        <div style="width:140%;height: 50px;margin-left: -220px;margin-bottom: 10px">
          <hr>
          <span style="margin-left: 120px;color: #304156">推荐</span>
          <hr>
        </div>
        <div class="outer" style="display:flex;flex-direction: row" >
          <div class="inner" v-for="(item, index) in list" :key="item" :offset="index > 0 ?2 : 0" >
            <div style="display: flex;flex-direction: column;">
              <img class="img" :src="item.gpic" style="width:100%">
              <div style="padding: 10px;">
                <span>{{ item.gname }}</span>
                <div>￥ {{ item.gprice }}</div>
                <div class="bottom clearfix">
                  <el-button type="text" class="button" @click="load(index)">详情</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

</template>

<script>

import Aside from "@/components/Aside";
import router from "@/router";
import goods from "@/api/goods"

export default {
  name: 'HomeView',
  components: {
    Aside
  },
  data() {
    return {
      input: '',
      isShow:false,
      TreeListKeys:[],
      imgList: [
        {id: 0, src: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t20590/215/515426016/219946/fe4c5796/5b0faae4N6f3aab95.jpg!q80.dpg'},
        {id: 1, src: 'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100036301392/FocusFullshop/CkNqZnMvdDEvMjA5OTUyLzE1LzI0MTY4LzYyMzE2LzYyZmJlZTRiRWQyMjk1NDRmL2ExODdhZmFlNDdkZTJiODUucG5nEgkzLXR5XzBfNTQwAjjui3pCEAoM6I2j6ICA5omL5py6EAFCEAoM56aP5Yip54uC5LqrEAJCEAoM56uL5Y2z5oqi6LStEAZCCgoG56eN6I2JEAdY0KSD1fQC/cr/s/q.jpg'},
        {id: 2, src: 'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000367/1280920/FocusFullshop/CkBqZnMvdDEvNzk5NS83LzE5Mjg3LzU5NDM5LzYyZjQwOGFjRTBiNTljOGJlLzZlZjg1ZTU5MDAxZTRiOTEucG5nEgkyLXR5XzBfNTMwAjjvi3pCGAoS5Lqs6YCJ5ZOB6LSo5aW954mpEAEYAUIQCgznlYXkuqvkvJjlk4EQAkIQCgznq4vljbPmiqLotK0QBkIKCgbnp43ojYkQB1iYl04/cr/s/q.jpg'},
        {id: 3, src: 'https://imgcps.jd.com/ling4/100026667910/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02f9f7/aad78270/cr/s/q.jpg'},
        {id: 4, src: 'https://img14.360buyimg.com/da/s1180x940_jfs/t1/89877/35/8107/68939/5e01c031E62386e6b/aed10675ed2ce803.jpg.avif'}
      ],
      list:[{
        gid:'121',
        gpic:'https://pic2.zhimg.com/v2-a3c175180fa7ec48700a5ab8325ca92e_1440w.jpg?source=172ae18b',
        gname:'衣服1',
        gtype:'11',
        gprice:'134',
        inventory:'890',
        sid:'12',
        onSale:'1'
      },{
        gid:'1',
        gpic:'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/1c6c/1c6c4b391281ad7fc1e937bce01e6c3b_0_0_0_0_water.jpg',
        gname:'衣服3',
        gtype:'11',
        gprice:'134',
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
    search() {
      console.log("搜索");
      // this.form.gid=parseInt(this.input)
      console.log("this.input "+this.input) ;
      if(this.input===''){
        alert("请输入商品名")
      }else{
        goods.findGoodsByName(this.input)
          .then(response=>{
            console.log(response)
            this.list=response.data.goodsList;
            //返回失败message之后直接有alert弹窗
            // if(response.data.goodsList==null){
            //   this.isShow=true;
            // }
          })
      }

    },
    load(index) {
      console.log(this.list[index])
      this.$store.commit("SET_GOODS",this.list[index])
      console.log("store获取值"+this.$store.state.goods);
      this.$router.push('/item')
    },
    listGoods(){
      goods.getGoodsList()
        .then(response=>{
         // console.log(response);
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

.title{
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: -100px;
  background: #EEE url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAHklEQVQImWNkYGBgYGD4//8/A5wF5SBYyAr+//8PAPOCFO0Q2zq7AAAAAElFTkSuQmCC) repeat;
  text-shadow: 3px -3px black, 2px -2px white;

  font-weight: bold;

  -webkit-text-fill-color: transparent;

  -webkit-background-clip: text;


}

.title1{
  width: 150%;
  margin-left: -200px;
  height: 50px;
  background-color: #99a9bf;

  font-size: 20px;
}

.outer {
    width: 120%;
    margin-left: -100px;
    text-align: center;
    display: flex;
    align-content: flex-start;
    flex-flow: row wrap;
  }


.inner {
    flex: 0 0 15%;
    margin-bottom: 20px;
    margin-left: 20px;
    box-shadow: 0 0 5px 1px #999


}

.showcase{
  margin-left: 20px;
  width:500px;
  padding-left: 50px;
  background-color: #99a9bf;
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
