<template>
<div>
  <h1 style="margin-left: 50px">评价管理界面</h1>

  <el-input v-model="input" placeholder="请输入订单号" style="width: 300px;margin-left: 50px"></el-input>
  <el-button type="primary" @click="research">搜索</el-button>
  <el-table
    :data="list"
    border
    style="width: 80%;margin-left: 50px;margin-top: 20px">
    <el-table-column
      fixed
      prop="oid"
      label="订单号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="cid"
      label="用户号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="score"
      label="评分"
      width="120">
    </el-table-column>
    <el-table-column
      prop="comment"
      label="评价"
     >
    </el-table-column>
<!--    <el-table-column-->
<!--      fixed="right"-->
<!--      label="操作"-->
<!--      width="100">-->
<!--      <template slot-scope="scope">-->
<!--        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
<!--        <el-button type="text" size="small">编辑</el-button>-->
<!--      </template>-->
<!--    </el-table-column>-->
  </el-table>



</div>
</template>

<script>

import evaluation from "@/api/evaluation"
export default {
  name: "home.vue",
  data(){
    return{
      input:'',
      list:[
        {
          oid:11,
          cid:22,
          score:5,
          comment:"good"
        },{
          oid:112,
          cid:24,
          score:1,
          comment:"bad"
        },{
          oid:4,
          cid:12,
          score:3,
          comment:"not bad"
        }
      ]
    }
  },
  methods:{
    listEvaluations(){
      evaluation.getEvaluationList()
        .then(response=>{
          console.log("调用获取评价的函数");
          console.log(response);
          this.list=response.data.evaluations;
        })
    },
    research(){
      evaluation.getEvaluationByOid(parseInt(this.input))
        .then(response=>{
          console.log("搜索评价");
          console.log(response);
          this.list=response.data.evaluations;
        })
    },
    handleClick(row) {
      console.log(row);
    }
  },
  computed:{

  },
  created() {
    this.listEvaluations();
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
