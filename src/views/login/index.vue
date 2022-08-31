<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <h3 class="title">电商管理系统</h3>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.userid" name="username" type="text" auto-complete="on" placeholder="userid" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          name="password"
          auto-complete="on"
          placeholder="password"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          登录
        </el-button>

        <el-button  type="primary" style="margin-left:0px;margin-top:20px;width:100%;" @click.native.prevent="handleRegister">
          注册
        </el-button>



<!--      <div class="tips">-->
<!--        <span style="margin-right:20px;">username: admin</span>-->
<!--        <span> password: admin</span>-->
<!--      </div>-->
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import login from '@/api/login'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户id'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('密码不能小于3位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        userid: '2',
        password: '12345678',
        value:'customer',
      },
      options: [{
        value: 'customer',
        label: '消费者账户'
      }, {
        value: 'storekeeper',
        label: '商家账户'
      },
        {
          value: 'admin',
          label: '管理员账户'
        },
      ],
      value: '',
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  // watch: {
  //   $route: {
  //     handler: function(route) {
  //       this.redirect = route.query && route.query.redirect
  //     },
  //     immediate: true
  //   }
  // },
  methods: {
    showPwd() {
      //显示实际密码
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleRegister(){

    },
    handleLogin() {
      this.loginForm.value=this.value;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          console.log(this.value)
          //消费者登录
          if(this.value=='storekeeper'){
            console.log("ces")
            this.$store.dispatch('Login', this.loginForm).then(() => {
              console.log("商家登录")
              this.loading = false
              alert("商家登录")
              this.$router.push({ path: this.redirect || '/goodsmanage' })
              //登录后的跳转界面！！！
            }).catch(() => {
              this.loading = false
            })
          }else if(this.value=='customer')//商家登录
          {
            this.$store.dispatch('Login', this.loginForm).then(() => {
              this.loading = false
              this.$router.push({ path: this.redirect || '/homeview' })
              //登录后的跳转界面！！！
            }).catch(() => {
              this.loading = false
            })
          }else if(this.value=='admin')//管理员登录
          {
            this.$store.dispatch('Login', this.loginForm).then(() => {
              this.loading = false
              this.$router.push( '/home' )
              //登录后的跳转界面！！！
            }).catch(() => {
              this.loading = false
            })
          }else{
            alert("请选择身份类型")
          }

        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getLoginInfo(){
      // login.getInfo(token)
      //   .then(response=>{
      //
      //   })

    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
