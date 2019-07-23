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
          <el-button :loading="btnLoading" @click="onClickSignUp">注册</el-button>
          <el-button  type="primary" @click="onClickSignIn ">登陆</el-button>
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
      }
    },
    components: {
      UserInfo,
      AsideMenu
    },
    computed: {
      ...mapGetters(["getUserInfo"])
    },
    methods: {
      onClickSignIn () {
        const r = { path: '/user/signIn' }
        this.$router.push(r)
      },
      onClickSignUp () {
        this.btnLoading = true
        setTimeout(() => {
          this.btnLoading = false
          // 1
          // this.$router.push('/user/signIn')
          // 2
          const r = { name: 'signUpPage' }
          this.$router.push(r)
          // 3
          // this.$router.push({
          //  path: '/user/signUp'
          // })
        }, 500)
      }
    }
  };
</script>

<style scoped>
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
