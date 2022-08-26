<template>
  <div class="dashboard-container">
    <h1>个人中心</h1>



    <div class="outer">

      <img src="https://i.postimg.cc/3NDqntTH/2021-04-06-203913.png">
      <div class="showcase">
        <div class="line">
          <span style="margin-right: 20px">用户名：</span>
          <span style="width: 100px">{{myData.cname}}</span>
          <el-input v-model:class="newName" v-show="isShow" style="margin-left: 30px"></el-input>
          <el-button @click="changeName"  size='mini' style="margin-left: 50px">编辑</el-button>
          <el-button v-show="isShow" size='mini' @click="saveNewName"  style="margin-left: 50px">保存</el-button>
          <el-button v-show="isShow" size='mini' @click="cancel" style="margin-left: 150px">取消</el-button>
        </div>

        <div class="line">
          <span style="margin-right: 20px">用户编号：</span>
          <span>{{myData.cid}}</span>
        </div>

        <div class="line">
          <span style="margin-right: 20px">余额：</span>
          <span>{{myData.money}}</span>
          <el-button @click="recharge"  size='mini' style="margin-left: 150px">充值</el-button>
        </div>

      </div>

    </div>
    <el-upload
      class="upload-demo"
      action="http://localhost/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary" >修改头像</el-button>
<!--      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
    </el-upload>
    <div style="margin-top: 30px">


    <template>
      <el-descriptions style="margin-top: 30px;background-color: #a2d0c2;" :column="3" :size="size" border
                       v-for="(item,index) in list" :key="item">
        <template slot="extra">
          <button  class="button" @click="deleteAddress(index)">删除地址</button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            用户名
          </template>
          {{ item.name }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          {{ item.phone }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            居住地
          </template>
          {{ item.address}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            备注
          </template>
          <el-tag size="small">{{ item.note }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          江苏省苏州市吴中区吴中大道 1188 号
        </el-descriptions-item>
      </el-descriptions>
    </template>
    </div>



  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import info from '@/api/login'
import user1 from "@/api/user"
import user from "@/store/modules/user"

export default {
  name: 'Dashboard',
  data(){
    return{
      isShow:false,
      newName:'',
      fileList: [],

      myData:{
        cid:7,
        cname:'胡图图',
        Cpassword:'',

        // pic:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        // money:'1000'
      },
      loginForm: {
        username: 'bobbob',
        password: '44444444'
      },
      list:[
        {
          name:'kolo',
          phone:'1234567890',
          address:'翻斗花园2号',
          note:'无'
        },{
          name:'yogo',
          phone:'1234121890',
          address:'奥比岛',
          note:'无'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  created() {
    this.setInfo();
  },
  methods:{
    //初始时显示对应信息
    setInfo(){
      this.$store.dispatch('GetInfo',this.loginForm).then(()=>{
        console.log("实时用户！！！！")
        console.log(this.myData.cname );
        console.log(user.state.name );
        this.myData.name=user.state.name;

        }
      )
    },
    //修改名字
    changeName(){
      console.log("点击修改名字按钮")
      this.isShow = true;

    },
    saveNewName(){
      if(this.newName==''){
        this.$alert('请填入字符', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              // type: 'info',
              // message: `action: ${ action }`
            });
          }
        });
      }else{
        this.myData.Cname=this.newName;
        console.log("保存修改后的名字");

        this.isShow=false;
        user.state.name=this.newName;
        //写回数据库
        console.log("this.myData.Cid:"+this.myData.Cid);
        console.log("this.myData.Cname:"+this.myData.cname);
        console.log("this.newName:"+this.newName);
        this.$store.dispatch('ChangeName',this.myData).then(()=>{
           console.log("111111")
        });


        //this.newName='';
      }

    },
    deleteAddress(index){
      console.log("删除收货地址")
      console.log(index)
      console.log(this.list[index])

    },
    cancel(){
      this.isShow=false;
    },
    recharge(){
      console.log("充值")
    },
    changePic(){
      console.log("修改头像")
      user1.changeAvatar()
        .then(response=>{
          console.log("上传成功")
        })
    }
  },

  // mounted() {
  //
  // }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
  /*display: flex;
  flex-direction: column;*/
}

.showcase{
  /*background-color: #125b82;*/
  display: flex;
  height: 250px;
  /*width: 50%;*/
  flex-direction: column;
  margin-left: 100px;
  justify-content: space-around;
}

.outer{
  display: flex;
  flex-direction: row;
  height: 200px;

}

.line{
  display: flex;
  flex-direction: row;

}

.button{
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  padding: 10px 20px;
  text-align: center;
  background-color: white;
  color: black;
  border: 2px solid #9ac5b6;
  border-radius:3px;
}
.button:hover {
  background-color: #9ac5b6;
  color: white;
}
</style>
