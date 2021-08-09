<template>
	<span >{{ text }}</span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props:{
		text:{
			type: String,
			required: true,
			default: "",
		}
	}
})
</script>
