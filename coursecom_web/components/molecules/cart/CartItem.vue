<template>
  <li class="cart-item">
    <AtomImage :src="src" :alt="alt" />
    <div class="cart-item-body">
      <Link :url="link" :name="name"/>
		<SpanText :text="text" class="custom-secondary" />
      <!-- <span class="custom-secondary">2x 18.00$</span> -->
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import AtomImage from '~/components/atoms/image/AtomImage.vue'
import Link from '@/components/atoms/link/Link.vue'
import SpanText from '@/components/atoms/text/SpanText.vue'
export default Vue.extend({
	components:{
		AtomImage,
		Link,
		SpanText,
	},
	props:{
		src: {
			type: String,
			required: true,
			default: "",
		},
		alt: {
			type: String,
			required: true,
			default: "",
		},
		link: {
			type: String,
			required: true,
			default: "#",
		},
		name: {
			type: String,
			required: true,
			default: "",
		},
		text: {
			type: String,
			required: true,
			default: "",
		}
	}
})
</script>
