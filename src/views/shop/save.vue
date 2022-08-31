<template>
    <div style="margin-top: 30px">
        <el-form ref="form" label-width="120px">
            <el-form-item label="门店编号">
                <el-input v-model="shop.sid"></el-input>
            </el-form-item>
            <el-form-item label="门店名称">
               <el-input v-model="shop.sname"></el-input>
            </el-form-item>
            <el-form-item label="门店评分">
                <el-input v-model="shop.sscore"></el-input>
            </el-form-item>
            <el-form-item label="门店头像">
                <el-input v-model="shop.savatar"></el-input>
            </el-form-item>
            <el-form-item label="商品销量">
                <el-input v-model="shop.goodsnum"></el-input>
            </el-form-item>
            <el-form-item label="门店位置">
                <el-input v-model="shop.locate" :rows="2" type="textarea"/>
            </el-form-item>
            <el-form-item>
                <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

  import shop from "@/api/shop";

  export default {
    data() {
      return {
        shop: {},
        saveBtnDisabled:false,
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        // if(this.$route.params && this.$route.params.sid) {
        //   this.info(this.$route.params.sid)
        //   } else {
        //     this.shop = {}
        // }
        this.shop = this.$store.state.shop

      },
      info(sid) {
        shop.findShopById(sid).then(response => {
          console.log(response);
          this.shop = response.data.items
          })
      },
      saveOrUpdate() {
        if(this.shop.id==null) {
            console.log("更新")
            this.save();
            } else {
             console.log("新增")
          this.update();
        }
      },
      save() {
        shop.addShop(this.shop).then(response => {
          this.$router.push({path:"/shop/table"})
        })
      },
      update() {
        shop.updateShop(this.shop).then(response => {
          this.$router.push({path:"/shop/table"})
        })
      },
    }
  }
</script>

<style>
</style>
