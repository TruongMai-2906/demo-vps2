<template>
  <div>
    <div
      class="banner dark-overlay"
      style="background-image: url('/img/banner/1.jpg')"
    >
      <div class="container">
        <VueSlickCarousel v-bind="settings">
          <BannerCard
            v-for="(item, index) in contentList"
            :key="index"
            :content="item"
          />
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import BannerCard from "@/components/molecules/banner/BannerCard.vue";
export default {
  components: {
    VueSlickCarousel,
    BannerCard,
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      contentList: [
        {
          title: {
            text: "Getting Education Became Easier",
            highlight: "Easier",
          },
          text: "Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak",
          button: "Access 100 Books Now",
        },

        {
          title: {
            text: "Learn The Physics Play With Physics",
            highlight: "Physics",
          },
          text: "Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak",
          button: "Contact Me",
        },
        {
          title: {
            text: "ElevateCommunication Skill In English",
            highlight: "Elevate",
          },
          text: "Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak",
          button: "Visit My Blog",
        },
      ],
    };
  },
  mounted() {
    this.getWidth();
    if (this.getWidth() <= 768) {
      this.settings.dots = true;
      this.settings.arrows = false;
    }
  },
  methods: {
    getWidth() {
      console.log(screen.width);
      return screen.width;
    },
  },
};
</script>

<style>
.abc {
  text-decoration: none;
}

.slick-prev {
  left: -74px;
}

.slick-next {
  right: -74px;
}
@media screen and (max-width: 768px) {
  .banner-inner {
    width: 100%;
  }
  .slick-dots {
    position: relative;
  }
  .slick-dots li button:before {
    font-size: 0px;
  }
  /* .slick-dots li.slick-active button:before {
    opacity: 0;
  } */
  .slick-dots li button {
    font-size: 0;
    width: 12px;
    height: 12px;
    background-color: #fff;
    border: 0;
    border-radius: 50%;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    cursor: pointer;
    outline: none;
  }
}
</style>
