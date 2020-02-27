<template>
  <v-card>
    <v-navigation-drawer v-model="drawer" color="#f2f2f2" app>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>登录</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="(item, id) in listItemContents"
          :key="id"
          link
          
        >
          <v-list-item-action>
            <v-icon v-text="'mdi-' + item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#f2f2f2" hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon color="black">mdi-wrap</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    listItemContents: [
      {
        title: "首页",
        icon: "home"
      },
      {
        title: "课程信息",
        icon: ""
      },
      {
        title: "课程学习",
        icon: ""
      },
      {
        title: "实验教学",
        icon: ""
      },
      {
        title: "移动学习",
        icon: ""
      },
      {
        title: "资源中心",
        icon: ""
      },
      {
        title: "课程作业",
        icon: ""
      }
    ]
  })
};
</script>

<style scoped></style>
