<template>
  <li>
    <IconCheck />
    {{ data.text }}
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import IconCheck from '~/components/atoms/icons/IconCheck.vue'
export default Vue.extend({
	components:{
		IconCheck
	},
	props: {
		data: {
			type: Object,
			required: true,
		}
	}
})
</script>
