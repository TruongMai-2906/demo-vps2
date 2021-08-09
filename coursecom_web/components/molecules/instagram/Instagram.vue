<template>
    <div class="col-lg col-md-4 col-sm-4 col-6 p-0">
        <a :href="instaData.blogLink" class="ct-ig-item image-popup">
            <InstagramImage :url="instaData.urlImage" />
        </a>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'
import InstagramImage from '~/components/atoms/image/InstagramImage.vue'
import Title from '@/components/atoms/title/Title.vue'
import AtomText from '~/components/atoms/text/AtomText.vue'
import IconFontAwesome from '~/components/atoms/icons/IconFontAwesome.vue'
export default Vue.extend({
	components:{
		InstagramImage,
		Title,
        AtomText,
        IconFontAwesome
	},
	props:{
		instaData: {
			type: Object,
			required: true,
		}
	}
})
</script>