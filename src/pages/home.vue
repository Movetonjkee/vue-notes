<template>

<carousel :settings="settings" :breakpoints="breakpoints">
  <slide class="card__wrapper" v-for="item in items" :key="item.id">
    <Card
      :title="item.title"
      :imgUrl="item.img"
      :name="`${item.lvl} lvl`"
      :descr="item.descr"
      :link="`/${item.alias}`">
      <template v-slot:body>
        {{ item.descr }}
      </template>
      <template v-slot:footer>
        <div class="card-stats">
          <div v-for="(stat, index) in item.info" :key="index" class="one-third">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat">{{ stat.title }}</div>
          </div>
        </div>
      </template>
    </Card>
  </slide>
  <template #addons>
    <navigation />
    <pagination />
  </template>
</carousel>


</template>



<script>
import Card from '@/components/UI/Card'
import items from '@/seeders/items.js'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Card,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 3,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 1,
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
        },
        1200: {
          itemsToShow: 3,
        },
      }
    }
  }
}
</script>
