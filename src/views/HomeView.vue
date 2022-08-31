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
            placeholder="请输入商品名"
            clearable
            v-model="input">
          </el-input>
          <el-button type="primary" style="margin-left: 5px" @click="search">搜索</el-button>
        </div>

        <el-row>
          <el-col :span="8" v-for="(item, index) in list" :key="item" :offset="index > 0 ?8 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <!--                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201209%2F28%2F20120928111518_AYYJr.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663845252&t=35da9a1404aa56cdc1ac2c41e90b6801" class="image" alt="汉堡">-->
             <div style="display: flex;flex-direction: column;">
               <img class="img" :src="item.gpic" style="width: 100%">
               <div style="padding: 14px;">
                 <span>{{ item.gname }}</span>
                 <div>￥ {{ item.price }}</div>
                 <div class="bottom clearfix">
                   <el-button type="text" class="button" @click="load(index)">详情</el-button>
                 </div>
               </div>
             </div>

            </el-card>
            <el-card :body-style="{ padding: '0px' }" v-show="isShow">
              无搜索商品
            </el-card>
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </el-container>
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
    search() {
      console.log("搜索");
      // this.form.gid=parseInt(this.input)
      console.log("this.input "+this.input) ;
      if(this.input==''){
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
      router.push('/item')
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
    mouseenter(o, index) {
      // alert("enter");
      console.log(index);
      this.treein = true;
      // this.treeout = false;
      // this.subtreein = true;
      // this.subtreeout = false;
      this.SubTreeXianShi = true;
      console.log(o);
      this.list1 = this.TreeList[o];
      this.subTreekeys = Object.keys(this.TreeList[o]);
      console.log(this.list1);
      console.log(this.subTreekeys);
    },
    mouseleave(index) {
      // alert(this.subtreein);
      // alert("leave");
      this.treein = false;
      console.log(index);
      // this.treeout = true;
      // if (this.treein == false && this.subtreein == false) {
      //   this.SubTreeXianShi = false;
      // }
      setTimeout(() => {
        console.log(index);
        // alert(
        //   index +
        //     " " +
        //     "treein: " +
        //     this.treein +
        //     "subtreein: " +
        //     this.subtreein
        // );

        if (this.treein == false && this.subtreein == false) {
          this.SubTreeXianShi = false;
        }
        // 方法区
      }, 1);
      // if (this.treein == false) {
      //   if (index == 1) {
      //     alert(this.mouseY);
      //     if (this.xiangduiX < 0) {
      //       this.SubTreeXianShi = false;
      //     } else {
      //       if (this.mouseY < 238) {
      //         this.SubTreeXianShi = false;
      //       }
      //     }
      //   } else if (index == 10) {
      //     alert(this.mouseY);
      //     if (this.xiangduiX < 0) {
      //       this.SubTreeXianShi = false;
      //
      //   } else {
      //     if (this.xiangduiX < 0) {
      //       this.SubTreeXianShi = false;
      //     }
      //   }
      // }
      // this.SubTreeXianShi = false ;
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
