<template>
  <v-card>
    <!-- 左侧导航栏 -->
    <v-navigation-drawer v-model="drawer" color="#f2f2f2" app>
      <v-list-item class="my-4">
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
          active-class="active"
          :to="item.path"
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
    <!-- 顶部工具栏 -->
    <v-app-bar app color="#f2f2f2" hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon color="black">mdi-wrap</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      listItemContents: [
        {
          title: "首页",
          icon: "home-city",
          path: "/home"
        },
        {
          title: "课程信息",
          icon: "view-quilt",
          path: "/meg"
        },
        {
          title: "课程学习",
          icon: "tooltip-edit-outline",
          path: "/learn"
        },
        {
          title: "实验教学",
          icon: "tools",
          path: "/teach"
        },
        {
          title: "移动学习",
          icon: "monitor-cellphone",
          path: "/mobile"
        },
        {
          title: "资源中心",
          icon: "file-document-outline",
          path: "/resource"
        },
        {
          title: "课程作业",
          icon: "feather",
          path: "/work"
        }
      ],
      drawer: null
    };
  }
};
</script>

<style scoped>
.active {
  border-right: 6px solid #4488ed;
}
</style>
