<template>

	<header class="navbar">
		<div class="container">
			<div class="navbar-content">
				<a href="/" class="navbar-logo">{{ title }}</a>
				<ul class="navbar-list">
					<li class="navbar-item" v-for="link in links" :key="link.alias">
						<a :href="link.url" class="navbar-link">
							{{link.title}}

	
						</a>
					</li>
				</ul>
			</div>	

		</div>
	</header>


</template>

<script>
export default {
	props: {
		links: {
			type: Array,
			required: true,
		},
		title: {
			type: Text,
			required: true
		},
	},
}
</script>