<template>
  <div>
    <aside class="main-aside" :class="classObject" >
      <Logo :src="logo" />
		 <!-- v-slimscroll="options" -->
      <div class="aside-scroll" >
        <NavigationBar
          :navigation-list="navigationList"
          :option="navigationOption"
			 :aside="isAside"
        />
      </div>
    </aside>
    <div class="aside-overlay aside-trigger" @click="handleClick"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "@/components/atoms/logo/Logo.vue";
import NavigationBar from "@/components/molecules/navigationbar/NavigationBar.vue";


export default Vue.extend({
  components: {
    Logo,
    NavigationBar,
  },
  data() {
    return {
		logo: '/img/logo.png',
      options: {
        height: "auto",
        position: "right",
        size: "5px",
        color: "#dcdcdc",
        opacity: 1,
        wheelStep: 10,
        touchScrollStep: 75,
      },
      navigationOption: false,
      asideTrigger: true,
		isAside: false,
    };
  },
  props: {
    navigationList: {
      type: Array,
      required: true,
    },
    classObject: {
      type: String,
      required: true,
      default: "",
    },
  },
  mounted() {
    if (this.getWidth() <= 768) {
      this.isAside = !this.isAside;
    }
  },
  methods: {
    handleClick() {
      this.$emit("clicked", !this.asideTrigger);
    },
    getWidth() {
      console.log(screen.width);
      return screen.width;
    },
  },
});
</script>
