<template>
  <div style="border-bottom: 1px solid #ccc;display: flex">
    <div style="width: 100px;padding-left: 30px;font-weight: bold;color: deepskyblue">乐淘</div>
    <div style="flex: 1">
      <el-button type="text" style="color: black" @click="login">你好，请登录</el-button>
    </div>
    <div style="flex: 1">
      <el-button type="text" style="color: crimson" @click="register">免费注册</el-button>
    </div>
    <div style="width: 60px;padding-right: 30px">
      <el-dropdown>
        <span class="el-dropdown-Link">
          我的
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item @click="back">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Header",
  methods: {
    back() {
      router.push('/login')
    },
    login() {
      router.push('/login')
    },
    register() {
      router.push('/register')
    }
  }
}
</script>

<style scoped>
</style>