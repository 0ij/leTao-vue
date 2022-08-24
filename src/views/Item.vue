<template>
  <el-container>
    <el-aside>
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="1">
          <el-image :src="src1"></el-image>
        </el-tab-pane>
        <el-tab-pane label="2">
          <el-image :src="src2"></el-image>
        </el-tab-pane>
        <el-tab-pane label="3">
          <el-image :src="src3"></el-image>
        </el-tab-pane>
        <el-tab-pane label="4">
          <el-image :src="src4"></el-image>
        </el-tab-pane>
        <el-tab-pane label="5">
          <el-image :src="src5"></el-image>
        </el-tab-pane>
      </el-tabs>
    </el-aside>

    <el-container>
      <el-main style="margin: 10px 200px">
        <el-descriptions title="商品详情">
          <el-descriptions-item label="名称">
            <el-button type="text" disabled>OPPO手机</el-button>
          </el-descriptions-item>
          <el-descriptions-item label="描述">
            <el-button type="text" disabled>5G</el-button>
          </el-descriptions-item>
          <el-descriptions-item label="库存">
            <el-button type="text" disabled>10000</el-button>
          </el-descriptions-item>
          <el-descriptions-item label="销量">
            <el-button type="text" disabled>2000</el-button>
          </el-descriptions-item>
          <el-descriptions-item label="单价">
            <el-button type="text" disabled>3999</el-button>
          </el-descriptions-item>
          <el-descriptions-item label="选购数量">
            <el-input-number v-model="num" @change="handleChange" :min="1" label="描述文字"></el-input-number>
          </el-descriptions-item>
        </el-descriptions>

        <el-button style="color: crimson;flex: 1">加入购物车</el-button>
        <el-button style="color: crimson;flex: 1">购买</el-button>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: "Item",
  data() {
    return {
      src1: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage109.360doc.com%2FDownloadImg%2F2020%2F07%2F3018%2F197737862_2_20200730065908771&refer=http%3A%2F%2Fimage109.360doc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663847860&t=bc22047512cece3590f76cd0e07864a8',
      src2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.mydrivers.com%2Fimg%2F20210622%2FSdf5d83dc-1820-4ea4-9eb8-bb2ab2185176.png&refer=http%3A%2F%2Fimg1.mydrivers.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663847940&t=5c97e26dbb6f0dbf4aef80815aebefd7',
      src3: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Feaa7912ada4c4781852e20ce054b0cb7ed539a882c58a-OvuTeL_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663847976&t=40c8842e8b4681880cbd8f66ac1b659e',
      src4: 'https://img1.baidu.com/it/u=4133775097,3704782171&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=301',
      src5: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqny.smzdm.com%2F202203%2F02%2F619f7032364b22793.jpg_d250.jpg&refer=http%3A%2F%2Fqny.smzdm.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663848026&t=1596da3784b766e489c4e8e911cd59fd',
      tabPosition: 'bottom',
      num: 1,
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: ''
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>

<style scoped>

</style>
