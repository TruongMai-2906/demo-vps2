<template>
  <div>
    <!-- Logo -->
    <a class="navbar-brand" href="index.html">
      <img :src="src" alt="logo" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props:{
		src:{
			type: String,
			required: true,
			default: '/img/logo-lg-light.png',
		}
	}
})
</script>
