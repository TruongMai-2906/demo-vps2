<template>
    <section class="section light-bg bg-cover"  style="background-image: url('/img/bg/2.jpg')">
        <div class="container">
            <div class="section-title-wrap section-header text-center">
                <Title tag="h2" content="Testimonials" class="title" />
            </div>
            <div class="ct-testimonials">
                 <VueSlickCarousel v-bind="settings">
                     <TestimonialsContent v-for="(item, index) in contentList" :key="index"  :content="item"/>
                 </VueSlickCarousel>
            </div>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Title from "~/components/atoms/title/Title.vue"
import TestimonialsContent from '~/components/molecules/testimonials/TestimonialsContent.vue'
import IconFontAwesome from '~/components/atoms/icons/IconFontAwesome.vue'
export default {
  components: {
    VueSlickCarousel,
    Title,
    TestimonialsContent,
    IconFontAwesome
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      },
      contentList: [
        {
            flaticonIcon: "left-quote",
            author: "Johny White",
            text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {          
            flaticonIcon:"left-quote",
            author: "Brian Fitness Education",
            text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"   
        },
        {          
            flaticonIcon:"left-quote",
            author: "Brian Fitness Education",
            text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"   
        },
        {          
            flaticonIcon:"left-quote",
            author: "Brian Fitness Education",
            text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"   
        },
        
      ],
    };
  },
  
};
</script>

