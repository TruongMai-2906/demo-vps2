<template>
	<h1 class="title text-white">
        {{ head }}<span class="custom-primary">{{ highlight }}</span>{{ foot }}
      </h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	data(){
		return {
			head: "",
			middle: "",
			foot: "",
		}
	},
	props:{
		text:{
			type: String,
			required: true,
			default:"abc",
		},
		highlight:{
			type: String,
			required: true,
			default:"abc",
		},
	},
	mounted(){
		this.setHighlight();
	},
	methods:{
		setHighlight(){
			for (let i = 0; i < (this.text.length - this.highlight.length + 1); i++) {
				let temp = this.text.slice(i, i + this.highlight.length);
				if (temp === this.highlight) {
					console.log("temp: ",temp);
					this.head = this.text.slice(0, i);
					this.middle = temp;
					this.foot = this.text.slice(i + this.highlight.length, this.text.length);
					break;
				}
			}
		}
	}
})
</script>
