<template>
	<ui-sys title="单选框">
		<view class="ui-container">
			<ui-title depth="2" title="radio" isIcon></ui-title>
			值: {{radio}} 
			<ui-radio v-model="radio" label="1">选项1</ui-radio>
			<ui-radio v-model="radio" label="2">选项2</ui-radio>
			<ui-radio v-model="radio" label="3">选项3</ui-radio>
			<ui-title depth="2" title="radio" isIcon></ui-title>
			<ui-radio v-model="color" bg="bg-blue-light" label="blue-light">blue-light</ui-radio>
			<ui-radio v-model="color" bg="bg-green-gradient" label="green-gradient">green-gradient</ui-radio>
			<ui-radio v-model="color" bg="bg-red-thin" label="red-thin">red-thin</ui-radio>
			
			<ui-title depth="2" title="group" isIcon></ui-title>
			值: {{group}} 
			<ui-radio-group  bg="bg-green-gradient" v-model="group">
				<ui-radio label="1" >选项1</ui-radio>
				<ui-radio label="2">选项2</ui-radio>
				<ui-radio label="3">选项3</ui-radio>
			</ui-radio-group>
			
			<ui-title depth="2" title="disabled" isIcon></ui-title>
			值: {{disabled}} 
			<ui-radio-group bg="bg-red-thin"  v-model="disabled" disabled>
				<ui-radio label="1" >选项1</ui-radio>
				<ui-radio label="2">选项2</ui-radio>
				<ui-radio label="3">选项3</ui-radio>
			</ui-radio-group>
			
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			radio: 1,
			color: 'blue-light',
			group: 1,
			disabled: 1,
		};
	},
	onLoad() {
		_this = this;
	},
	onReady() { 
	},
	methods: {}
};
</script>

<style></style>
