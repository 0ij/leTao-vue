<template>
<div>
  <h1 style="margin-left: 50px">订单管理界面</h1>

  <el-input v-model="input" placeholder="请输入订单号进行搜索" style="width: 70%;margin-left: 50px"></el-input>
  <el-button type="primary" @click="research">搜索</el-button>

  <!--    展示列表区域-->
  <div style="display: flex;flex-direction: column" v-for="(item,index) in list" :key="item">
    <div class="card" >
<!--      <div v-for="(data,k) in item.goodsList":key="k" >-->
      <div v-for="(data,k) in item.goodsList":key="k" >
        <!--      上半部分横向-->
          <div  style="background-color: #ffffff;display: flex;flex-direction: row;justify-content: space-around">
            <img class="img" :src="data.gpic" style="width: 20%;height: 20%">
            <div style="display: flex;flex-direction: column;width: 50%">
             <span class="name">名称：{{data.gname}}</span>
              <div style="display: flex;flex-direction: row;justify-content:space-between;margin-top: 30px;">
                <span style="display:flex;width:25%;background-color: #a2d0c2;justify-content: center">款式：{{data.gtype}}</span>
               <span style="display:flex;width:25%;background-color: #a2d0c2;justify-content: center">数量：{{ item.num }}</span>
              </div>
            </div>
            <div style="display: flex;flex-direction: column;margin-top: 150px">
              <span style="display:flex;background-color: #a2d0c2;justify-content: center;align-items: center">价格：{{ data.price }}</span>
              <span style="background-color: #ffffff;;margin-right: 130px">库存数：{{data.inventory}}</span>
            </div>

          </div>
      </div>

          <span style="background-color: #ffffff">订单号：{{item.oid}}</span>
          <span style="background-color: #ffffff">快递号：{{item.cnumber}}</span>
          <div v-for="(data1,h) in item.cusInfo":key="h">
            <div style="display: flex;flex-direction: row;justify-content: space-between">
              <span style="background-color: #ffffff">收货人姓名：{{data1.name}}</span>
              <span style="background-color: #ffffff">收货人电话：{{data1.phone}}</span>
            </div>
            <span style="background-color: #ffffff">收货地址：{{data1.address}}</span>
          </div>

          <div style="display: flex;flex-direction: row;justify-content: flex-end;margin-right: 30px">
            <span style="margin-right: 50px" >状态:{{onS}} </span>
            <el-button @click='onRoad(index)' v-show="isShow">{{buMess}}</el-button>
          </div>

    </div>
  </div>

</div>
</template>

<script>
import order from "@/api/order"
import goods from "@/api/goods"
import user from "@/api/user"

export default {
  name: "orderManage",
  data(){
    return{
      input: '',
      isShow: true,
      buMess:'测试！！',
      //状态字符串
      onS:'',
      goodsList:[
        {
          gid:'121',
          gpic:'https://pic2.zhimg.com/v2-a3c175180fa7ec48700a5ab8325ca92e_1440w.jpg?source=172ae18b',
          gname:'衣服1',
          gtype:'11',
          price:'134',
          inventory:'890',
          sid:'12',
          onSale:'1'
        }
      ],
      //包含商品的信息及地址信息，地址信息？
      list:[
          //gpic:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
         //  oid:1,
         //  gid: 11,
         //
         //  cid:22,
         //  num:5,
         //  totalprice:90,
         //  cusInfo:[{
         //    address:"布达佩斯大饭店",
         //    name:"aa",
         //    phone:'111111'
         //  }],
         //  state:5,
         //  courier_number:"111-222-111"
         // }
      ]
    }
  },
  methods: {
    handleClick(row) {
      //console.log(row);
    },
    //考虑一个订单内多个商品？
    listOrders(){
      order.getOrderList()
        .then(response=>{
          this.list=response.data.orders;
          for (let index = 0; index < response.data.orders.length; index++) {
            const element = response.data.orders[index];
            goods.findGoodsById(parseInt(element.gid))
              .then(response=>{
               // console.log(response.data.items);
                this.list[index].goodsList = response.data.items;
                //console.log(response.data.items);
                console.log(this.list[index].goodsList);
              })

            // this.list.oid=response.data.orders.oid;
            // this.list.gid=response.data.orders.gid;
            // this.list.cid=response.data.orders.cid;
            // this.list.num=response.data.orders.num;
            // this.list.totalprice=response.data.orders.totalprice;
            // this.list.state=response.data.orders.state;
            // this.list.courier_number=response.data.orders.courier_number;

            //console.log(response.data.orders[0].gid);

           // console.log("element.gid "+element.gid);
            //地址信息还没获取

            this.recState(index);
          }
        })

    },
    recState(index){
      //console.log(this.list[0].state)
      if(this.list[index].state == 0){
        this.onS = '未付款'

        //付款按钮
      }else if(this.list[index].state==1){
        this.onS = '已付款'
        this.buMess = '已发货'
      }else if(this.list[index].state==2){
        this.onS = '已发货'

      }else if(this.list[index].state==3){
        this.onS = '已签收'
      }else if(this.list[index].state==4){
        this.onS = '已申请退换货'
        this.buMess = '处理'
      }else if(this.list[index].state==5){
        this.onS = '已退货'
      }else if(this.list[index].state==6){
        this.onS = '已换货'
      }else if(this.list[index].state==-1){
        this.onS = '订单取消'
      }
    },
    onRoad(index){
      console.log("发货按钮");
      console.log(index)
      console.log(this.list[index])
      this.list[index].state='2';//实际为数字存储
    },
    research() {
      console.log("搜索！")
      console.log(this.input)
      console.log(parseInt(this.input))
      order.getOrderById(parseInt(this.input))
        .then(response=>{
          console.log(response);
          this.list=response.data.orders;
        })
    }
  },

  created() {
    //只在界面加载时调用且只调用一次
    this.listOrders();
    //this.recState();
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

  margin-left: 30px;
  margin-right: 30px;
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
