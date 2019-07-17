<template>
  <div class="dashboard">
    <h1>Disk Monitoring</h1>
    <div class="main-box">
      <Card :title="title1" :used="used1" :total="total1" color="linear-gradient(60deg, #20CFF1 0%, #1CD4F3 100%)"></Card>
      <Card :title="title2" :used="used2" :total="total2" color="linear-gradient(60deg, #475ED5 0%, #7655E7 100%)"></Card>
      <Card :title="title3" :used="used3" :total="total3" color="linear-gradient(60deg, #0B9CE8 0%, #185BCF 100%)"></Card>
      <Card :title="title4" :used="used4" :total="total4" color="linear-gradient(60deg, #E46941 0%, #fe5196 100%)"></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card
  },
  data() {
    return {
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
</style>
