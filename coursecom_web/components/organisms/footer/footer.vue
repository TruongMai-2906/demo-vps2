<template>
    <footer class="ct-footer footer-2 footer-dark large-padding">
        <div class="container">
			<FooterList />
			<FooterName/>
            <FooterBottom/>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/title/Title.vue'
import AtomText from '~/components/atoms/text/AtomText.vue'
import FooterList from '~/components/molecules/footer/FooterList.vue'
import FooterName from '~/components/molecules/footer/FooterName.vue'
import FooterBottom from '~/components/molecules/footer/FooterBottom.vue'
export default Vue.extend({
	components:{
		Title,
		AtomText,
		FooterList,
		FooterName,
		FooterBottom
	},
	
})
</script>