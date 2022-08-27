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
import uniqueId from 'lodash.uniqueid';
import CardComponent from "@/components/CardComponent";

export default {
  name: "DailyView",
  components: {CardComponent, DashboardComponent},

  data() {
    return {
      parentMessage: 'Parent',
      items: [
        {
          id: uniqueId('card-'),
          name: 'Work',
          current: 5,
          previous: 7,
          icon: 'icon-work.svg',
          color: 'hsl(15, 100%, 70%)'
        },
        {
          id: uniqueId('card-'),
          name: 'Play',
          current: 1,
          previous: 2,
          icon: 'icon-play.svg',
          color: 'hsl(195, 74%, 62%)'
        },
        {
          id: uniqueId('card-'),
          name: 'Study',
          current: 0,
          previous: 1,
          icon: 'icon-study.svg',
          color: 'hsl(348, 100%, 68%)'
        },
        {
          id: uniqueId('card-'),
          name: 'Exercise',
          current: 1,
          previous: 1,
          icon: 'icon-exercise.svg',
          color: 'hsl(145, 58%, 55%)'
        },
        {
          id: uniqueId('card-'),
          name: 'Social',
          current: 1,
          previous: 3,
          icon: 'icon-social.svg',
          color: 'hsl(264, 64%, 52%)'
        },
        {
          id: uniqueId('card-'),
          name: 'Self Care',
          current: 0,
          previous: 1,
          icon: 'icon-self-care.svg',
          color: 'hsl(43, 84%, 65%)'
        },
        ]
    }
  }
}

</script>