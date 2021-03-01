<template>
  <div>
    <el-card class="box-card" v-for="item in goodsList" :key="item._id" @click.native="$router.push(`/details/${item._id}`)">
      <div slot="header">
        <img
          v-if="item.image"
          :src="item.image"
          alt=""
          style="width:100%; display: block; margin-bottom: 1rem"
        />
        <span>{{ item.name }}</span>
      </div>
      <b style="font-size: 12px">{{ item.radio }}</b>
      <p>{{ item.description }}</p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/goods/lost");
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