<template>
  <div>
    <div class="section section-padding ct-categories ct-categories-2">
      <div class="container">
        <div class="row">
			  <CategoryCourse v-for="(item, index) in courseList" :key="index" :courseData="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryCourse from '~/components/molecules/category/CategoryCourse.vue'
export default Vue.extend({
	components:{
		CategoryCourse,
	},
	data(){
		return {
			courseList:[
				{
					linkCourse: "courses.html",
					urlImage: "/img/categories/breakfast.jpg",
					nameCourse: "Physics",
				},
				{
					linkCourse: "courses.html",
					urlImage: "/img/categories/quick-food.jpg",
					nameCourse: "Maths",
				},
				{
					linkCourse: "courses.html",
					urlImage: "/img/categories/cuisine.jpg",
					nameCourse: "English",
				},
				{
					linkCourse: "courses.html",
					urlImage: "/img/categories/vegan.jpg",
					nameCourse: "History",
				},
				{
					linkCourse: "courses.html",
					urlImage: "/img/categories/dairy.jpg",
					nameCourse: "Geography",
				},
				{
					linkCourse: "courses.html",
					urlImage: "/img/categories/desserts.jpg",
					nameCourse: "Arabic",
				},
				{
					linkCourse: "courses.html",
					urlImage: "/img/categories/pizzas.jpg",
					nameCourse: "French",
				},
				{
					linkCourse: "courses.html",
					urlImage: "/img/categories/pancakes.jpg",
					nameCourse: "Jawa",
				},
			]
		}
	}
})
</script>
