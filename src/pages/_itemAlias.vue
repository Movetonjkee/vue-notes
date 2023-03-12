<template>
<div class="wrapper-person">
  <div v-if="item">
    <img :src="item.img" :alt="item.descr">
    <h1 style="color: #fff;" class="title">{{ item.title }}</h1>
    <p>{{ item.descr }}</p>

    <Stats :info="item.info"/>
    <br>
    <div>
      <router-link to="/" class="btn btnPrimary">back</router-link>
    </div>

  </div>
</div>
</template>


<script>

import items from '@/seeders/items'
import Stats from '@/components/UI/Stats'

export default {
  components: {
    Stats
  },
  data() {
    return {
      item: null,
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)

    this.item = item
  }
}
</script>


<style lang="scss">
  .wrapper-person {
    text-align: center;
  }
  .card-stats {
    border-radius: 14px;
    margin-top: 20px;
  }
</style>
