<template>
    <div class="signUpBox">
        <div class="formBox">
            <el-form ref="form" :rules="formRules" :model="form" label-width="80px">
                <el-form-item label="账号" prop="username">
                    <el-input v-model="form.username" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPassword">
                    <el-input v-model="form.confirmPassword" type="password"></el-input>
                </el-form-item>

                <el-select v-model="form.rememberPassword" placeholder="请选择记住密码的选项">
                    <el-option v-for="(item, index) in rememberPasswordList" :key="index"
                               :label="`区域${item}`" :value="item"></el-option>
                </el-select>
                <el-form-item>
                    <el-button type="primary text" @click="submitForm('form')" >提交</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                </el-form-item>

<!--                button 重置 点击之后 重置表单数据-->
<!--                注册 点击之后 如果校验成功 就跳转 dashboard 如果失败 要弹出一个对话框-->
<!--                告诉他校验失败 底下有一个按钮知道了 点击之后 对话框小时-->
            </el-form>
        </div>

        {{form}}
    </div>
</template>

<script>

    export default {
        data () {
            const checkConfirmPassword = (rule, value, callback) => {
                if (this.form.password === value) {
                    callback()
                } else {
                    callback(new Error('你没有通过我的校验'))
                }
            };
            return {
                rememberPasswordList: [],
                form: {
                    username: '',
                    password: '',
                    confirmPassword: '',
                    rememberPassword: '4'
                },
                formRules: {
                    username: [
                        { required: true, message: '你必须输入用户名', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '你必须输入密码', trigger: 'blur' },
                    ],
                    confirmPassword: [
                        { required: true, message: '你必须重复输入密码', trigger: 'blur' },
                        { validator: checkConfirmPassword, trigger: 'blur'},
                    ]
                }
            }
        },
        mounted() {
            const options = this._x()
            this.rememberPasswordList = options
        },
        methods: {
            _x() {
                return [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                ]
            },
            open() {
                this.$alert('填写信息有误', '提示', {
                    confirmButtonText: '知道了',
                    callback: action => {
                        if (action === 'confirm') {
                            this.resetForm('form')
                        } else {
                            this.$message.error('你点了取消');
                        }
                    }
                })
            },
            submitForm(form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.$router.push('/app/dashboard')
                    } else {
                        this.open()
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
    .formBox {
        background: white;
        width: 500px;
        padding: 24px;
        margin: 20px auto;
    }
</style>