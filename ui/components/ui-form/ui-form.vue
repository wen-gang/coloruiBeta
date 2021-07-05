<template>
	<view class="ui-form border-top border-bottom" :class="[ui]"><slot></slot></view>
</template>

<script>
export default {
	name: 'UiForm',
	data() {
		return {
			titleWidth:0
		};
	},
	props: {
		ui: {
			type: String,
			default: ''
		},
		title: {
			type: Number,
			default: 4
		}
	},
	mounted() {
		this.titleWidth = 0;
		this._deepSetTitleWidth(this.$children);
	},
	updated() {
	},
	computed: { 
	},
	methods: {
		_deepSetTitleWidth(array) {
			if (Array.isArray(array)) {
				array.forEach((child) => {
					let childName = child.$options.name
					if (childName == 'UiFormGroup') {
						let length = child.title.length + (child.icon?1.2:0)
						if(this.titleWidth < length){
							this.titleWidth = length
						}
					} else if (child.$children) {
						this._deepSetTitleWidth(child.$children)
					}
				})
			}
		}
	}
};
</script>

<style lang="scss"></style>
