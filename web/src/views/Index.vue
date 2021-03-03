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
    <div class="main">
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
.main {
  width: 100%;
  columns: 4;
  column-gap: 1.5rem;
}
.box-card {
  break-inside: avoid;
  width: 100%;
  margin-bottom:1.5rem;
  cursor: pointer;
}
.box-card:hover {
  transform: translate(0, -1px);
}
</style>