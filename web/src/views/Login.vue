<template>
  <div class="login-container">
    <el-card header="用户登录">
      <el-form label-width="4rem" @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
        <div style="text-align:center"><el-link type="primary" @click.prevent="$router.push('/register')">还没有账号？点此去注册</el-link></div>
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
  methods: {
    async login() {
      const res = await this.$http.post("/login", this.model);
      localStorage.token = res.data.token;
      this.$router.push("/");
      this.$message({
        type: "success",
        message: "登录成功",
      });
    },
  },
};
</script>

<style>
.login-container {
  width: 30rem;
  margin: 8rem auto;
}
</style>