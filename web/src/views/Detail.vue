<template>
  <div>
    <el-card>
      <el-divider>{{ model.radio }}</el-divider>
      <h1 style="font-weight:normal">{{ model.name }}</h1>
      <img :src="model.image || ''" alt="" />
      <p>描述：{{ model.description }}</p>
      <p>时间：{{ model.date }}</p>
      <p>地点：{{ model.address }}</p>
      <p>联系方式：{{ model.contact }}</p>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/goods/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
</style>