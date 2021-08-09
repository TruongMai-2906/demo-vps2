<template>
  <header class="main-header header-1 can-sticky">
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <Logo :src="logo" />
        <!-- Menu -->
        <NavigationBar
          :navigation-list="navigationList"
          :option="navigationOption"
          :aside="false"
        />

        <div class="header-controls">
          <ul class="header-controls-inner">
            <li :class="isShow ? 'open' : '' " class="cart-dropdown-wrapper cart-trigger" >
					<a @click="showCart()"> <IconFlaticon icon="shopping-basket"  /> </a>
              <ul class="cart-dropdown">
					  <CartItem v-for="(item, index) in cartItemList" :key="index" :src='item.src' :alt='item.alt' :name='item.name' :link='item.link' :text='item.cardText' />

                <li class="cart-subtotal">
						 <AtomText :content='subtotal' class="bold-text"/>
                </li>
                <li class="cart-buttons">
						 <Button v-for="(item, index) in buttonList" :key="index" :url="item.href" :content="item.content" class="btn-sm" />
                </li>
              </ul>
            </li>
            <li class="search-dropdown-wrapper search-trigger">
					<a @click="changeState()"> <IconFlaticon icon="magnifying-glass" /> </a>
            </li>
          </ul>

          <!-- Toggler -->
          <div class="aside-toggler aside-trigger " @click="openAside">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>


    <!-- Search Form Start-->
	 <SearchForm :class="isSearchOpen ? 'open' : '' " @clicked="changeState" />

	 <!-- Search Form End-->
  </header>
</template>

<script lang="ts">

import Vue from "vue"
import Logo from "@/components/atoms/logo/Logo.vue"
import NavigationBar from "@/components/molecules/navigationbar/NavigationBar.vue"
import CartItem from "@/components/molecules/cart/CartItem.vue"
import SearchForm from '@/components/molecules/search-form/SearchForm.vue'
import AtomText from "@/components/atoms/text/AtomText.vue"
import Button from "@/components/atoms/button/Button.vue"
import IconFlaticon from "@/components/atoms/icons/IconFlaticon.vue"


export default Vue.extend({
  components: {
    Logo,
    NavigationBar,
	 CartItem,
	 AtomText,
	 Button,
	 IconFlaticon,
	 SearchForm,
  },
  data() {
    return {
		logo: '/img/logo.png',
      navigationOption: true,
      asideTrigger: false,
		isShow:false,
		isSearchOpen:false,
		cartItemList:[
			{
				src:'/img/products/1.png',
				alt:'product',
				link:'#',
				name:'Notebook',
				cardText:'2x 18.00$',
			},
			{
				src:'/img/products/2.png',
				alt:'product',
				link:'#',
				name:'Nib Pen',
				cardText:'1x 24.25$',
			}
		],
		subtotal: 'Subtotal: 54.25$',
		buttonList:[
			{
				href: 'checkout.html',
				content: 'Checkout',
			},
			{
				href: 'cart.html',
				content: 'View Cart',
			}
		],
    };
  },
  props: {
    navigationList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openAside() {
      this.$emit("clicked", !this.asideTrigger);
    },
	 showCart(){
		 this.isShow = !this.isShow;
		 console.log(this.isShow);
	 },
	 changeState(){
		 this.isSearchOpen = !this.isSearchOpen;
		 console.log('change state',this.isSearchOpen);
	 },
  },
});
</script>

<style>
	.bold-text{
		font-weight: bold;
	}
</style>
