<template>
  <div>
    <h1>失物招领</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"> </el-table-column>
      <el-table-column prop="image" label="物品图片" width="180">
        <template slot-scope="scope">
          <img
            :src="scope.row.image"
            style="height: 3rem"
          />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="物品名" width="180">
      </el-table-column>
      <el-table-column prop="description" label="物品描述" width="180">
      </el-table-column>
      <el-table-column prop="date" label="拾获日期" width="180">
      </el-table-column>
      <el-table-column prop="address" label="拾获地址" width="180">
      </el-table-column>
      <el-table-column prop="contact" label="联系方式" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/goods/edit/${scope.row._id}`)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="remove(scope.row._id)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
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
      const res = await this.$http.get("/goods/lost");
      this.items = res.data;
    },
    remove(id) {
      this.$confirm('是否删除该物品?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
          await this.$http.delete(`/goods/${id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        })
    }
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>