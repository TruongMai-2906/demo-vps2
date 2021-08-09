<template>
  <article class="post">
        <div class="post-thumbnail">
          <a :href="blogData.blogLink">
              <TrendingImage :url="blogData.urlImage"/>
          </a>
            <div class="post-meta">
                <span>September 22, 2021</span>
                <span>Posted by Jonathan Pick</span>
            </div>
        </div>
        <div class="post-categories">
            <Link :url="blogData.blogLink" :name="blogData.label"/>
        </div>
        <div class="post-body">
            <h5 class="post-title">
                <Link :url="blogData.blogLink" :name="blogData.title"/>
            </h5>
            <AtomText :content="blogData.text" />
        </div>
        
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import TrendingImage from '~/components/atoms/image/TrendingImage.vue'
import Title from '@/components/atoms/title/Title.vue'
import Link from '@/components/atoms/link/Link.vue'
import AtomText from '@/components/atoms/text/AtomText.vue'
export default Vue.extend({
	components:{
		TrendingImage,
		Title,
        Link,
        AtomText
	},
	props:{
		blogData: {
			type: Object,
			required: true,
		},
	}
})
</script>
