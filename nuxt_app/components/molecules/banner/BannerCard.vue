<template>
  <div class="">
    <div class="banner-inner">
		<CustomHighlightText :text="content.title.text" :highlight="content.title.highlight" />
		<AtomText :content="content.text" class="subtitle text-white"/>
		<a href="#" class="btn-custom primary shadow-none"
        > {{ content.button }}
        <font-awesome-icon
          :icon="['fa', 'arrow-right']"
          :style="{ marginLeft: '10px' }"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AtomText from '@/components/atoms/text/AtomText.vue'
import CustomHighlightText from '@/components/atoms/text/CustomHighlightText.vue'
export default Vue.extend({
	components:{
		AtomText,
		CustomHighlightText,
	},
	props:{
		content:{
			type: Object,
			required: true,
			default: {text:"abc", button: "abc"},
		}
	}
})
</script>
