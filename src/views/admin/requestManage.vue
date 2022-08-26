<template>
  <div>
    <h1 style="margin-left: 50px">申请管理界面</h1>

    <el-input v-model="input" placeholder="请输入订单号" style="width: 300px;margin-left: 50px"></el-input>
    <el-button type="primary" @click="research">搜索</el-button>
    <el-table
      :data="list"
      border
      style="width: 80%;margin-left: 50px;margin-top: 20px">
      <el-table-column
        fixed
        prop="rid"
        label="申请id"
        width="150">
      </el-table-column>
      <el-table-column
        prop="rtype"
        label="申请类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="kid"
        label="商家id"
        width="120">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
      </el-table-column>
      <el-table-column
          prop="aid"
          label="管理员id"
          width="120">
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
        {
          description: "投放广告",
          result: 1,
          gid: 33,
          aid: 43,
          rtype: 2,
          rctime: "2022-08-20T04:37:31",
          rid: 11,
          kid: 11,
          rftime: "2022-08-14T04:37:41"
        }
      ]
    }
  },
  methods:{
    handleClick(row) {
      console.log(row);
      //获取这一行的对象的所有数据！
      //跳出表单
    },
    getRequests(){
      request.getRequestList()
        .then(response=>{
          console.log("获取所有申请。。。");
          console.log(response);
          this.list = response.data.Request;
        })
    },
    research(){
      request.getRequestById(parseInt(this.input))
        .then(response=>{
          console.log("response"+response);

          this.list='';
          this.list=response.data.list;
          console.log("response"+response);
        })
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      //写入你想要执行的代码

    });
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
