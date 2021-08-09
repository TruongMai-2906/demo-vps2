<template>
  <div class="section-title-wrap">
    <!-- <span class="secondary-title"> Our Skills </span>
    <h2 class="title">Great Teaching Skills</h2> -->
		<Title tag="span" content="Our Skills" class="secondary-title" />
		<Title tag="h2" content="Great Teaching Skills" class="title" />
		<AtomText :content="sectionContent" class="subtitle mb-0" />
    <!-- <p class="subtitle mb-0">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </p> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/title/Title.vue'
import AtomText from '@/components/atoms/text/AtomText.vue'

export default Vue.extend({
	components:{
		Title,
		AtomText,
	},
	props:{
		sectionContent: {
			type: String,
			required: true,
			default: "abc",
		}
	}
})
</script>
