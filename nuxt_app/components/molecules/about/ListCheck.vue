<template>
  <ul>
    <ListCheckItem
      v-for="(item, index) in checkItemList"
      :key="index"
      :data="item"
    />
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

import ListCheckItem from "~/components/molecules/about/ListCheckItem.vue";

export default Vue.extend({
  components: {
    ListCheckItem,
  },
  data() {
    return {
      checkItemList: [
        { text: "Nsectetur cing elit." },
        { text: "Nsectetur cing elit." },
        { text: "Nsectetur cing elit." },
      ],
    };
  },
});
</script>
