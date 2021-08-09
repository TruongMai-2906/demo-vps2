<template>
  <div class="video-player-trigger">
    <a :href="videoUrl" class="popup-youtube">
      <IconFontAwesome prefix="fas" iconFontawesome="play" />
      <!-- <font-awesome-icon :icon="['fas', 'play']" /> -->
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconFontAwesome from "~/components/atoms/icon/IconFontAwesome.vue";
export default Vue.extend({
  components: {
    IconFontAwesome,
  },
  props: {
    videoUrl: {
      type: String,
      required: true,
      default: "#",
    },
  },
});
</script>
