<template>
<!--  <el-row class="tac">-->
<!--    <el-col>-->
      <el-menu
          style="width: 30%;min-height: 100vh;"
          class="el-menu-vertical-demo">

<!--          <template #title>-->
<!--            <span style="margin-top:20px">商品分类</span>-->
<!--          </template>-->
        <el-menu-item index="man" @click="man">
          <span>男装</span>
        </el-menu-item>
        <el-menu-item index="woman" @click="woman">
          <span>女装</span>
        </el-menu-item>
        <el-menu-item index="book" @click="book">
          <span>图书</span>
        </el-menu-item>
        <el-menu-item index="food" @click="food">
          <span>食品</span>
        </el-menu-item>
        <el-menu-item index="phone" @click="phone">
          <span>手机</span>
        </el-menu-item>
        <el-menu-item index="face" @click="face">
          <span>美妆</span>
        </el-menu-item>
        <el-menu-item index="object" @click="object">
          <span>家具</span>
        </el-menu-item>
      </el-menu>
<!--    </el-col>-->
<!--  </el-row>-->
</template>

<script>
import goods from "../api/goods";

export default {
  name: "Aside",
  data(){
    subtreein: false
  },
  methods: {
    subTreein() {
      this.subtreein = true;
      // alert(this.subtreein);
      // this.subtreeout = false;
      // if ( this.subtreein && this)
      // alert(" subTreein ");
    },
    subTreeout() {
      this.subtreein = false;
      // alert(this.subtreein);
      // this.subtreeout = true;
      if (this.subtreein == false && this.treein == false) {
        this.SubTreeXianShi = false;
      }
    },

    man() {
      this.$router.push({path:'/goods', query: {gtype:'1'}})
    },
    woman() {
      this.$router.push({path:'/goods', query: {gtype:'2'}})
    },
    book() {
      this.$router.push({path:'/goods', query: {gtype:'3'}})
    },
    food() {
      this.$router.push({path:'/goods', query: {gtype:'4'}})
    },
    phone() {
      this.$router.push({path:'/goods', query: {gtype:'5'}})
    },
    face() {
      this.$router.push({path:'/goods', query: {gtype:'6'}})
    },
    object() {
      this.$router.push({path:'/goods', query: {gtype:'7'}})
    }
  }
}
</script>

<style scoped>

</style>
