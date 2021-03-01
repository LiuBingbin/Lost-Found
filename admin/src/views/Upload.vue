<template>
  <div>
    <h1>{{id?'编辑':'上传'}}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item>
        <el-radio-group v-model="model.radio">
          <el-radio-button label="招领启事"></el-radio-button>
          <el-radio-button label="寻物启事"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="物品图片">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.image" :src="model.image" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="物品名">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="物品描述">
        <el-input v-model="model.description" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="日期时间">
        <el-date-picker
          v-model="model.date"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="model.address"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="model.contact"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {
        radio: "招领启事",
      },
    };
  },
  methods: {
    save() {
      if (this.id) {
        this.$http.put(`/goods/${this.id}`, this.model);
      } else {
        this.model.date = this.getDate(this.model.date);
        this.$http.post("/goods", this.model);
      }
      if (this.model.radio === "拾得") {
        this.$router.push("/goods/lost");
      } else {
        this.$router.push("/goods/found");
      }
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    getDate(date) {
      var str = new Date(date),
        y = str.getFullYear(),
        m = str.getMonth() + 1,
        d = str.getDate();
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        (d < 10 ? "0" + d : d) +
        " " +
        str.toTimeString().substr(0, 8)
      );
    },
    async fetch() {
      const res = await this.$http.get(`goods/${this.id}`);
      this.model = res.data;
    },
    afterUpload(res){
      this.$set(this.model, 'image', res.url)
    }
  },
  created() {
    this.id && this.fetch();
  },
};
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>