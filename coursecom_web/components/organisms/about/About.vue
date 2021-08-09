<template>
  <div>
    <section class="section about-sec style-2 pt-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-wrapper">
              <AboutImage />
              <!-- <img src="/img/about-2.jpg" alt="image"> -->
            </div>
          </div>
          <div class="col-lg-6">
            <AboutSectionTitle />
            <div class="about-content">
              <div class="row">
                <div class="col-md-6">
                  <AboutText />
                  <ul>
                    <ListCheckItem v-for="(item, index) in checkItemList" :key="index" :data="item" />
                  </ul>
                </div>
                <div class="col-md-6">
                  <div class="icon-box">
                    <IconBook />
                    <AboutProvidingText />
                  </div>
                </div>
              </div>
              <AboutUser />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import AboutImage from "~/components/atoms/image/AboutImage.vue";
import AboutSectionTitle from "~/components/atoms/title/AboutSectionTitle.vue";
import AboutText from "~/components/atoms/text/AboutText.vue";
import AboutProvidingText from "~/components/atoms/text/AboutProvidingText.vue";
import IconBook from "~/components/atoms/icons/IconBook.vue";

import ListCheck from "~/components/molecules/about/ListCheck.vue";
import AboutUser from "~/components/molecules/about/AboutUser.vue";
import ListCheckItem from "~/components/molecules/about/ListCheckItem.vue";

export default Vue.extend({
  components: {
    AboutImage,
    AboutSectionTitle,
    AboutText,
    ListCheck,
    IconBook,
    AboutUser,
    AboutProvidingText,
	 ListCheckItem,
  },
  data() {
    return {
      checkItemList: [
        { text: "Nsectetur cing elit." },
        { text: "Nsectetur cing elit." },
        { text: "Nsectetur cing elit." },
      ],
    };
  },
});
</script>
