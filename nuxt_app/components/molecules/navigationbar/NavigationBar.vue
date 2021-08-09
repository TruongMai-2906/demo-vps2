<template>
  <ul :class="classOption">
    <li v-for="item in navigationList" :key="item.title" class="menu-item" :class="item.submenu ? 'menu-item-has-children':'' ">
      <Link :url="item.link" :title="item.title" />
      <ul v-if="item.submenu" class="submenu">
        <li v-for="subitem in item.submemuItemList" :key="subitem.title" class="menu-item" :class="subitem.submenu ? 'menu-item-has-children':'' ">
          <Link :url="subitem.link" :title="subitem.title" />
          <ul v-if="subitem.submenu" class="submenu">
            <li v-for="subitem1 in subitem.submemuItemList" :key="subitem1.title" class="menu-item" :class="subitem1.submenu ? 'menu-item-has-children':'' ">
              <Link :url="subitem1.link" :title="subitem1.title" />
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import Link from '@/components/atoms/link/NavigationLink.vue'
export default Vue.extend({
  components:{
    Link,
  },
  props:{
    navigationList:{
      type: Array,
      required: true
    },
	 option:{
      type: Boolean,
      required: true
    }
  },
  data(){
	  return {
		  classOption: "",
	  }
  },
  mounted(){
	  if (this.option) {
		  this.classOption = "navbar-nav";
	  }
  },
})
</script>
