<template>
    <div class="col-lg-4 col-md-6">
        <div class="recipe">
            <div class="recipe-thumbnail">
                <a :href="courseData.linkCourse">
                    <HotCourseImage :url="courseData.urlImage"/>
                </a>
            </div>
            <div class="recipe-body">
              <h5 class="recipe-title">
                  <a :href="courseData.linkCourse" >
                      <AtomText :content="courseData.courseTitle"/>
                  </a>
              </h5>
              <AtomText :content="courseData.text" class="recipe-text"/>
              <div class="recipe-meta">
                <div class="recipe-difficulty">
                        <div class="recipe-difficulty-inner">
                            <span class="active"></span>
                            <span class="active"></span>
                            <span></span>
                        </div>
                        <Title tag="span" :content="courseData.difficulty"/>
                </div>
                <div class="recipe-steps">
                    <span>
                        <IconFontAwesome prefix="fas" iconFontawesome="chalkboard" />
                        <Title tag="span" :content="courseData.classes" />
                    </span>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HotCourseImage from '~/components/atoms/image/HotCourseImage.vue'
import Title from '@/components/atoms/title/Title.vue'
import AtomText from '~/components/atoms/text/AtomText.vue'
import IconFontAwesome from '~/components/atoms/icons/IconFontAwesome.vue'
export default Vue.extend({
	components:{
		HotCourseImage,
		Title,
        AtomText,
        IconFontAwesome
	},
	props:{
		courseData: {
			type: Object,
			required: true,
		}
	}
})
</script>
