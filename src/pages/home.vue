<template>

<div class="card__wrapper" v-for="item in items" :key="item.id">
      <Card
        :title="item.title"
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

export default {
  components: { Card },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'archer',
          descr: 'archer archer archer archer archer',
          lvl: 4
        },
        {
          id: 2,
          title: 'wizard',
          descr: 'wizard wizard wizard wizard wizard',
          lvl: 5
        }
      ]
    }
  }
}
</script>
