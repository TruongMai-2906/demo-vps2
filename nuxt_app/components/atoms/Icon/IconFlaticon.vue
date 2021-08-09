<template>
	<i :class="'flaticon-'+ icon"></i>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props:{
		icon:{
			type: String,
			required: true,
		}
	}
})
</script>
