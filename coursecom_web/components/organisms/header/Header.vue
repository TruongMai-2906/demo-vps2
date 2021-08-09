<template>
  <header class="main-header header-2 header-absolute">
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <Logo :src="logo" />
        <!-- Menu -->
        <NavigationBar :navigation-list="navigationList" :option="navigationOption" :aside="false"/>

        <!-- Toggler -->
        <div class="aside-toggler aside-trigger" @click="openAside()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/components/atoms/logo/Logo.vue'
import NavigationBar from '@/components/molecules/navigationbar/NavigationBar.vue'
export default Vue.extend({
  components: {
    Logo,
    NavigationBar,
  },
  data() {
    return {
		 navigationOption: true,
		 asideTrigger: false,
		 logo: '/img/logo-lg-light.png',
    }
  },
  props: {
	  navigationList:{
      type: Array,
      required: true
    }
  },
  methods:{
	  openAside(){
		  this.$emit('clicked', !this.asideTrigger);
	  }
  }
})
</script>
