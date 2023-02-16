<template>
	<footer class="footer">
		<div class="container">
			<div class="navbar-content">
				<a href="#">logo</a>
				<ul class="navbar-list">
					<li class="navbar-item" v-for="link in links" :key="link.alias">
						<a :href="link.url" class="navbar-link">
							{{link.title}}
						</a>
					</li>
				</ul>
			</div>	

		</div>
	</footer>
</template>


<script>
export default {
	props: {
		links: {
			type: Array,
			required: true,
		}
	},
}
</script>
