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

export default {
  components: { Card },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'archer',
          descr: 'archer archer archer archer archer',
          img: require('@/assets/img/archer.png'),
          lvl: 4
        },
        {
          id: 2,
          title: 'wizard',
          descr: 'wizard wizard wizard wizard wizard',
          img: require('@/assets/img/wizard.png'),
          lvl: 5
        }
      ]
    }
  }
}
</script>
