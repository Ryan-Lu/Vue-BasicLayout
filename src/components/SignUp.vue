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
        <el-form-item prop="confirmPassword">
          <el-input v-model="form.confirmPassword" type="password" placeholder="请确认密码"></el-input>
        </el-form-item>
        <!--                <el-select v-model="form.rememberPassword" placeholder="请选择记住密码的选项">-->
        <!--                    <el-option v-for="(item, index) in rememberPasswordList" :key="index"-->
        <!--                               :label="`区域${item}`" :value="item"></el-option>-->
        <!--                </el-select>-->
        <el-form-item>
          <el-button class="signupBtn" type="primary text" @click="submitForm('form')">注册</el-button>
          <!-- <el-button class="resetBtn" @click="resetForm('form')">重置</el-button> -->
        </el-form-item>
        <!--                button 重置 点击之后 重置表单数据-->
        <!--                注册 点击之后 如果校验成功 就跳转 dashboard 如果失败 要弹出一个对话框-->
        <!--                告诉他校验失败 底下有一个按钮知道了 点击之后 对话框小时-->
      </el-form>
      <div class="btnBox">
        <div class="gray signInLabel">去登陆</div>
        <el-button type="text" class="gray toSignIn">登陆</el-button>
      </div>
    </div>
    <!--        {{form}}-->
  </div>
</template>

<script>
export default {
  data() {
    const checkConfirmPassword = (rule, value, callback) => {
      if (this.form.password === value) {
        callback();
      } else {
        callback(new Error("你没有通过我的校验"));
      }
    };
    return {
      rememberPasswordList: [],
      form: {
        username: "",
        password: "",
        confirmPassword: ""
      },
      formRules: {
        username: [
          { required: true, message: "你必须输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "你必须输入密码", trigger: "blur" }
        ],
        confirmPassword: [
          { required: true, message: "你必须重复输入密码", trigger: "blur" },
          { validator: checkConfirmPassword, trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    const options = this._x();
    this.rememberPasswordList = options;
  },
  methods: {
    _x() {
      return ["1", "2", "3", "4", "5", "6"];
    },
    open() {
      this.$alert("填写信息有误", "提示", {
        confirmButtonText: "知道了",
        callback: action => {
          if (action === "confirm") {
            this.resetForm("form");
          } else {
            this.$message.error("你点了取消");
          }
        }
      });
    },
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
            // localstorage userList push form
            let oldUserList = localStorage.getItem('userList')
            oldUserList = JSON.parse(oldUserList)
            if (!oldUserList) {
                oldUserList = []
            }
            //  判断是否重名
            // 1. 找到系统所有的用户名
            const nameList = oldUserList.map(item => item.username)
            console.log(nameList)

            oldUserList.push(this.form)
            const newUserList = JSON.stringify(oldUserList)
            console.log(newUserList)
            localStorage.setItem('userList', newUserList)
            // localstorage currentUser = form
        //   this.$router.push("/app/dashboard");
        } else {
          this.open();
        }
      });
    },
    resetForm(form) {
      this.$refs[form].resetFields();
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