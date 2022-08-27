<template>
  <div class="card-wrapper" :style="{ backgroundColor: iconWrapColor }">
    <div class="icon-wrapper">
      <img :src="require(`@/assets/${imgPath}`)" alt="vue-dashboard">
    </div>
    <div class="data-wrapper">
      <div class="card-header">
        <span>{{ cardName }}</span>
        <span>...</span>
      </div>
      <div class="time-wrapper">
        <span :style="{ color: iconWrapColor }">{{ recentlyData }}</span>hrs
      </div>
      <p>Last week - {{ previousData }}hrs</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    cardName: String,
    iconWrapColor: String,
    recentlyData: String,
    previousData: String,
    imgPath: String
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/card.scss";
</style>