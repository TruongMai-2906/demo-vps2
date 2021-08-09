<template>
	<input type="text" :placeholder="placeholder" :value="value" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props:{
		placeholder: {
			type: String,
			default: "",
		},
		value: {
			type: String,
			default: "",
		}
	}
})
</script>
