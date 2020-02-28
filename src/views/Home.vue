<template>
  <v-container class="px-0">
    <v-card outlined>
      <v-img src="~assets/img/home.png"></v-img>
    </v-card>

    <v-container>
      <v-card
        v-for="(content, id) in contents"
        :key="id"
        min-height="150px"
        :color="content.color"
        class="mx-10 my-7"
        elevation="5"
      >
        <v-container class="d-flex justify-center">
          <v-icon  color="white" small>mdi-arrange-bring-forward mdi-rotate-45</v-icon>
          <v-card-title class="py-0 white--text">{{ content.name }}</v-card-title>
          <v-icon  color="white" small>mdi-arrange-bring-forward mdi-rotate-45</v-icon>
        </v-container>
        <v-card-text class="pt-0 px-5 indent">{{ content.content }}</v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    contents: [
      {
        name: "课程导学",
        path: "/meg",
        color: "#ffbc72",
        content:
          "操作系统是管理计算机硬件与软件资源的计算机程序，同时也是计算机系统的内核与基石。操作系统需要处理如管理与配置内存、决定系统资源供需的优先次序、控制输入设备与输出设备、操作网络与管理文件系统等基本事务。"
      },
      {
        name: "课程学习",
        path: "/meg",
        color: "#c5c5c5",
        content: ""
      },
      {
        name: "实验教学",
        path: "/meg",
        color: "#ffbc72",
        content: ""
      },
      {
        name: "移动学习",
        path: "/meg",
        color: "#c5c5c5",
        content: ""
      }
    ]
  })
};
</script>

<style scoped>
.indent {
  text-indent: 2em;
}
.rota {
  transform: rotate(45deg);
}
</style>
