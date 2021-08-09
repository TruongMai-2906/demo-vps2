<template>
	<component :is="tag"> {{content}} </component>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props:{
		tag:{
			type: String,
			required: true,
		},
		content:{
			type: String,
			required: true,
		}
	}
})
</script>
