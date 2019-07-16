<template>
    <div>
        <img :src="avatar">
        <span class="name">RyanLu</span>
        <br>
        <span class="email">229239531@qq.com</span>
    </div>
</template>


<script>
export default {
  name: "UserInfo",
  data() {
      return {
          avatar: require('../../img/avatar1.jpg')
      }
  },
  components: {

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