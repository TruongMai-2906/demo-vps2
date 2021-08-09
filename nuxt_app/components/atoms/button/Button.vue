<template>
	<a :href="url" class="btn-custom primary shadow-none"> {{ content }} </a>
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
		content:{
			type: String,
			required: true,
			default: "#",
		}
	}
})
</script>
