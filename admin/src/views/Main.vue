<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1','3']" :default-active="$route.path" router>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>物品管理</template>
          <el-menu-item index="/goods/lost">
            <template slot="title"
              ><i class="el-icon-coin"></i>失物招领</template
            >
          </el-menu-item>
          <el-menu-item index="/goods/found">
            <template slot="title"
              ><i class="el-icon-view"></i>寻物启事</template
            >
          </el-menu-item>
          <el-menu-item index="/goods/upload">
            <template slot="title"
              ><i class="el-icon-upload2"></i>上传物品</template
            >
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="/examine">
          <template slot="title"
            ><i class="el-icon-s-check"></i>审核操作</template
          >
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-user-solid"></i>管理员</template>
          <el-menu-item index="/admin_users/edit">
            <template slot="title"
              ><i class="el-icon-plus"></i>新增管理员</template
            >
          </el-menu-item>
          <el-menu-item index="/admin_users/list">
            <template slot="title"
              ><i class="el-icon-user"></i>管理员列表</template
            >
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    return {};
  },
};
</script>