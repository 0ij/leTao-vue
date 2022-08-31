<template>
  <!-- <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <span>这是个测试</span>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form> -->
<div class="makeorders">
  <div v-for="(item,index) in list" :key="index">
  <el-descriptions class="margin-top"  title="index" :column="3" :size="size" border>
     <!-- <template slot="extra">
        <el-button type="primary" size="small">操作</el-button>
      </template> -->

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          商品名称
        </template>
        {{item.gname}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          商品单价
        </template>
        {{item.gprice}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          购买数量
        </template>
        {{item.num}}

      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          备注
        </template>
        <el-tag size="small">无</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          总价
        </template>
        {{item.totalprice}}

      </el-descriptions-item>


    </el-descriptions>
  </div>
  <el-footer style="text-align: right; font-size: 24px">
    <span>总价值：</span>
     <el-button type="primary" @click="pay">付款</el-button>
     <el-button type="primary" plain @click="cancelpay">取消</el-button>
     </el-footer>
</div>
</template>

<script>
  export default {
    data() {
      return {
        size: " ",
        list:[
          {
          gid: 1,
          gname:  "12312 ",
          gtype: "33",
          gprice: 43,
          num: 2,
          totalprice: 1,
        },{
          gid: 2,
          gname:  "22312 ",
          gtype: "33",
          gprice: 43,
          num: 2,
          totalprice: 1,
        },{
          gid: 3,
          gname:  "32312 ",
          gtype: "33",
          gprice: 43,
          num: 2,
          totalprice: 1,
        },{
          gid: 4,
          gname:  "42312 ",
          gtype: "33",
          gprice: 43,
          num: 2,
          totalprice: 1,
        }
        ]
      }
    },
    created(){
      console.log("结算界面。。。");
      this.getParams()
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      getParams () {
        console.log("???")
        console.log(this.$route.query.list)

          var templist = this.$route.query.list;
        // 将数据放在当前组件的数据内
          this.list = templist;


        console.log(this.list)

    },


    pay(){

    },
    cancelpay(){
      this.$router.push({path:'/carts'})
      
    }
  },
  }
</script>
