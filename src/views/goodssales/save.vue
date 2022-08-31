<template>
    <div style="margin-top:20px">
      <el-form ref="form" label-width="120px">
        <el-form-item label="商品id">
          <el-input v-model="gs.gid"></el-input>
        </el-form-item>

        <el-form-item label="销量">
          <el-input v-model="gs.goodsales"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>

import goodssales from "@/api/goodssales";
import router from "@/router";

  export default {
    data() {
      return {
        gs: {},
        saveBtnDisabled:false,
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        // if(this.$route.params && this.$route.params.gid) {
        //   this.info(this.$route.params.gid)
        //   } else {
        //     this.goodssales = {}
        // }
        // console.log("this.$store.state.goodssales "+this.$store.state.goodssales)
         this.gs = this.$store.state.gs
      },
      // info(gid) {
      //   goodssales.findGoodssalesByGid(gid).then(response => {
      //     console.log("info调用");
      //     console.log(response);
      //     this.goodssales = response.data.items
      //     })
      // },
      saveOrUpdate() {
        if(this.gs.gid==null) {
            console.log("更新")
            this.update();
            } else {
             console.log("新增")
             this.save();
        }
      },
      save() {
        goodssales.addGoodssales(this.gs).then(response => {
          this.$router.push({path:"/goodssales/table"})
        })
      },
      update() {
        console.log("修改")
        goodssales.updateGoodssales(this.gs).then(response => {
          this.$router.push({path:"/goodssales/table"})
        })
      },
    }
  }
</script>

<style>
</style>
