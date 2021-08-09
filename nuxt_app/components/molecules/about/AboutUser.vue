<template>
  <div class="user-column">
    <UserImage />
    <UserSignature />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import UserImage from '~/components/atoms/image/UserImage.vue'
import UserSignature from '~/components/atoms/image/UserSignature.vue'
export default Vue.extend({
	components:{
		UserImage,
		UserSignature,
	}
})
</script>
