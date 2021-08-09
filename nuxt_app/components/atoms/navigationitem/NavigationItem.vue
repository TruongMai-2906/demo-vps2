<template>
  <li>
      <a href="#">{{ navData.title }}</a>
      <slot></slot>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	data(){
		return {

		}
	},
	props: {
		navData: {
			type: Object,
			required: true,
		}
	}
});
</script>
