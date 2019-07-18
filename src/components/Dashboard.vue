<template>
  <div class="dashboard">
    <div class="top">
      <h1>Disk Monitoring</h1>
      <span>{{getUserInfo}}</span>
    </div>
    <div class="main-box">
      <Card :percent="percent1" :title="title1" :used="used1" 
      :total="total1" color="linear-gradient(60deg, #20CFF1 0%, #1CD4F3 100%)"></Card>
      <Card :percent="percent2" :title="title2" :used="used2" 
      :total="total2" color="linear-gradient(60deg, #475ED5 0%, #7655E7 100%)"></Card>
      <Card :percent="percent3" :title="title3" :used="used3" 
      :total="total3" color="linear-gradient(60deg, #0B9CE8 0%, #185BCF 100%)"></Card>
      <Card :percent="percent4" :title="title4" :used="used4" 
      :total="total4" color="linear-gradient(60deg, #E46941 0%, #fe5196 100%)"></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import {mapGetters} from "vuex"

export default {
  components: {
    Card
  },
  data() {
    return {
      percent1: 11.3 / 25 * 100,
      percent2: 38 / 50 * 100,
      percent3: 23.4 / 25 * 100,
      percent4: 17.6 / 25 * 100,
      title1: "sda1",
      title2: "sda2",
      title3: "sda3",
      title4: "sda4",
      used1: "11.3GB",
      used2: "38GB",
      used3: "23.4GB",
      used4: "17.6GB",
      total1: "A total of 25GB",
      total2: "A total of 50GB",
      total3: "A total of 25GB",
      total4: "A total of 25GB"
    };
  },
  computed: {
    ...mapGetters([
      'getUserInfo'
    ])
  },
  mounted() {
    console.log('userInfo')
     console.log(this.getUserInfo)
  }
};
</script>

<style>
.box + .box {
  margin-left: 15px;
}
.box {
    width: 250px;
    height: 200px;
    display: inline-block;
}

h1 {
    font-size: 24px;
    font-weight: normal;
    display: inline-block;
}
.top > span {
  float: right;
  padding-top: 28px;
  padding-right: 20px;
}
</style>
