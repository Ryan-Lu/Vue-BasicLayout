<template>
    <div>
        <img :src="userInfo.avatarUrl">
        <span class="name">{{userInfo.username}}</span>
        <br>
        <span class="email">229239531@qq.com</span>
    </div>
</template>


<script>
    import {mapActions} from 'vuex'

    export default {
        name: "UserInfo",
        data() {
            return {
                userInfo: {
                    username: '',
                    avatarUrl: ''
                }
            }
        },
        created() {
            const obj = this.x()
            if (obj.code !== 0) {
                this.$message({
                    showClose: true,
                    message: '警告哦，这是一条警告消息',
                    type: 'error'
                });

            } else {
                this.userInfo = obj.data.userInfo
                setTimeout(() => {
                    this.updateUserInfo(this.userInfo)
                }, 2000)
            }
        },
        components: {

        },
        methods: {
            ...mapActions([
                'updateUserInfo'
            ]),
            x() {
                // 这里是模拟后端返回的一个函数
                return {
                    code: Math.random() < .5 ? 0 : 1,
                    data: {
                        userInfo: {
                            username: '瓜坤',
                            avatarUrl: 'https://cdn.nlark.com/yuque/0/2019/png/138421/1563369281951-89f6a64c-8e67-47f3-bf62-b31ebadd575a.png'
                        }
                    }
                }
            }
        }
    };
</script>


<style>
    img {
        width: 80px;
        height: 80px;
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        box-shadow: rgba(96, 96, 172, 0.8) 0px 0px 2px 4px;
        margin-bottom: 10px;
    }
    .name {
        font-size: 18px;
    }
    .email {
        font-size: 5px;
        color: #dff1f5;
        opacity: 0.5;
    }
</style>