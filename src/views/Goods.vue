<template>
  <el-container>
    <el-aside>
      <Aside/>
    </el-aside>
    <el-container>
      <el-main>
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
  name: "Goods",
  components: {
    Aside
  },
  data() {
    return {

    }
  },
  methods: {
    load() {
      router.push('/item')
    }
  }
}
</script>

<style scoped>

</style>
