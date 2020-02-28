<template>
  <v-app>
    <Toolbar></Toolbar>
    <AppMain></AppMain>
  </v-app>
</template>

<script>
import AppMain from "views/layout/AppMain";
import Toolbar from "views/layout/Toolbar";
export default {
  name: "App",
  components: {
    AppMain,
    Toolbar
  }
};
</script>
