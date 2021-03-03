<template>
  <div>
    <el-divider>搜索“{{ keyword }}”结果</el-divider>
    <h1 v-if="goodsList.length === 0">未找到物品</h1>
    <div class="main" v-else>
      <el-card
        class="box-card"
        v-for="item in goodsList"
        :key="item._id"
        @click.native="$router.push(`/details/${item._id}`)"
      >
        <div slot="header">
          <img
            v-if="item.image"
            :src="item.image"
            alt=""
            style="width: 100%; display: block; margin-bottom: 1rem"
          />
          <span>{{ item.name }}</span>
        </div>
        <b style="font-size: 12px">{{ item.radio }}</b>
        <p>{{ item.description }}</p>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {},
  },
  data() {
    return {
      goodsList: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/search/${this.keyword}`);
      this.goodsList = res.data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>