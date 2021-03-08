<template>
  <div class="login-container">
    <el-card header="用户注册">
      <el-form label-width="5rem" @submit.native.prevent="register">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="model.password"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            type="password"
            show-password
            v-model="password1"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">注册</el-button>
        </el-form-item>
        <div style="text-align: center">
          <el-link type="primary" @click.prevent="$router.push('/login')"
            >返回登录</el-link
          >
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      password1: "",
    };
  },
  methods: {
    async register() {
      if (!(this.model.username && this.model.password && this.password1)) {
        this.$message({
          type: "error",
          message: "不能留空",
        });
      } else if (this.password1 !== this.model.password) {
        this.$message({
          type: "error",
          message: "两次密码不一致",
        });
      } else {
        await this.$http.post("/register", this.model);
        this.$router.push("/login");
        this.$message({
          type: "success",
          message: "注册成功",
        });
      }
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