<template>
  <div>
    <ul :class="classOption" v-if="aside === false">
      <li
        v-for="item in navigationList"
        :key="item.title"
        class="menu-item"
        :class="item.submenu ? 'menu-item-has-children' : ''"
      >
        <Link :url="item.link" :title="item.title" />
        <ul v-if="item.submenu" class="submenu">
          <li
            v-for="subitem in item.submemuItemList"
            :key="subitem.title"
            class="menu-item"
            :class="subitem.submenu ? 'menu-item-has-children' : ''"
          >
            <Link :url="subitem.link" :title="subitem.title" />
            <ul v-if="subitem.submenu" class="submenu">
              <li
                v-for="subitem1 in subitem.submemuItemList"
                :key="subitem1.title"
                class="menu-item"
                :class="subitem1.submenu ? 'menu-item-has-children' : ''"
              >
                <Link :url="subitem1.link" :title="subitem1.title" />
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <ul :class="classOption" v-if="aside === true">
      <li
        v-for="item in navigationList"
        :key="item.title"
        class="menu-item aside"
        :class="item.submenu ? 'menu-item-has-children' : ''"
      >
        <Link :url="item.link" :title="item.title" @click="submenuShow" v-touch:tap="touchHandler" />
        <VueSlideUpDown :active="active" :duration="1000">
          <ul v-if="item.submenu" class="submenu">
            <li
              v-for="subitem in item.submemuItemList"
              :key="subitem.title"
              class="menu-item"
              :class="subitem.submenu ? 'menu-item-has-children' : ''"
            >
              <Link :url="subitem.link" :title="subitem.title" @click="submenuShow"/>
              <!-- <VueSlideUpDown :active="active" :duration="1000"> -->
                <ul v-if="subitem.submenu" class="submenu">
                  <li
                    v-for="subitem1 in subitem.submemuItemList"
                    :key="subitem1.title"
                    class="menu-item"
                    :class="subitem1.submenu ? 'menu-item-has-children' : ''"
                  >
                    <Link :url="subitem1.link" :title="subitem1.title" />
                  </li>
                </ul>
              <!-- </VueSlideUpDown> -->
            </li>
          </ul>
        </VueSlideUpDown>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Link from "@/components/atoms/link/NavigationLink.vue";
import VueSlideUpDown from "vue-slide-up-down";
export default Vue.extend({
  components: {
    Link,
    VueSlideUpDown,
  },
  props: {
    navigationList: {
      type: Array,
      required: true,
    },
    option: {
      type: Boolean,
      required: true,
    },
    aside: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      classOption: "",
		active: false,
    };
  },
  mounted() {
    if (this.option) {
      this.classOption = "navbar-nav";
    }
  },
  methods: {
	  submenuShow(){

	  },
	  touchHandler(){
		  this.active = !this.active;
		  console.log('touchHandler', this.active);

	  }
  }
});
</script>
