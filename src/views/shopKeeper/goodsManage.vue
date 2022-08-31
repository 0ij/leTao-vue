<template>
  <div>

    <h1 style="margin-left: 50px">商品管理界面</h1>
    <el-input v-model="input" placeholder="请输入商品id进行查询" style="width: 70%;margin-left: 50px"></el-input>
    <el-button   type="primary" @click="research">搜索</el-button>

<!--    展示列表区域-->
    <div class="card" v-for="(item,index) in list" :key="item">
      <img class="img" :src="item.gpic" style="width: 10%">
      <div style="width: 400px">

        <span class="name">商品名：{{item.gname}}</span>
        <div style="display: flex;flex-direction: row;justify-content:space-between;margin-top: 30px;">
          <span style="display:flex;width:25%;background-color: #a2d0c2;justify-content: center">款式：{{item.gtype}}</span>
          <span style="display:flex;width:35%;background-color: #a2d0c2;justify-content: center">价格：{{ item.gprice }} 元</span>
          <span style="display:flex;width:25%;background-color: #a2d0c2;justify-content: center">销量：{{ item.inventory }}</span>
        </div>
        <span class="name" style="margin-top: 30px">商品状态: {{onS}}</span>

      </div>

      <button class="button" @click="edit(index)">修改信息</button>
      <div style="display: flex;flex-direction: column">
        <button class="button" @click="putAd">商品推广</button>
        <button class="button" style="margin-top: 100px" @click="off">{{ onSB }}</button>
      </div>
    </div>
    <br>
    <div class="card" v-show="isShow"> 没有搜索的商品</div>
    <div class="card" v-show="isShow1"> 无数据</div>

  </div>

</template>

<script>
import goods from "@/api/goods"
import axios from "axios";

export default {
  name: "goodsManage",
  data(){
    return{
      input:'',
      onS:'',
      onSB:'',
      isShow:false,
      isShow1:false,
      form: {
        gid:'12',
        // gpic:'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/1c6c/1c6c4b391281ad7fc1e937bce01e6c3b_0_0_0_0_water.jpg',
        // gname:'衣服',
        // gtype:'11',
        // gprice:'134',
        // inventory:'890',
        // sid:'12',
        // onSale:'1'
      },
      formLabelWidth: '120px',
      list:[
        {
          gid:'121',
          gpic:'https://pic2.zhimg.com/v2-a3c175180fa7ec48700a5ab8325ca92e_1440w.jpg?source=172ae18b',
          gname:'衣服1',
          gtype:'11',
          price:'134',
          inventory:'890',
          sid:'12',
          onSale:'1'
        },{
          gid:'12',
          gpic:'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/1c6c/1c6c4b391281ad7fc1e937bce01e6c3b_0_0_0_0_water.jpg',
          gname:'衣服2',
          gtype:'11',
          price:'134',
          inventory:'890',
          sid:'12',
          onSale:'1'
        },
        {
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
  methods:{
    listGoods(){
      goods.getGoodsList()
        .then(response=>{
          console.log(response);
          this.list=response.data.Goods;
          if(response.data.Goods.onSale==true){
            this.onS = '未下架'
            this.onSB = '商品下架'
          }else{
            this.onS = '已下架'
            this.onSB = '商品上架'
          }

          if(response.data.Goods.length==0){
            this.isShow1=true;
          }
        })
    },
    research(){
      console.log("搜索");
      // this.form.gid=parseInt(this.input)
       console.log("this.input "+this.input) ;
      goods.findGoodsById(parseInt(this.input))
        .then(response=>{
          console.log(response)
          this.list=response.data.items;
          if(response.data.items==null){
            this.isShow=true;
          }
        })
    },
    edit(index){
      console.log("修改信息");
      console.log("index: "+index);
      this.$store.commit('SET_GOODSMANAGEINFO',this.list[index])
      this.$router.push('/form/index')

    },
    putAd(){
      console.log("放广告")
    },
    off(){
      console.log("下架商品")
    }
  },
  created() {
    this.listGoods();
  },
  computed(){

  }
}
</script>

<style>
.card{
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-left: 50px;
  margin-top: 30px;
  margin-right: 20px;
  font-family: Arial;
  font-size: 18px;
  line-height: 30px;
  font-weight: bold;
  color: #010a06;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 0 10px #a2d0c2;
}

.name{
  display: flex;
  font-size: larger;
  justify-content: space-around;
  background-color: #a2d0c2;
}

.button{
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  padding: 16px 32px;
  text-align: center;
  background-color: white;
  color: black;
  border: 2px solid #9ac5b6;
  border-radius:5px;
}
.button:hover {
  background-color: #9ac5b6;
  color: white;
}

</style>
