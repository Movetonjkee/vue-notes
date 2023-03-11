<template>

<div class="card__wrapper" v-for="item in items" :key="item.id">
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

    </div>
</template>



<script>
import Card from '@/components/UI/Card'
import items from '@/seeders/items.js'

export default {
  components: { Card },
  data() {
    return {
      items: items
    }
  }
}
</script>
