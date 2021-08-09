<template>
	<img :src="url" alt="category" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props:{
		url:{
			type: String,
			required: true,
		}
	}
})
</script>
