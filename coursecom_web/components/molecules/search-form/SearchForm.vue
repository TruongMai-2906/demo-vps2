<template>
	<div class="search-form-wrapper" >
      <div class="search-trigger close-btn" @click="hideSearch()">
        <span></span>
        <span></span>
      </div>
      <form class="search-form" method="post">
			<Input placeholder="Search..." value="" />
        <button type="submit" class="search-btn">
			  <a > <IconFlaticon icon="magnifying-glass" /> </a>
        </button>
      </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/atoms/input/Input.vue'
import IconFlaticon from "@/components/atoms/icons/IconFlaticon.vue"
export default Vue.extend({
	components:{
		Input,
		IconFlaticon,
	},
	methods: {
		hideSearch(){
			console.log('hide search');

			this.$emit('clicked',false);
		}
	}

})
</script>
