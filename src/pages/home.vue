<template>

<div class="card__wrapper" v-for="item in items" :key="item.id">
      <Card
        :title="item.title"
        :imgUrl="item.img"
        :name="`${item.lvl} lvl`"
        :descr="item.descr">
        <template v-slot:body>
          {{ item.descr }}
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
