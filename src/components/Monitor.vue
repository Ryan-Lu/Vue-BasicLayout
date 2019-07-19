<template>
  <div class="monitor-content">
    <el-table class="lu-table" v-loading="loading" :data="tableData" :max-height="550">
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="birthday" label="生日" width="180"></el-table-column>
      <el-table-column prop="gender" label="性别" width="120"></el-table-column>
      <el-table-column prop="hobby" label="爱好" width="180"></el-table-column>
      <el-table-column prop="state" label="求职状态" width="100"></el-table-column>
      <el-table-column prop="time" label="时间" width="100"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import request from "../util/request";

export default {
  data() {
    return {
      loading: false,
      tableData: [],
      total: 0,
      pageNo: 1,
      pageSize: 5
    };
  },
  mounted() {
    this._getData();
  },
  methods: {
    handleSizeChange(val) {
      this.pageNo = 1;
      this.pageSize = val;
      this._getData();
    },
    handleCurrentChange(val) {
      this.pageNo = val;
      this._getData();
    },
    _getData() {
      this.loading = true;
      request
        .ajax({
          //   url: "/test/exception",
          url: "/table/list",
          data: { params: { page: this.pageNo, pageSize: this.pageSize } }
        })
        .then(response => {
          this.loading = false;
          this.total = response.data.total;
          this.tableData = response.data.items;
        })
        .catch(() => {
          this.loading = flase;
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
  width: 96%;
}
.el-pagination {
  float: right;
  font-weight: normal;
  padding: 25px;
}
.el-pagination__total {
  color: #fff;
}
.el-pagination__jump {
  color: #fff;
}
</style>
