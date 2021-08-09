<template>
	<a :href="url">{{ name }}</a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props:{
		url:{
			type: String,
			required: true,
			default: "#",
		},
		name:{
			type: String,
			required: true,
			default: "",
		}
	}
})
</script>
