<template>
  <el-row class="tac menu">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#334c92"
        text-color="#1d2d58"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
            <i class="el-icon-location"></i>
          <span slot="title">  Dashboard</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">  Monitor</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">  Task List</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">  Settings</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>


<script>
export default {
  name: "AsideMenu",
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style>
.menu .el-menu {
  border: 0 none;
}
.el-col-12 {
    width: 100%;
}
.el-row {
  margin-top: 20px;
}
.el-menu-item {
  text-align: left;
  color: #c3edf5;
}
</style>
