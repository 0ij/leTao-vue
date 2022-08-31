<template>
  <div>
    <h1 style="margin-left: 50px">商品详情界面</h1>
    <div class="outerbox">
      <div >
        <div class="block" style="margin-left:20px;width: 400px;height: 400px">
          <el-carousel trigger="click" height="400px">
            <el-carousel-item v-for="item in list" :key="item" style="width: 400px;height: 400px;display:flex;align-items:stretch">
              <img class="img" :src="item.src" style="width: 400px">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

<!--      右边部分-->
      <div style="display:flex;flex-direction: column;margin-left: 20px">
        <el-descriptions title="商品详情">
          <el-descriptions-item label="名称">
            {{ goods.gname }}
          </el-descriptions-item>
          <el-descriptions-item label="描述">
            尚无
          </el-descriptions-item>
          <el-descriptions-item label="库存">
            {{ goods.inventory }}
          </el-descriptions-item>
          <el-descriptions-item label="销量">
            尚无
          </el-descriptions-item>
          <el-descriptions-item label="单价">
            {{ goods.gprice }}
          </el-descriptions-item>
          <el-descriptions-item label="选购数量">
            <el-input-number v-model="num" @change="handleChange" :min="1" label="描述文字"></el-input-number>
          </el-descriptions-item>
        </el-descriptions>

        <div>
          <el-button style="color: crimson;flex: 1">加入购物车</el-button>
          <el-button style="color: crimson;flex: 1">购买</el-button>
        </div>
      </div>


    </div>
  </div>

</template>

<script>

import goods from "./Goods";

export default {
  name: "Item",
  data() {
    return {
      goods:[],
      list:[
        {
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage109.360doc.com%2FDownloadImg%2F2020%2F07%2F3018%2F197737862_2_20200730065908771&refer=http%3A%2F%2Fimage109.360doc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663847860&t=bc22047512cece3590f76cd0e07864a8'
        } ,
        {src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.mydrivers.com%2Fimg%2F20210622%2FSdf5d83dc-1820-4ea4-9eb8-bb2ab2185176.png&refer=http%3A%2F%2Fimg1.mydrivers.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663847940&t=5c97e26dbb6f0dbf4aef80815aebefd7',
        },{
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Feaa7912ada4c4781852e20ce054b0cb7ed539a882c58a-OvuTeL_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663847976&t=40c8842e8b4681880cbd8f66ac1b659e',
        },{
          src: 'https://img1.baidu.com/it/u=4133775097,3704782171&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=301',

        },{
          src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqny.smzdm.com%2F202203%2F02%2F619f7032364b22793.jpg_d250.jpg&refer=http%3A%2F%2Fqny.smzdm.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663848026&t=1596da3784b766e489c4e8e911cd59fd',

        }
       ],
      tabPosition: 'bottom',
      num: 1,
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: ''
    }
  },
  created() {
    this.goods=this.$store.state.goods;
    console.log(this.goods);
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>

<style scoped>
.outerbox{
  display: flex;
  flex-direction: row;
  align-items:center;
}

.showcase{
  margin-left:20px;
  width: 400px;
  height: 400px;
  background-color: #1482f0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
