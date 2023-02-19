<template>
  <div class="wrapper">
    <Header :title="title" :links="links"/>
    <div class="wrapper-content">
      <div class="container">
        <h1>Hello world!</h1>

		{{ test }}
      </div>

    </div>
    <Footer :links="links"/>
  </div>

</template>

<script>

import { site } from "@/_config.js";
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
  export default {

    components: {
      Header, Footer
    },
    data() {
		return {
			title: 'Template',
			test: site.home,
			links: [
				{
					title: "Home",
					alias: "home",
					url: '/'
				},
				{
					title: "About",
					alias: "about",
					url: '/about'
				},
        {
					title: "Vacancy",
					alias: "vacancy",
					url: '/vacancy'
				},
			]
		}
	},
    
  }
</script>

