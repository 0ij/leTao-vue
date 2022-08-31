<template>
    <div>
        <el-form ref="form" label-width="120px">
            <el-form-item label="商家编号">
                <el-input v-model="storekeeper.kid"></el-input>
            </el-form-item>
            <el-form-item label="商家名称">
               <el-input v-model="storekeeper.kname"></el-input>
            </el-form-item>
            <el-form-item label="商家密码">
                <el-input v-model="storekeeper.kpassword"></el-input>
            </el-form-item>
            <el-form-item label="商家头像">
                <el-input v-model="storekeeper.kavatar"></el-input>
            </el-form-item>
            <el-form-item label="门店编号">
                <el-input v-model="storekeeper.sid"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

  import storekeeper from "@/api/storekeeper";

  export default {
    data() {
      return {
        storekeeper: {},
        saveBtnDisabled:false,
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        // if(this.$route.params && this.$route.params.kid) {
        //   this.info(this.$route.params.kid)
        //   } else {
        //     this.storekeeper = {}
        // }
        this.storekeeper=this.$store.state.storekeeper;
      },
      // info(kid) {
      //   storekeeper.findStorekeeperById(kid).then(response => {
      //     console.log(response);
      //     this.storekeeper = response.data.items
      //     })
      // },
      saveOrUpdate() {
        if(this.storekeeper.id==null) {
            console.log("更新")
            this.update();
            } else {
             console.log("新增")
             this.save();
        }
      },
      save() {
        storekeeper.addStorekeeper(this.storekeeper).then(response => {
          this.$router.push({path:"/storekeeper/table"})
        })
      },
      update() {
        storekeeper.updateStorekeeper(this.storekeeper).then(response => {
          this.$router.push({path:"/storekeeper/table"})
        })
      },
    }
  }
</script>

<style>
</style>
