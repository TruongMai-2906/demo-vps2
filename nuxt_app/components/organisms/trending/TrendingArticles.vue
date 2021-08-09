<template>
    <section class="section section-padding posts">
        <div class="container">
            <div class="section-title-wrap section-header">
                <Title tag="h2" content="Trending Articles" class="title" />
                <AtomText content="Orientation Program For The New Students" class="subtitle" />
            </div>
            <div class="row">
                <TrendingArticles v-for="(item, index) in blogList" :key="index" :blogData="item" :class="'col-lg-'+item.lg + ' col-md-'+ item.md "  />      
            </div>
        </div>
			
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '~/components/atoms/title/Title.vue'
import AtomText from '~/components/atoms/text/AtomText.vue'
import TrendingArticles from '~/components/molecules/trending/TrendingArticles.vue'

export default Vue.extend({
	components:{
        Title,
        AtomText,
		TrendingArticles,

	},
	data(){
		return {
			blogList:[
				{
					blogLink: "courses.html",
					urlImage: "/img/blog/1.jpg",
					lg:12,
					md:12,
					label: "Physics",
					title: "Enrolling New Members Into The Library",
					text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
				},
				{
					blogLink: "courses.html",
					urlImage: "/img/blog/5.jpg",
					lg:6,
					md:6,
					label: "English",
					title: "Behavioral Science - BS",
					text: "Some quick example text to build on the card title and make up the bulk of the card's content..."

				},
				{
					blogLink: "courses.html",
					urlImage: "/img/blog/4.jpg",
					lg:6,
					md:6,
					label: "Lunch",
					title: "Keypoints For Improving Focus",
					text: "Some quick example text to build on the card title and make up the bulk of the card's content..."
				},
				{
					blogLink: "courses.html",
					urlImage: "/img/blog/3.jpg",
					lg:7,
					md:6,
					label: "How-To",
					title: "Best Education Channels On YouTube",
					text: 'Some quick example text to build on the card title and make up the bulk of the card'
				},
				{
					blogLink: "courses.html",
					urlImage: "/img/blog/8.jpg",
					lg:5,
					md:6,
					label: "English",
					title: "Best Education Channels On YouTube",
					text: "Some quick example text to build on the card title and make up the bulk of the card's content..."
				},
			]
		}
	}
})
</script>
