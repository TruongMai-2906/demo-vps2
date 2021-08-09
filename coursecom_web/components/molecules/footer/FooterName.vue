<template>
	<div class="footer-widget">
		<ul>
			<li> <Link url="#" name="Physics"/> </li>
			<li> <Link url="#" name="Arabic"/> </li>
			<li> <Link url="#" name="Science"/> </li>
			<li> <Link url="#" name="Geography"/> </li>
		</ul>
	</div>
  
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/title/Title.vue'
import Link from '~/components/atoms/link/Link.vue'

export default Vue.extend({
	components:{
		Title,
        Link,
	},
})
</script>