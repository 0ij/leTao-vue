<template>
  <el-container>
    <el-aside>
      <Aside/>
    </el-aside>
    <el-container>
      <el-main>
        <div style="margin: 10px 0">
          <el-input
              style="width: 20%"
              placeholder="请输入内容"
              clearable
              v-model="input">
          </el-input>
          <el-button type="primary" style="margin-left: 5px" @click="search">搜索</el-button>
        </div>
        <div class="block" style="width: 600px; margin: 50px auto">
          <span class="demonstration">热门商品</span>
          <el-carousel height="480px">
            <el-carousel-item v-for="item in imgList" :key="item.id">
              <img :src="item.src" class="image" style="width: 100%;height: auto" alt="热门">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div style="margin: 10px 0">
          <el-row>
            <el-col :span="8" v-for="(o, index) in 12" :key="o" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201209%2F28%2F20120928111518_AYYJr.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663845252&t=35da9a1404aa56cdc1ac2c41e90b6801" class="image" alt="汉堡">
                <div style="padding: 14px;">
                  <span>汉堡</span>
                  <div>￥10.00</div>
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

export default {
  name: 'HomeView',
  components: {
    Aside
  },
  data() {
    return {
      input: '',
      imgList: [
        {id: 0, src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/189051/9/28129/47664/62fdaf44E6cf64ab5/8a354ea159a2f136.jpg.avif'},
        {id: 1, src: 'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100036301392/FocusFullshop/CkNqZnMvdDEvMjA5OTUyLzE1LzI0MTY4LzYyMzE2LzYyZmJlZTRiRWQyMjk1NDRmL2ExODdhZmFlNDdkZTJiODUucG5nEgkzLXR5XzBfNTQwAjjui3pCEAoM6I2j6ICA5omL5py6EAFCEAoM56aP5Yip54uC5LqrEAJCEAoM56uL5Y2z5oqi6LStEAZCCgoG56eN6I2JEAdY0KSD1fQC/cr/s/q.jpg'},
        {id: 2, src: 'https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000367/1280920/FocusFullshop/CkBqZnMvdDEvNzk5NS83LzE5Mjg3LzU5NDM5LzYyZjQwOGFjRTBiNTljOGJlLzZlZjg1ZTU5MDAxZTRiOTEucG5nEgkyLXR5XzBfNTMwAjjvi3pCGAoS5Lqs6YCJ5ZOB6LSo5aW954mpEAEYAUIQCgznlYXkuqvkvJjlk4EQAkIQCgznq4vljbPmiqLotK0QBkIKCgbnp43ojYkQB1iYl04/cr/s/q.jpg'},
        {id: 3, src: 'https://imgcps.jd.com/ling4/100026667910/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02f9f7/aad78270/cr/s/q.jpg'},
        {id: 4, src: 'https://img14.360buyimg.com/da/s1180x940_jfs/t1/89877/35/8107/68939/5e01c031E62386e6b/aed10675ed2ce803.jpg.avif'}
      ]
    }
  },
  methods: {
    search() {

    },
    load() {
      router.push('/item')
    }
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
