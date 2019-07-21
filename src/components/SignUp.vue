<template>
    <div class="signUpBox">
        <div class="formBox">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="账号">
                    <el-input v-model="form.username" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
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
                    rememberPassword: false
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