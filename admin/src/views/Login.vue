<template>
  <div class="login-container">
    <el-card header="管理员登录" class="box-card">
      <el-form label-width="4rem">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    };
  },
};
</script>

<style>
.login-container {
  width: 30rem;
  margin: 8rem auto;
}
</style>