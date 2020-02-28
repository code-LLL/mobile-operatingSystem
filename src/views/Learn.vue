<template>
  <v-container>
    <v-card min-height="200px" color="#f7f7f7" class="card mx-2 my-2">
      <v-container class="d-flex justify-center py-0">
        <v-icon color="#febc72" x-small>mdi-rhombus</v-icon>
        <v-card-title>教学概要</v-card-title>
        <v-icon color="#febc72" x-small>mdi-rhombus</v-icon>
      </v-container>
      <v-card-text class="mt-0 px-3 pt-0 indent">
        操作系统是管理计算机硬件与软件资源的计算机程序，同时也是计算机系统的内核与基石。操作系统需要处理如管理与配置内存、决定系统资源供需的优先次序、控制输入设备与输出设备、操作网络与管理文件系统等基本事务。
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.indent {
  text-indent: 2em;
}
.card {
  box-shadow: 0 0 15px rgba(1, 1, 1, 0.1);
  border-radius: 15px !important;
}
</style>
