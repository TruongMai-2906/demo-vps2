<template>
	<img :src="src" :alt="alt" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props:{
		src: {
			type: String,
			required: true,
			default: "",
		},
		alt: {
			type: String,
			required: true,
			default: "",
		}
	}
})
</script>
