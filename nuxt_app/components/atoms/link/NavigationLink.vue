<template>
  <a :href="url">{{ title }}</a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    url:{
      type: String,
      required: true,
    },
    title:{
      type: String,
      required: true,
    },
  }
})
</script>
