<template>
  <div>使用 axios 完成请求 并实现了一个报错的例子</div>
</template>

<script>
import request from "../util/request";

export default {
  mounted() {
      this._getData()
  },
  methods: {
    _getData() {
      request
        .ajax({
          url: "/test/exception",
          data: { params: { page: 1 } }
        })
        .then(response => {
          console.log(response);
        });
    }
  }
};
</script>

<style>
</style>
