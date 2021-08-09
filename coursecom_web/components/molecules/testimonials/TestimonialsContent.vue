<template>
    <div class="ct-testimonials-slider">
        <div class="ct-testimonial-item">
            <div class="ct-testimonial-item-inner">
                <IconFlaticon :icon="content.flaticonIcon"/>
                <Title tag="span" :content="content.author" />
                <AtomText :content="content.text" />
            </div>
            <!-- <div class="ct-arrows">
                <IconFontAwesome prefix="fas" iconFontawesome="arrow-left" class="slider-prev slick-arrow"  />
                <IconFontAwesome prefix="fas" iconFontawesome="arrow-right" class="slider-next slick-arrow" />
            </div> -->
        </div>
    </div>
    
</template>


<script lang="ts">
import Vue from 'vue'
import AtomText from '@/components/atoms/text/AtomText.vue'
import Title from '~/components/atoms/title/Title.vue'
import IconFlaticon from '~/components/atoms/icons/IconFlaticon.vue'
import IconFontAwesome from '~/components/atoms/icons/IconFontAwesome.vue'
export default Vue.extend({
	components:{
		AtomText,
        IconFlaticon,
        Title,
        IconFontAwesome
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