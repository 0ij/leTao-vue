<template>
    <div>
        <el-form ref="form" label-width="120px">
            <el-form-item label="商品编号">
                <el-input v-model="goodssales.gid"></el-input>
            </el-form-item>
            <el-form-item label="商品销量">
               <el-input v-model="goodssales.goodsales"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

  import goodssales from "@/api/goodssales";

  export default {
    data() {
      return {
        goodssales: {},
        saveBtnDisabled:false,
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        if(this.$route.params && this.$route.params.gid) {
          this.info(this.$route.params.gid)
          } else {
            this.goodssales = {}
        }
      },
      info(gid) {
        goodssales.findGoodssalesById(gid).then(response => {
          console.log(response);
          this.goodssales = response.data.items
          })
      },
      saveOrUpdate() {
        if(this.goodssales.id) {
            console.log("更新")
            this.update();
            } else {
             console.log("新增")
             this.save();
        }
      },
      save() {
        goodssales.addGoodssales(this.goodssales).then(response => {
          this.$router.push({path:"/goodssales/table"})
        })
      },
      update() {
        goodssales.updateGoodssales(this.goodssales).then(response => {
          this.$router.push({path:"/goodssales/table"})
        })
      },
    }
  }
</script>

<style>
</style>
