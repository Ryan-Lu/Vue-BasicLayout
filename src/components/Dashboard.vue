<template>
  <div class="dashboard-box">
    <Card :title="title1" :large="large1" :desc="desc1"></Card>
    <Card color="#514dd0" :title="title2" :large="large2" :desc="desc2"></Card>
    <Card color="#1c69d6" :title="title3" :large="large3" :desc="desc3"></Card>
    <Card color="#f63969" :title="title4" :large="large4" :desc="desc4"></Card>
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
          title1: 'sda1',
          title2: 'sda2',
          title3: 'sda3',
          title4: 'sda4',
          large1: '11.3',
          large2: '21.6',
          large3: '24.3',
          large4: '89.3',
          desc1: 'A total of 25GB',
          desc2: 'A total of 13GB',
          desc3: 'A total of 69GB',
          desc4: 'A total of 89GB',
      }
  }
};
</script>

<style>
.card-box + .card-box {
    margin-left: 16px;
}
</style>
