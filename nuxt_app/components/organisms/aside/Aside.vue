<template>
  <div>
    <aside class="main-aside" :class="classObject">
      <Logo />

      <div class="aside-scroll" v-slimscroll="options">
        <NavigationBar
          :navigation-list="navigationList"
          :option="navigationOption"
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
      options: {
        height: "auto",
        position: "right",
        size: "5px",
        color: "#dcdcdc",
        opacity: 1,
        wheelStep: 5,
        touchScrollStep: 50,
      },
      navigationOption: false,
		asideTrigger: true,
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
  methods:{
	  handleClick(){
		  this.$emit('clicked',!this.asideTrigger);
	  }
  }
});
</script>
