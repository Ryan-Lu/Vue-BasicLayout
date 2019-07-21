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
            </el-form>
        </div>

        {{form}}
    </div>
</template>

<script>
    export default {
        data () {
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