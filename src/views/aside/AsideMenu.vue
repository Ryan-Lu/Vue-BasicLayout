<template>
  <el-row class="tac menu">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#334c92"
        text-color="#fff"
        active-text-color="#fff"
        :router="true"
      >
        <el-menu-item index="/dashboard">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dashboard" />
          </svg>
          <span slot="title">Dashboard</span>
        </el-menu-item>
        <el-menu-item index="/monitor">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-focus1" />
          </svg>
          <span slot="title">Monitor</span>
        </el-menu-item>
        <el-menu-item index="/task-list">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-task-list" />
          </svg>
          <span slot="title">Task List</span>
        </el-menu-item>
        <el-menu-item index="settings">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-setting" />
          </svg>
          <span slot="title">Settings</span>
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


<style lang="scss">
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.4em;
  fill: currentColor;
  overflow: hidden;
  padding: 0 15px;
}
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
  color: #fff;
}
.el-menu-item.is-active {
  background: #293d75 !important;
  border-left: 4px solid #112049;
  transition: 0.4s;
}
</style>
