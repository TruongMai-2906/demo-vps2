<template>
	<div>
		<Aside :navigation-list="navigationItemList" :classObject="classObjectAside" @clicked="handleClick" />
		<Headerv2 :navigation-list="navigationItemList" @clicked="handleClick" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Headerv2 from '@/components/organisms/header/Headerv2.vue'
import Aside from "~/components/organisms/aside/Aside.vue"
export default Vue.extend({
	components:{
		Headerv2,
		Aside,
	},
	data() {
    return {
      navigationItemList: [
        {
          title: "Home Page",
          link: "#",
          submenu: true,
          submemuItemList: [
            {
              title: "Home V1",
              link: "#",
              submenu: false,
            },
            {
              title: "Home V2",
              link: "#",
              submenu: false,
            },
          ],
        },
        {
          title: "Blog",
          link: "#",
          submenu: true,
          submemuItemList: [
            {
              title: "Blog Archive",
              link: "#",
              submenu: true,
              submemuItemList: [
                {
                  title: "Blog Archive V1",
                  link: "#",
                  submenu: false,
                },
                {
                  title: "Blog Archive V2",
                  link: "#",
                  submenu: false,
                },
              ],
            },
            {
              title: "Blog Single",
              link: "#",
              submenu: true,
              submemuItemList: [
                {
                  title: "Blog Single V1",
                  link: "#",
                  submenu: false,
                },
                {
                  title: "Blog Single V2",
                  link: "#",
                  submenu: false,
                },
              ],
            },
          ],
        },
        {
          title: "Pages",
          link: "#",
          submenu: true,
          submemuItemList: [
            {
              title: "About Us",
              link: "#",
            },
            {
              title: "Login",
              link: "#",
            },
            {
              title: "Sign Up",
              link: "#",
            },
            {
              title: "Check Out",
              link: "#",
            },
            {
              title: "Cart",
              link: "#",
            },
            {
              title: "Product Details",
              link: "#",
            },
          ],
        },
        {
          title: "Courses",
          link: "#",
          submenu: false,
        },
        {
          title: "Books",
          link: "#",
          submenu: false,
        },
        {
          title: "Contact Us",
          link: "#",
          submenu: false,
        },
      ],
      classObjectAside: "",
    };
  },
  methods: {
    handleClick(value: boolean) {
      console.log("Home: header clicked");
		console.log(value);

      if (value) {
			this.classObjectAside = "open";
			console.log(this.classObjectAside);

		} else {
			this.classObjectAside = "";
		}
    },
  },
})
</script>
