<template>
  <div>
    <el-container style="height: 100vh">
      <el-header style="background-color:#545c64">
        <el-menu
          :default-active="$route.path"
          router
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="width: 1000px; margin: 0 auto"
        >
          <el-menu-item index="/index">首页</el-menu-item>
          <el-menu-item index="/found">寻物</el-menu-item>
          <el-menu-item index="/lost">招领</el-menu-item>
          <el-menu-item index="/personal">个人中心</el-menu-item>
        </el-menu>
      </el-header>
      <el-main style="width: 1000px; margin: 0 auto">
          <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>