<template>
  <div>
    <h1>待审核</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"> </el-table-column>
      <el-table-column prop="image" label="物品图片" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.image" style="height: 3rem" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="物品名" width="180">
      </el-table-column>
      <el-table-column prop="description" label="物品描述" width="180">
      </el-table-column>
      <el-table-column prop="date" label="丢失日期" width="180">
      </el-table-column>
      <el-table-column prop="address" label="丢失地址" width="180">
      </el-table-column>
      <el-table-column prop="contact" label="联系方式" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="agree(scope.row._id)" type="text" size="small"
            >通过</el-button
          >
          <el-button @click="reject(scope.row._id)" type="text" size="small"
            >拒绝</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button
      type="primary"
      style="margin: 20px 0; float: right"
      @click="agreeAll"
      >全部通过</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/check");
      this.items = res.data;
    },
    agree(id) {
      this.$http.put(`/check/0/${id}`);
      this.$message({
        type: "success",
        message: "通过成功!",
      });
      this.fetch();
    },
    reject(id) {
      this.$http.put(`/check/1/${id}`);
      this.$message({
        type: "success",
        message: "拒绝成功!",
      });
      this.fetch();
    },
    agreeAll() {
      this.items.forEach((item) => {
        this.$http.put(`/check/0/${item._id}`);
      });
      this.$message({
        type: "success",
        message: "全部通过成功!",
      });
      this.fetch();
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>