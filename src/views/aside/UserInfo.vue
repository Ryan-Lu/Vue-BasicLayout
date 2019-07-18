<template>
    <div>
        <img class="asideAvatar" :src="userInfo.avatarUrl">
        <span class="name">{{userInfo.userName}}</span>
        <br>
        <span class="email">{{userInfo.userEmail}}</span>
    </div>
</template>


<script>
import {mapActions} from 'vuex'

export default {
  name: "UserInfo",
  data() {
      return {
          userInfo: {
              avatarUrl: '',
              userName: '',
              userEmail: '',
          },
      }
  },
  created() {
      const obj = this.x()
      if(obj.code === 0) {
          this.userInfo = obj.data.userInfo
          this.updateUserInfo(this.userInfo)
      }
  },
  components: {

  },
  methods: {
      ...mapActions([
          'updateUserInfo'
      ]),
      x() {
          return {
              code: 0,
              data: {
                  userInfo: {
                      avatarUrl:'https://cdn.nlark.com/yuque/0/2019/png/416562/1563420420707-16096278-5e3c-491b-9280-6099e2139720.png',
                      userName: 'Ryan-Lu',
                      userEmail: '229239531@qq.com'
                  }
              }
          }
      }
  }
};
</script>


<style>
.asideAvatar {
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