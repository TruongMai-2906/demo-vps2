<template>
  <div>
    <section
      class="
        section
        video-style-3
        bg-cover bg-center
        dark-overlay dark-overlay-2
      "
      style="background-image: url('/img/video-2.jpg')"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="section-title-wrap">
              <!-- <span class="secondary-title"> Get To Know Us </span> -->
				  <Title tag="span" content="Get To Know Us" class="secondary-title" />
				  <Title tag="h2" content="We Can Help You To Achieve Your Business Goal" class="title text-white" />
              <!-- <h2 class="title text-white">
                We Can Help You To Achieve Your Business Goal
              </h2> -->
				  <Button :url="url" :content="content" class="btn-custom primary shadow-none" />
              <!-- <a href="#" class="btn-custom primary shadow-none"
                >Discover more</a
              > -->
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="skill-wrapper">
					<VideoPlay :videoUrl="videoUrl" />
					<SectionTitle :sectionContent="sectionContent" />
					<ProgressBar />
              <!-- <div class="video-player-trigger">
                <a
                  href="https://www.youtube.com/watch?v=TKnufs85hXk"
                  class="popup-youtube"
                >
                  <font-awesome-icon :icon="['fas', 'play']" />
                </a>
              </div>
              <div class="section-title-wrap">
                <span class="secondary-title"> Our Skills </span>
                <h2 class="title">Great Teaching Skills</h2>
                <p class="subtitle mb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
              <div class="progress-bars" v-view="handleAnimation">
                <div class="sigma_progress">
                  <h6>Social Studies</h6>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      ref="percentData"
                      role="progressbar"
                      ariaValueNow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span></span>
                    </div>
                  </div>
                  <div class="sigma_progress-count">
                    <span>70%</span>
                  </div>
                </div>
                <div class="sigma_progress">
                  <h6>Science</h6>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      ref="percentData"
                      role="progressbar"
                      ariaValueNow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span></span>
                    </div>
                  </div>
                  <div class="sigma_progress-count">
                    <span>85%</span>
                  </div>
                </div>
                <div class="sigma_progress">
                  <h6>Maths</h6>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      ref="percentData"
                      role="progressbar"
                      ariaValueNow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span></span>
                    </div>
                  </div>
                  <div class="sigma_progress-count">
                    <span>55%</span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import gsap from "gsap";
import Button from "@/components/atoms/button/Button.vue"
import Title from '@/components/atoms/title/Title.vue'
import VideoPlay from '@/components/molecules/button/VideoPlay.vue'
import SectionTitle from '@/components/molecules/title/SectionTitle.vue'
import ProgressBar from '@/components/molecules/bar/ProgressBar.vue'
export default Vue.extend({
  components: {
	  Button,
	  Title,
	  VideoPlay,
	  SectionTitle,
	  ProgressBar,
  },
  data() {
    return {
      statusAnimate: 0,
		url: "#",
		content: "Discover more",
		videoUrl: "https://www.youtube.com/watch?v=TKnufs85hXk",
		sectionContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
		progressList: [
        {
          title: "Social Studies",
          percent: 70,
        },
        {
          title: "Science",
          percent: 85,
        },
        {
          title: "Maths",
          percent: 20,
        },
      ],
    };
  },
});
</script>
