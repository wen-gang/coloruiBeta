<template>
	<view class="ui-checkbox-group" :class="[ui]">
		<slot :isAllChecked="isAllChecked" :isIndeterminate="isIndeterminate"></slot>
	</view>
</template>

<script>
	export default {
		name: 'UiCheckboxGroup',
		data() {
			return {
				group:[],
				all:[],
				isAllChecked:false,
				isIndeterminate:false
			};
		},
		props: {
			ui: {
				type: String,
				default: ''
			},
			value: {
				type: [String, Array]
			},
			disabled: {
				type: Boolean,
				default: false
			},
			bg: {
				type: String,
				default: 'ui-BG-Main'
			},
			clearable: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			value: {
				handler(value) {
					this.all = [];
					this.$nextTick(function(){
						this._deepSetValue(this.$children);
					})
					this.group = value;
				},
				immediate: true
			},
			group: {
				handler(value) {
					this.$nextTick(function(){						
						this.isAllChecked = this.all.length==this.group.length
						this.isIndeterminate = this.group.length>0
					})
				},
				immediate: true
			}
		},
		methods: {
			_onCheckboxChange(value) {
				let index = this.group.indexOf(value);
				if(index == -1){
					this.group.push(value)
				} else {
					this.group.splice(index,1)
				}
				this.$emit('input', this.group)
				this.$emit('change', this.group)
			},
			_onCheckboxAll(isAll){
				if(isAll){
					this.group = this.all;
				} else {
					this.group = [];
				}				
				this.$emit('input', this.group)
				this.$emit('change', this.group)
			},
			_deepSetValue(array) {
				if (Array.isArray(array)) { 
					array.forEach((child) => {
						let childName = child.$options.name
						if (childName == 'UiCheckbox') {
							if(!child.all){								
								this.all.push(child.value);
							}
							if (typeof child._setValue == 'function') {
								child._setValue(this.value)
							}
						} else if (child.$children) {
							this._deepSetValue(child.$children)
						}
					})
				}
			}
		}
	};
</script>

<style></style>
