<template>
	<ui-sys title="进度条">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">进度条</view>
			<ui-progress progress="40"></ui-progress>
			<ui-title title="进度条形状" depth="2" isIcon></ui-title>
			
				<ui-progress progress="61.8"></ui-progress>
				<ui-progress round progress="30.8"></ui-progress> 
				
				<ui-title title="进度条尺寸" depth="2" isIcon></ui-title> 
				<ui-progress sm progress="61.8"></ui-progress>
				<ui-progress progress="61.8"></ui-progress>
				<ui-progress lg progress="61.8"></ui-progress> 
			
			<ui-title title="进度条颜色" depth="2" isIcon></ui-title>  
			
			<ui-progress bg="bg-green" progress="61.8"></ui-progress>
			<ui-progress  bg="bg-green-light" progress="61.8"></ui-progress>
			<ui-progress  bg="bg-green-thin" progress="61.8"></ui-progress>
			<ui-progress  bg="bg-green-gradient" progress="61.8"></ui-progress>
			<ui-title title="进度条条纹" depth="2" isIcon></ui-title>   
			
			<ui-progress striped progress="61.8"></ui-progress> 
			<ui-progress striped active progress="40.8"></ui-progress> 
			<ui-title title="进度条组合" depth="2" isIcon></ui-title>    
			
			<ui-progress :progressArray="[40.8,20,8]" :bgArray="['bg-red','bg-green','bg-blue']" striped active round></ui-progress> 
			<ui-title title="进度条布局" depth="2" isIcon></ui-title>    
			
			<ui-progress border :progressArray="[40.8,20,8]" :bgArray="['bg-red','bg-green','bg-blue']" striped active round></ui-progress> 
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			ColorList:[],
			color: 'red',
			loading: false,
			modalName: '',
			active: false
		};
	},
	onLoad() {
		_this = this;
	},
	onReady() {
		_this.loading = false;
	},
	methods: {}
};
</script>

<style></style>
