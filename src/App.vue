<template>
<!--  <index v-if="!token" />-->
<!--  v-else-->
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import index from "./views/login/index";

export default {
  name: 'App',
  components: {
    index
  },
  data() {
    return {
      token: "",
    };
  },
  created() {
    this.token = localStorage.token;
  }
}
</script>
