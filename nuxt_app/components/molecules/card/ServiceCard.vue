<template>
  <div class="service-box style-2 mb-30">
    <div class="d-flex align-items-center">
      <div class="icon-box">
        <IconFlatIcon :icon="flaticonIcon" />
      </div>
      <div class="descr-box">
        <h3>
          <Link :url="link.url" :name="link.name" />
        </h3>
      </div>
    </div>
    <div class="extra-info">
      <AtomText :content="content" class="mb-0" />
    </div>
    <div class="service-link">
      <a href="#">
        <IconFontawesome
          :prefix="fontAwesomeIcon.prefix"
          :iconFontawesome="fontAwesomeIcon.icon"
        />
        <p class="vertical-text">Read More</p>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconFlatIcon from "@/components/atoms/icon/IconFlaticon.vue";
import IconFontawesome from "~/components/atoms/icon/IconFontAwesome.vue";
import Link from "@/components/atoms/link/Link.vue";
import AtomText from "~/components/atoms/text/AtomText.vue";
export default Vue.extend({
  components: {
    IconFlatIcon,
    Link,
    AtomText,
    IconFontawesome,
  },
  props: {
    flaticonIcon: {
      type: String,
      required: true,
      default: "",
    },
    link: {
      type: Object,
      required: true,
    },
    content: {
      type: String,
      required: true,
      default: "",
    },
    fontAwesomeIcon: {
      type: Object,
      required: true,
      default: {
        prefix: "fas",
        icon: "box",
      },
    },
  },
});
</script>

<style>
.vertical-text {
  margin: auto 0;
  color: #1d2228;
  font-weight: 600;
}
</style>
