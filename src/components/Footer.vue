<template>
	<footer class="footer">
		<div class="container">
			<div class="navbar-content">
				<router-link to="#">logo</router-link>
				<ul class="navbar-list">
					<li class="navbar-item" v-for="link in links" :key="link.alias">
						<router-link :to="link.url" class="navbar-link">
							{{link.title}}
						</router-link>
					</li>
				</ul>
			</div>

		</div>
	</footer>
</template>


<script>
import {links} from '@/_config';
export default {
	data() {
		return {
			links: links,
		}
	}
}
</script>
