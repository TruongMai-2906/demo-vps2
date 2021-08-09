<template>
    <section class="section section-padding">
        <div class="container">
             <div class="section-title-wrap section-header text-center">
				 <Title tag="h2" content="Hot Courses" class="title"/>
				 <AtomText content="Want to see the what new recipes we are working on? Check out what the people have to say about them"/>
             </div>
			 <div class="row">
				<HotCourseCard v-for="(item,index) in courseList " :key="index" :courseData="item"/>
			 </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '~/components/atoms/title/Title.vue'
import AtomText from '~/components/atoms/text/AtomText.vue'
import HotCourseCard from '~/components/molecules/hot-course/HotCourseCard.vue'
export default Vue.extend({
	components:{
		Title,
		AtomText,
		HotCourseCard
	},
	data(){
		return {
			courseList:[
				{
					linkCourse: "course-details.html",
					urlImage: "/img/blog/5.jpg",
					courseTitle: "Behavioral Science - BS",
					text:"Some quick example text to build on the card title and make up the bulk of the card's content...",
					difficulty:"Home Tutor",
					classes:"24 Classes"
				},
				{
					linkCourse: "course-details.html",
					urlImage: "/img//blog/3.jpg",
					courseTitle: "Behavioral Science - BS",
					text:"Some quick example text to build on the card title and make up the bulk of the card's content...",
					difficulty:"Expert Chef",
					classes:"47 Classes"
				},
				{
					linkCourse: "course-details.html",
					urlImage: "/img/blog/4.jpg",
					courseTitle: "Keypoints For Improving Focus",
					text:"Some quick example text to build on the card title and make up the bulk of the card's content...",
					difficulty:"Amateur",
					classes:" 13 Classes"
				},
				
			]
		}
	}
})
</script>