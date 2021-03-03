<template>
  <div>
    <h3>我发布的</h3>
    <el-tabs value="first">
      <el-tab-pane label="已过审" name="first"
        ><el-table :data="items0">
          <el-table-column prop="image" label="物品图片" width="180">
            <template slot-scope="scope">
              <img :src="scope.row.image" style="height: 3rem" />
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="物品名"
            width="180"
          ></el-table-column>
          <el-table-column prop="description" label="物品描述" width="180">
          </el-table-column>
          <el-table-column prop="date" label="时间" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地点" width="180">
          </el-table-column>
          <el-table-column prop="contact" label="联系方式" width="180">
          </el-table-column>
          <el-table-column
            prop="radio"
            label="类型"
            width="180"
          ></el-table-column>
          <el-table-column fixed="right" label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                @click="$router.push(`/personal/edit/${scope.row._id}`)"
                type="text"
                size="small"
                >编辑</el-button
              >
              <el-button @click="remove(scope.row._id)" type="text" size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待审核" name="second"
        ><el-table :data="items1">
          <el-table-column prop="image" label="物品图片" width="180">
            <template slot-scope="scope">
              <img :src="scope.row.image" style="height: 3rem" />
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="物品名"
            width="180"
          ></el-table-column>
          <el-table-column prop="description" label="物品描述" width="180">
          </el-table-column>
          <el-table-column prop="date" label="时间" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地点" width="180">
          </el-table-column>
          <el-table-column prop="contact" label="联系方式" width="180">
          </el-table-column>
          <el-table-column
            prop="radio"
            label="类型"
            width="180"
          ></el-table-column>
          <el-table-column fixed="right" label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                @click="$router.push(`/personal/edit/${scope.row._id}`)"
                type="text"
                size="small"
                >编辑</el-button
              >
              <el-button @click="remove(scope.row._id)" type="text" size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="未过审" name="third"
        ><el-table :data="items2">
          <el-table-column prop="image" label="物品图片" width="180">
            <template slot-scope="scope">
              <img :src="scope.row.image" style="height: 3rem" />
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="物品名"
            width="180"
          ></el-table-column>
          <el-table-column prop="description" label="物品描述" width="180">
          </el-table-column>
          <el-table-column prop="date" label="时间" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地点" width="180">
          </el-table-column>
          <el-table-column prop="contact" label="联系方式" width="180">
          </el-table-column>
          <el-table-column
            prop="radio"
            label="类型"
            width="180"
          ></el-table-column>
          <el-table-column fixed="right" label="操作" width="180">
            <template slot-scope="scope">
              <el-button
                @click="$router.push(`/personal/edit/${scope.row._id}`)"
                type="text"
                size="small"
                >编辑</el-button
              >
              <el-button @click="remove(scope.row._id)" type="text" size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      items0: [],
      items1: [],
      items2: [],
    };
  },
  methods: {
    getUserId() {
      const jwt = require("jsonwebtoken");
      const { id: id } = jwt.decode(localStorage.getItem("token"));
      this.userId = id;
    },
    async fetch() {
      const res0 = await this.$http.get(`/personal/0/${this.userId}`);
      const res1 = await this.$http.get(`/personal/1/${this.userId}`);
      const res2 = await this.$http.get(`/personal/2/${this.userId}`);
      this.items0 = res0.data;
      this.items1 = res1.data;
      this.items2 = res2.data;
    },
    remove(id) {
      this.$confirm("是否删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        await this.$http.delete(`/goods/${id}`);
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.fetch();
      });
    },
  },
  created() {
    this.getUserId(), this.fetch();
  },
};
</script>

<style>
</style>