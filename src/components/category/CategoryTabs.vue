<template>
  <div>
    <!-- 顶部 -->
    <van-tabs v-model="$parent.dataid" @change="getDetail">
      <van-tab
        v-for="item in category"
        :key="item.id"
        :title="item.mallSubName"
        :name="item.mallSubId"
      ></van-tab>
    </van-tabs>
    <div class="main">
      <better-scroll class="wrapper" :loaded="loaded">
        <category-box v-for="desc in dataList" :key="desc.id" :item="desc" />
      </better-scroll>
    </div>
  </div>
</template>

<script>
import categoryBox from "../../components/category/CategoryBox";
export default {
  props: {
    category: {
      type: Array,
      default: () => []
    },
    dataid: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dataList: [],
      loaded: false
    };
  },
  components: {
    categoryBox
  },
  methods: {
    // 获取每项列表
    getDetail(name, title) {
      this.loaded = false;
      this.$api.category(name).then(res => {
        if (res.code === 200) {
          this.loaded = true;
          this.dataList = res.dataList;
        }
      });
    }
  },
  mounted() {},
  watch: {
    //监听dataid的变化进行异步获取
    dataid(val) {
      this.getDetail(val, "");
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapper {
  height: 80vh;
  overflow: hidden;
}
</style>