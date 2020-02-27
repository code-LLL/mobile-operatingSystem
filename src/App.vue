<template>
  <v-app>
    <navTop />
    <router-view />
  </v-app>
</template>

<script>
import navTop from "views/navTop";
export default {
  name: "App",
  components:{
    navTop
  },
  data: () => ({})
};
</script>
