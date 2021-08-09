<template>
	<div class="footer-widget">
		<ul class="social-media">
			<li> <a href="#"> <IconFacebook/> </a> </li>
			<li> <a href="#"> <IconTwitter/>  </a> </li>
			<li> <a href="#"> <IconPinterest/> </a> </li>
			<li> <a href="#"> <IconLinkedin/> </a> </li>
		</ul>
	</div>
  
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/title/Title.vue'
import Link from '~/components/atoms/link/Link.vue'
import IconFacebook from '~/components/atoms/icons/IconFacebook.vue'
import IconTwitter from '~/components/atoms/icons/IconTwitter.vue'
import IconPinterest from '~/components/atoms/icons/IconPinterest.vue'
import IconLinkedin from '~/components/atoms/icons/IconLinkedin.vue'
export default Vue.extend({
	components:{
		Title,
        Link,
		IconFacebook,
		IconTwitter,
		IconPinterest,
		IconLinkedin
	},
})
</script>