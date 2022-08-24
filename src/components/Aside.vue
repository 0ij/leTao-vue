<template>
  <el-row class="tac">
    <el-col>
      <el-menu
          :router="true"
          style="width: 200px;min-height: 100vh"
          default-active="1-1"
          class="el-menu-vertical-demo">
        <el-sub-menu index="1">
          <template #title>
            <span>服装</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">男装</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-2">女装</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2">
          <span>图书</span>
        </el-menu-item>
        <el-menu-item index="goods">
          <span>食品</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>

</style>
