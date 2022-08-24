<template>
  <div style="width: 100%; height: 100vh; background-color: deepskyblue; overflow: hidden">
    <div style="width: 400px; margin: 150px auto">
      <div style="color: aquamarine; font-size: 30px; text-align: center; padding: 30px 0">欢迎登录</div>
      <el-form ref="form" :model="form" size="small">
        <el-form-item>
          <el-button style="width: 100%" @click="customer">我是用户</el-button>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" @click="storekeeper">我是商家</el-button>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" @click="administrator">我是管理员</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

import router from "@/router";

export default {
	name: 'Login',
  data() {
    return {
      form: {}
    }
  },
  methods: {
    customer() {
      router.push('/customer')
    },
    storekeeper() {
      router.push('/storekeeper')
    },
    administrator() {
      router.push('/administrator')
    }
  }
}
</script>

<style>
</style>
