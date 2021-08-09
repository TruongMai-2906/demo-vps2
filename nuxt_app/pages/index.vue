<template>
  <div>
    <Aside :navigation-list="navigationItemList" :classObject="classObjectAside" @clicked="handleClick" />
    <Header :navigation-list="navigationItemList" @clicked="handleClick" />
    <Banner />
    <Categories />
    <About />
    <Services />
    <VideoStyle />
	<TrendingArticles/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import Desktop from '~/components/templates/destop.vue';
///components/organisms/header/Header.vue
import Header from "~/components/organisms/header/Header.vue";
import Banner from "~/components/organisms/banner/Banner.vue";
import Categories from "~/components/organisms/categories/Categories.vue";
import About from "~/components/organisms/about/About.vue";
import Services from "~/components/organisms/course-services/Services.vue";
import VideoStyle from "~/components/organisms/videostyle/VideoStyle.vue";
import Aside from "~/components/organisms/aside/Aside.vue";
import TrendingArticles from "~/components/organisms/trending/TrendingArticles.vue"
export default Vue.extend({
  components: {
    Aside,
    Header,
    Banner,
    Categories,
    About,
    Services,
    VideoStyle,
	TrendingArticles
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
      if (value) {
			this.classObjectAside = "open";
		} else {
			this.classObjectAside = "";
		}
    },
  },
});
</script>


