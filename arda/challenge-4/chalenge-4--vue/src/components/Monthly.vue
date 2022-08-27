<template>
  <DashboardComponent>
    <div class="card-grid-wrapper" v-for="( item, index ) in items" :key="index">
      <CardComponent
          v-bind="item"
          :cardName="item.name"
          :iconWrapColor="item.color"
          :previousData="item.previous"
          :recentlyData="item.current"
          :imgPath="item.icon"
      />
    </div>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from "@/components/DashboardComponent";
import CardComponent from "@/components/CardComponent";

export default {
  name: "MonthlyView",
  components: {CardComponent, DashboardComponent},

  data() {
    return {
      items: [
        {
          name: 'Work',
          current: 103,
          previous: 128,
          icon: 'icon-work.svg',
          color: 'hsl(15, 100%, 70%)'
        },
        {
          name: 'Play',
          current: 23,
          previous: 29,
          icon: 'icon-play.svg',
          color: 'hsl(195, 74%, 62%)'
        },
        {
          name: 'Study',
          current: 13,
          previous: 19,
          icon: 'icon-study.svg',
          color: 'hsl(348, 100%, 68%)'
        },
        {
          name: 'Exercise',
          current: 11,
          previous: 18,
          icon: 'icon-exercise.svg',
          color: 'hsl(145, 58%, 55%)'
        },
        {
          name: 'Social',
          current: 21,
          previous: 23,
          icon: 'icon-social.svg',
          color: 'hsl(264, 64%, 52%)'
        },
        {
          name: 'Self Care',
          current: 7,
          previous: 11,
          icon: 'icon-self-care.svg',
          color: 'hsl(43, 84%, 65%)'
        },
      ]
    }
  }
}

</script>