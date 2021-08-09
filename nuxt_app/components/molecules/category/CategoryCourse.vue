<template>
  <div class="col-lg-3 col-md-4 col-sm-6">
    <a :href="courseData.linkCourse" class="ct-category">
      <div class="ct-category-img">
        <CategoryImage :url="courseData.urlImage"/>
      </div>
      <div class="ct-category-info">
			<Title tag="h5" :content="courseData.nameCourse"/>
        <!-- <h5>{{ courseData.nameCourse }}</h5> -->
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryImage from '@/components/atoms/image/CategoryImage.vue'
import Title from '@/components/atoms/title/Title.vue'
export default Vue.extend({
	components:{
		CategoryImage,
		Title,
	},
	props:{
		courseData: {
			type: Object,
			required: true,
		}
	}
})
</script>
