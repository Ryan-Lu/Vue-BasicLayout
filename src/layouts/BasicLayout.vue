<template>
  <div>
    {{getUserInfo}}
    <el-container>
      <el-aside width="200px">
          <UserInfo />
          <AsideMenu />
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import UserInfo from "../views/aside/UserInfo";
import AsideMenu from "../views/aside/AsideMenu";
import {mapGetters} from 'vuex'


export default {
  name: "BasicLayout",
  props: {

  },
  components: {
    UserInfo,
    AsideMenu
  },
  computed: {
    ...mapGetters([
            'getUserInfo'
    ])
  }
};
</script>

<style>
h1 {
  padding-left: 20px;
}
.el-aside {
  background-image: linear-gradient(to top, #334c92 0%, #334c90 100%);
  color: #fff;
  text-align: center;
  padding-top: 50px;
  line-height: 25px;
}

.el-main {
  background-image: linear-gradient(to right, #576ead 0%, #2a4180 100%);
  color: #fff;
  height: 100vh;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
