<template>
	<i><font-awesome-icon :icon="[prefix, iconFontawesome]" /></i>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props:{
		prefix: {
			type: String,
			required: true,
			default: "fas"
		},
		iconFontawesome: {
			type: String,
			required: true,
			default: "box"
		}
	}
})
</script>
