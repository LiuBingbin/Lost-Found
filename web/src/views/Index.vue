<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item>
        <img src="../assets/1.jpg" alt="" style="height: 100%" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/2.jpg" alt="" style="height: 100%" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/3.jpg" alt="" style="height: 100%" />
      </el-carousel-item>
    </el-carousel>
    <el-divider></el-divider>
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
      const res = await this.$http.get("/goods");
      this.goodsList = res.data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style>
.box-card {
  width: 13rem;
  float: left;
  margin: 0 1.5rem 1.5rem 0;
  cursor: pointer;
}
.box-card:hover {
  transform: translate(0, -1px);
}
</style>