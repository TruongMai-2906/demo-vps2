<template>
	<img :src="url" alt="ig" />
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