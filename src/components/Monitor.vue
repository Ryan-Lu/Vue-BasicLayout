<template>
  <div class="monitor-content">
    <el-table class="lu-table" :data="tableData" :max-height="550">
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="birthday" label="生日" width="180"></el-table-column>
      <el-table-column prop="gender" label="性别" width="180"></el-table-column>
      <el-table-column prop="hobby" label="爱好" width="180"></el-table-column>
      <el-table-column prop="state" label="求职状态" width="180"></el-table-column>
      <el-table-column prop="time" label="时间" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import request from "../util/request";

export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this._getData();
  },
  methods: {
    _getData() {
      request
        .ajax({
          //   url: "/test/exception",
          url: "/table/list",
          data: { params: { page: 1 } }
        })
        .then(response => {
          this.tableData = response.data.items;
        });
    }
  }
};
</script>

<style>
.lu-table {
    margin-top: 20px;
    margin-left: 20px;
    /* box-shadow: 0px 0px 4px #551d1d; */
    border-radius: 2px;
    width: 97%;
}
</style>
