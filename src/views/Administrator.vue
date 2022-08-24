<template>
  <div style="width: 100%; height: 100vh; background-color: deepskyblue; overflow: hidden">
    <div style="width: 400px; margin: 150px auto">
      <div style="color: aquamarine; font-size: 30px; text-align: center; padding: 30px 0">欢迎登录</div>
      <el-form ref="form" :model="form" size="small" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" show-password placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="text" style="color: crimson;flex: 1">忘记密码</el-button>
          <el-button type="text" style="color: crimson;flex: 1">立即注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="login">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Administrator",
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {

    }
  }
}
</script>

<style scoped>

</style>
