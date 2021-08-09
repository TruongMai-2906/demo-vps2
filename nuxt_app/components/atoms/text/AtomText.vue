<template>
  <p>{{ content }}</p>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    content: {
      type: String,
      required: true,
    },
  },
});
</script>
