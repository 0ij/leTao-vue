<template>
  <div>
    <el-container>
      <el-header style="margin-left: 50px">
        <span>我的购物车</span>
    <!-- <h1 style="margin-left: 50px">我的购物车</h1> -->

    <el-input v-model="input" placeholder="请输入商品名称" style="width: 300px;margin-left: 50px"></el-input>
    <el-button type="primary" @click="research">搜索</el-button>
</el-header>
<el-main>
    <el-table
      ref="multipleTable"
      :data="list"
       tooltip-effect="dark"
       @selection-change="handleSelectionChange"
      border
      style="width: 80%;margin-left: 50px;margin-top: 20px">
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        fixed
        prop="gid"
        label="商品id"
        >
      </el-table-column>
      <el-table-column
        prop="gname"
        label="商品名称"
        >
      </el-table-column>
      <el-table-column
        prop="gtype"
        label="商品款式"
        >
      </el-table-column>
      <el-table-column
        prop="gprice"
        label="商品单价"
        >
      </el-table-column>
      <el-table-column
          prop="num"
          label="商品数量"
          >
      </el-table-column>
      <el-table-column
          prop="totalprice"
          label="总价"
          >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" >查看</el-button>
          <el-button type="text" @click="dialogVisible = true">删除</el-button>

          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
            append-to-body>
            <span>是否确定要删除？</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="confirmDel(scope.row)">确 定</el-button>
            </span>
          </el-dialog>

        </template>
      </el-table-column>
    </el-table>
</el-main>



  <el-footer style="text-align: right; font-size: 24px">
     <el-button type="primary" @click="makeorder">结算</el-button>
     </el-footer>
     </el-container>
  </div>

</template>

<script>
import carts from "../../api/carts";
import user from "@/store/modules/user.js"
export default {
  name: "carts",
  data(){
    return{
      input:'',
      dialogVisible:false,
      list:[
        {
          gid: 1,
          gname:  " ",
          gtype: "33",
          gprice: 43,
          num: 2,
          totalprice: 1,

        }
      ],
      multipleSelection: []
    }
  },
  methods:{
    confirmDel(row) {
      this.dialogVisible = false;
      console.log(row);
      this.deleteByGid(row.gid,user.state.token);
      this.$notify({
                title: '成功',
                message: '从购物车中删除成功！',
                type: 'success'
              });

    },
    getCarts(){
      console.log("测试"+user.state.token);
      carts.getCartsList(user.state.token)
        .then(response=>{
          console.log("获取所有购物车商品。。。");
          console.log(response);
          this.list = response.data.Carts;
        })
    },
    research(){
      carts.getRequestById(parseInt(this.input))
        .then(response=>{
          console.log("response"+response);

          this.list='';
          this.list=response.data.list;
          console.log("response"+response);
        })
    },
    deleteByGid(gid,cid){
      carts.delcartsbyid(gid,cid).then(response=>{
        this.getCarts();
      })
    },
    handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(val);
          },
    handleClose(done) {
            this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
          },
    makeorder(){
      if(this.multipleSelection== undefined || this.multipleSelection.length <= 0){
        this.$notify.error({
          title: '错误',
          message: '请至少勾选一件商品'
        });}

      else{
      console.log(this.multipleSelection)
      this.$router.push({
                path:'/pay',

                query:{
                 list : this.multipleSelection
                }
              })
        }

    }
  },
  mounted() {
    window.addEventListener("load", () => {
      //写入你想要执行的代码

    });
  },

  created() {
    console.log("申请界面。。。");

    this.getCarts()
  },
  computed:{

  }
}
</script>
.el-container{
    padding-bottom: 60px;
},
.el-footer {
    position:fixed;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;

  }
<style scoped>

</style>
