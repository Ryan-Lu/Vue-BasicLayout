<template>
  <div>
    <!-- {{getUserInfo}} -->
    <el-container>
      <el-aside width="200px">
        <UserInfo />
        <AsideMenu />
      </el-aside>
      <el-container>
        <el-main>
          <div class="dropBox">
            <el-dropdown class="logoutBox">
              <span class="el-dropdown-link">
                <div class="first-title">
                  <span>{{getUserInfo.userName}}</span>
                  <img class="top-avatar" :src="getUserInfo.avatarUrl" alt />
                </div>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import UserInfo from "../views/aside/UserInfo";
import AsideMenu from "../views/aside/AsideMenu";
import { mapGetters } from "vuex";

export default {
  name: "BasicLayout",
  props: {},
  data() {
    return {
      btnLoading: false
    };
  },
  components: {
    UserInfo,
    AsideMenu
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  },
  methods: {
    onClickSignIn() {
      const r = { path: "/user/signIn" };
      this.$router.push(r);
    },
    onClickSignUp() {
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        // 1
        // this.$router.push('/user/signIn')
        // 2
        const r = { name: "signUpPage" };
        this.$router.push(r);
        // 3
        // this.$router.push({
        //  path: '/user/signUp'
        // })
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.dropBox {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  .logoutBox {

  }
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

.first-title > span {
  float: right;
  padding: 30px 30px 0 0;
  font-size: 14px;
}

.top-avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  float: right;
  margin: 28px 10px 0 0;
  box-shadow: rgba(96, 96, 172, 0.8) 0px 0px 1px 2px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-menu__item {
  line-height: 18px;
  padding: 0 12px;
}
</style>
