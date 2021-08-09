<template>
  <div>
    <section class="section section-padding service-sec pt-0">
      <div class="container">
        <div class="section-title-wrap section-header text-center">
			  <Title tag="h2" content="What We Provide" class="title"/>
			  <AtomText content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="(item, index) in serviceCardList" :key="index">
				<ServiceCard :flaticonIcon="item.flaticonIcon" :link="item.link" :content="item.content" :fontAwesomeIcon="item.fontAwesomeIcon" />
          </div>
          <!-- <div class="col-lg-4 col-md-6">
            <div class="service-box style-2 mb-30">
              <div class="d-flex align-items-center">
                <div class="icon-box">
                  <i class="flaticon-math"></i>
                </div>
                <div class="descr-box">
                  <h3>
                    <a href="#">Maths</a>
                  </h3>
                </div>
              </div>
              <div class="extra-info">
                <p class="mb-0">Lorem ipsum dolor si amet, dusino situ sint pertinac constituto, mir es dignsius quo great.Lorem Ipsum is simply dummy text of the printing</p>
              </div>
              <div class="service-link">
                <a href="#">
                <i><font-awesome-icon :icon="['fas', 'plus']" /></i>
                Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="service-box style-2 mb-30">
              <div class="d-flex align-items-center">
                <div class="icon-box">
                  <i class="flaticon-book"></i>
                </div>
                <div class="descr-box">
                  <h3>
                    <a href="#">English</a>
                  </h3>
                </div>
              </div>
              <div class="extra-info">
                <p class="mb-0">Lorem ipsum dolor si amet, dusino situ sint pertinac constituto, mir es dignsius quo great.Lorem Ipsum is simply dummy text of the printing</p>
              </div>
              <div class="service-link">
                <a href="#">
                <i><font-awesome-icon :icon="['fas', 'plus']" /></i>
                Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="service-box style-2 mb-30">
              <div class="d-flex align-items-center">
                <div class="icon-box">
                  <i class="flaticon-history"></i>
                </div>
                <div class="descr-box">
                  <h3>
                    <a href="#">History</a>
                  </h3>
                </div>
              </div>
              <div class="extra-info">
                <p class="mb-0">Lorem ipsum dolor si amet, dusino situ sint pertinac constituto, mir es dignsius quo great.Lorem Ipsum is simply dummy text of the printing</p>
              </div>
              <div class="service-link">
                <a href="#">
                <i><font-awesome-icon :icon="['fas', 'plus']" /></i>
                Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="service-box style-2 mb-30">
              <div class="d-flex align-items-center">
                <div class="icon-box">
                  <i class="flaticon-earth-globe"></i>
                </div>
                <div class="descr-box">
                  <h3>
                    <a href="#">Geography</a>
                  </h3>
                </div>
              </div>
              <div class="extra-info">
                <p class="mb-0">Lorem ipsum dolor si amet, dusino situ sint pertinac constituto, mir es dignsius quo great.Lorem Ipsum is simply dummy text of the printing</p>
              </div>
              <div class="service-link">
                <a href="#">
                <i><font-awesome-icon :icon="['fas', 'plus']" /></i>
                Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="service-box style-2 mb-30">
              <div class="d-flex align-items-center">
                <div class="icon-box">
                  <i class="flaticon-islamic"></i>
                </div>
                <div class="descr-box">
                  <h3>
                    <a href="#">Arabic</a>
                  </h3>
                </div>
              </div>
              <div class="extra-info">
                <p class="mb-0">Lorem ipsum dolor si amet, dusino situ sint pertinac constituto, mir es dignsius quo great.Lorem Ipsum is simply dummy text of the printing</p>
              </div>
              <div class="service-link">
                <a href="#">
                <i><font-awesome-icon :icon="['fas', 'plus']" /></i>
                Read More
                </a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/title/Title.vue'
import AtomText from '~/components/atoms/text/AtomText.vue'
import ServiceCard from '@/components/molecules/card/ServiceCard.vue'
export default Vue.extend({
	components:{
		Title,
		AtomText,
		ServiceCard,
	},
	data(){
		return {
			serviceCardList: [
				{
					flaticonIcon: "atom",
					link:{
						url: "#",
						name: "Physics",
					},
					content: "Lorem ipsum dolor si amet, dusino situ sint pertinac constituto, mir es dignsius quo great.Lorem Ipsum is simply dummy text of the printing",
					fontAwesomeIcon:{
						prefix: "fas",
						icon: "plus",
					}
				},
				{
					flaticonIcon: "math",
					link:{
						url: "#",
						name: "Maths",
					},
					content: "Lorem ipsum dolor si amet, dusino situ sint pertinac constituto, mir es dignsius quo great.Lorem Ipsum is simply dummy text of the printing",
					fontAwesomeIcon:{
						prefix: "fas",
						icon: "plus",
					}
				},
				{
					flaticonIcon: "book",
					link:{
						url: "#",
						name: "English",
					},
					content: "Lorem ipsum dolor si amet, dusino situ sint pertinac constituto, mir es dignsius quo great.Lorem Ipsum is simply dummy text of the printing",
					fontAwesomeIcon:{
						prefix: "fas",
						icon: "plus",
					}
				},
				{
					flaticonIcon: "history",
					link:{
						url: "#",
						name: "History",
					},
					content: "Lorem ipsum dolor si amet, dusino situ sint pertinac constituto, mir es dignsius quo great.Lorem Ipsum is simply dummy text of the printing",
					fontAwesomeIcon:{
						prefix: "fas",
						icon: "plus",
					}
				},
				{
					flaticonIcon: "earth-globe",
					link:{
						url: "#",
						name: "Geography",
					},
					content: "Lorem ipsum dolor si amet, dusino situ sint pertinac constituto, mir es dignsius quo great.Lorem Ipsum is simply dummy text of the printing",
					fontAwesomeIcon:{
						prefix: "fas",
						icon: "plus",
					}
				},
				{
					flaticonIcon: "islamic",
					link:{
						url: "#",
						name: "Arabic",
					},
					content: "Lorem ipsum dolor si amet, dusino situ sint pertinac constituto, mir es dignsius quo great.Lorem Ipsum is simply dummy text of the printing",
					fontAwesomeIcon:{
						prefix: "fas",
						icon: "plus",
					}
				},
			]
		}
	}
})
</script>

<style>
  .service-box.style-2 .service-link a i {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #20ad96;
      color: #20ad96;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      margin-right: 15px;
      transition: 0.3s;
  }
</style>
