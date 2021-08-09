<template>
  <div class="progress-bars" v-view="handleAnimation">
    <div
      v-for="(item, index) in progressList"
      :key="index"
      class="sigma_progress"
    >
      <Title tag="h6" :content="item.title" />
      <!-- <h6>Social Studies</h6> -->
      <div class="progress">
        <div
          class="progress-bar"
          :id="'progress-bar' + index"
          ref="percentData"
          role="progressbar"
          :ariaValueNow="item.percent"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span></span>
        </div>
      </div>
      <div class="sigma_progress-count" :id="'sigma_progress-count'+index">
        <span>{{ item.percent }}%</span>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import gsap from "gsap";
import Button from "@/components/atoms/button/Button.vue";
import Title from "@/components/atoms/title/Title.vue";
export default Vue.extend({
  components: {
    Button,
    Title,
  },
  data() {
    return {
      statusAnimate: 0,
      progressList: [
        {
          title: "Social Studies",
          percent: 75,
        },
        {
          title: "Science",
          percent: 100,
        },
        {
          title: "Maths",
          percent: 20,
        },
      ],
    };
  },
  methods: {
    handleAnimation() {
      this.statusAnimate++;
      if (this.statusAnimate > 1) {
        // const percent: any = this.$refs;
        // console.log(percent);

        console.log("in progressbar: ",this.$refs);

			this.progressList.forEach((element,index) => {
				gsap.to("#progress-bar"+index, { duration: 0.1, width: element.percent + "%" });
        		gsap.to("#sigma_progress-count"+index, { duration: 0.1, left: element.percent + "%" });
			});
      }
    },
  },
});
</script>
