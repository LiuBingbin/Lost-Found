<template>
  <div>
    <el-container style="height: 100vh">
      <el-header style="background-color: #545c64">
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
          <el-menu-item class="menu-item">
            <el-button type="primary" @click="$router.push('/publish')">发布 +</el-button>
          </el-menu-item>
          <el-menu-item class="menu-item">
            <el-input v-model="input" placeholder="输入物品名进行搜索">
              <el-button slot="append" icon="el-icon-search"> </el-button>
            </el-input>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main style="width: 1000px; margin: 0 auto">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style>
.menu-item {
  float: right !important;
  cursor: default;
}
.menu-item:hover {
  background-color: transparent !important;
}
</style>