<template>
<div>
  <h1 style="margin-left: 50px">订单管理界面</h1>

  <el-input v-model="input" placeholder="请输入订单号进行搜索" style="width: 70%;margin-left: 50px"></el-input>
  <el-button type="primary" @click="research">搜索</el-button>

  <!--    展示列表区域-->
  <div style="display: flex;flex-direction: column" v-for="item in list" :key="item">

    <div class="card" >

      <!--    <img class="img" :src="item.gpic" style="width: 20%;height: 20%">-->
<!--      上半部分横向-->
      <div style="background-color: #99a9bf;display: flex;flex-direction: row;justify-content: space-around">
        <img class="img" :src="item.gpic" style="width: 20%;height: 20%">
        <div style="display: flex;flex-direction: column;width: 50%">
          <span class="name">名称：{{item.gname}}</span>
          <div style="display: flex;flex-direction: row;justify-content:space-between;margin-top: 30px;">
            <span style="display:flex;width:25%;background-color: #a2d0c2;justify-content: center">款式：{{item.gtype}}</span>
            <span style="display:flex;width:25%;background-color: #a2d0c2;justify-content: center">数量：{{ item.num }}</span>
          </div>
        </div>
        <span style="display:flex;width:25%;background-color: #a2d0c2;justify-content: center;align-items: center">价格：{{ item.price }}</span>
      </div>

      <span style="background-color: #46502c">订单号：{{item.Oid}}</span>
      <span style="background-color: #46502c">快递号：{{item.courier_number}}</span>
      <div style="display: flex;flex-direction: row;justify-content: space-between">
        <span style="background-color: #46502c">收货人姓名：</span>
        <span style="background-color: #46502c">收货人电话：</span>
      </div>
      <span style="background-color: #46502c">收货地址：{{item.address}}</span>

      <div style="display: flex;flex-direction: row;justify-content: flex-end;margin-right: 30px">
        <span style="background-color: #125b82;;margin-right: 130px">库存数：</span>
        <el-button>已发货</el-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import order from "@/api/order"
import goods from "@/api/goods"

export default {
  name: "orderManage",
  data(){
    return{
      input: '',
      goods:[],
      list:[
        {
          gpic:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          Oid:11,
          Gid: 11,
          Cid:22,
          num:5,
          totalprice:90,
          address:"布达佩斯大饭店",
          state:"已发货",
          courier_number:"111-222-111"
        },{
          gpic:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          Oid:11,
          Gid: 11,
          Cid:22,
          num:5,
          totalprice:90,
          address:"布达佩斯大饭店",
          state:"已发货",
          courier_number:"111-322-111"
        },{
          gpic:'D://images//2022//08//25',
          Oid:11,
          Gid: 11,
          Cid:22,
          num:5,
          totalprice:90,
          address:"布达佩斯大饭店",
          state:"已发货",
          courier_number:"131-222-111"
        }
      ]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    listOrders(){
      order.getOrderList()
        .then(response=>{
          console.log(response);
          this.list=response.data.orders;

        })
      goods.getGoodsList()
        .then(response=>{
          console.log(response);
        })
    },
    research() {
      console.log("搜索！")
      console.log(this.input)
      console.log(parseInt(this.input))
      order.getOrderById(parseInt(this.input))
        .then(response=>{
          console.log(response);
        })
    }
  },
  created() {
    //只在界面加载时调用且只调用一次
    this.listOrders();
  },
  computed: {

  }
}
</script>

<style>
.card{
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin-left: 50px;
  margin-top: 30px;
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

</style>
