<template>
  <div>
    <h1 style="margin-left: 50px">申请管理界面</h1>

    <el-input v-model="input" placeholder="请输入订单号" style="width: 300px;margin-left: 50px"></el-input>
    <el-button type="primary" @click="research">搜索</el-button>
    <br ></br>
    <span style="margin-left: 50px">状态0表示未处理，1表示通过，2表示驳回</span>
    <el-table
      :data="list"
      border
      style="width: 95%;margin-left: 50px;margin-top: 20px">
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
        prop="result"
        label="状态"
        width="120">
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
        </template>
      </el-table-column>
    </el-table>

    <!-- Form -->
    <el-dialog title="申请详情" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="申请id" :label-width="formLabelWidth">
          <span >{{ form.rid }}</span>
        </el-form-item>
        <el-form-item label="申请类型" :label-width="formLabelWidth">
          <span >{{ form.rtype }}</span>
        </el-form-item>
        <el-form-item label="商品id" :label-width="formLabelWidth">
          <span >{{ form.gid }}</span>
        </el-form-item>
        <el-form-item label="商家id" :label-width="formLabelWidth">
          <span>{{ form.kid }}</span>
        </el-form-item>
          <el-form-item label="描述" :label-width="formLabelWidth">
            <span>{{ form.description }}</span>
          </el-form-item>
          <el-form-item label="管理员id" :label-width="formLabelWidth">
            <span >{{ form.aid }}</span>
          </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        //在已被审核的情况下不应该再出现
        <el-button type="primary" @click="rejectRes(form)" >退回申请</el-button>
        <el-button type="primary" @click="approveRes(form)"  >批准申请</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import request from "../../api/request";
export default {
  name: "requestManage",
  data(){
    return{
      input:'',
      dialogFormVisible: false,
      onS:'',//state字符串
      form: {
      },
      formLabelWidth: '120px',
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
      //console.log(row);
      this.dialogFormVisible = true
      //获取这一行的对象的所有数据！
      //跳出表单
      this.form=row;
      if(row.result==2){

      }
    },
    getRequests(){
      request.getRequestList()
        .then(response=>{
          this.list = response.data.Request;
        })
    },
    research(){
      request.getRequestById(parseInt(this.input))
        .then(response=>{
         // console.log("response"+response);
          this.list='';
          this.list=response.data.items;
          //console.log("response"+response);
        })
    },
    //结果（状态）由数字识别为字符串，el表格必须绑定list内元素？
    // recState(res){
    //   if(res ==1){
    //
    //   }
    // },
    approveRes(form){
      this.dialogFormVisible = false;
      //改变状态，写回后端，传回去id，result=0表示未处理，1表示通过，2表示驳回
      form.result=1;
      request.changeResult(form).then(response=>{
        //console.log("批准申请，数据传送后台");
      })
    },
    rejectRes(form){
      this.dialogFormVisible = false;
      form.result=2;
      request.changeResult(form).then(response=>{
        //console.log("批准申请，数据传送后台");
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
