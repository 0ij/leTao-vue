<template>
  <div>
    <h1 style="margin-left: 50px">申请管理界面</h1>

    <el-input v-model="input" placeholder="请输入订单号" style="width: 300px;margin-left: 50px"></el-input>
    <el-button type="primary">搜索</el-button>
    <el-table
      :data="list"
      border
      style="width: 80%;margin-left: 50px">
      <el-table-column
        fixed
        prop="Oid"
        label="订单号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="Cid"
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
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>




  </div>
</template>

<script>
import request from "../../api/request";
export default {
  name: "requestManage",
  data(){
    return{
      input:'',
      list:[

      ]
    }
  },
  methods:{
    handleClick(row) {
      console.log(row);
    },
    getRequests(){
      request.getRequestList()
        .then(response=>{
          console.log("获取所有申请。。。");
          this.list=response.data.request;
        })
    }
  },
  created() {
    console.log("申请界面。。。");
    this.getRequests();
  },
  computed:{

  }
}
</script>

<style scoped>

</style>
