<template>
    <div class="insta-sec">
        <div class="container">
            <div class="section-title-wrap section-header text-center">
                <span>
                    <IconInstagram/>
                    <Title tag="h2" content="Tutorly Insta" />
                    <AtomText content="@ mallvent" />
                </span>
            </div>
            <div class="row">
                <Instagram v-for="(item,index) in instaList " :key="index" :instaData="item" />
            </div>
            
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconInstagram from '~/components/atoms/icons/IconInstagram.vue'
import Title from '~/components/atoms/title/Title.vue'
import AtomText from '~/components/atoms/text/AtomText.vue'
import Instagram from '~/components/molecules/instagram/Instagram.vue'
export default Vue.extend({
	components:{
       Title,
       AtomText,
       Instagram,
	   IconInstagram
	},
	data(){
		return {
			instaList:[
				{
					blogLink: "/img/ig/1.jpg",
					urlImage: "/img/ig/1.jpg",
				},
				{
					blogLink: "/img/ig/2.jpg",
					urlImage: "/img/ig/2.jpg",
				},
                {
					blogLink: "/img/ig/3.jpg",
					urlImage: "/img/ig/3.jpg",
				},
                {
					blogLink: "/img/ig/4.jpg",
					urlImage: "/img/ig/4.jpg",
				},
                {
					blogLink: "/img/ig/5.jpg",
					urlImage: "/img/ig/5.jpg",
				},
			]
		}
	}
})
</script>