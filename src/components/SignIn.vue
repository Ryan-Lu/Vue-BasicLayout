<template>
  <div class="signUpBox">
    <div class="formBox">
      <el-form ref="form" :rules="formRules" :model="form">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="signupBtn" type="primary text" @click="submitForm('form')">登陆</el-button>
        </el-form-item>
      </el-form>
      <div class="btnBox">
        <div class="gray signInLabel">去注册</div>
        <el-button type="text" class="gray toSignIn">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      formRules: {
        username: [
          { required: true, message: "你必须输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "你必须输入密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          // 判断能不能登陆成功
          // 取出 userList
          let userList = localStorage.getItem("userList");
          userList = JSON.parse(userList);
          if (!userList) {
            userList = [];
          }

          const { form } = this;

          for (let i = 0; i < userList.length; i++) {
            const { username, password } = userList[i];
            if (form.username === username && form.password === password) {
              // 设置 currentUser
              localStorage.setItem("currentUser", JSON.stringify(this.form));
              this.$router.push("/app/dashboard");
            }
          }
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.signUpBox {
  margin-top: 150px;
}
.formBox {
  background: white;
  width: 500px;
  padding: 40px 30px 12px 30px;
  margin: 20px auto;
  background: rgb(241, 240, 240);
  border-radius: 4px;
  .signupBtn {
    width: 100%;
  }
  .btnBox {
    margin-left: 4px;
    .signInLabel {
      font-size: 14px;
      color: #aeb0b4;
    }
    .toSignIn {
      &:hover {
        color: #aeb0b4;
      }
      font-size: 13px;
      font-weight: normal;
    }
  }
}
</style>