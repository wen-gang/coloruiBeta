<template>
	<ui-sys title="复选框">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">复选框</view>
		</view>
		<ui-title title="基础用法" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">			
			<ui-form-group title="复选框" contentui="justify-end">
				modal1:{{modal1}} <ui-checkbox v-model="modal1">选项</ui-checkbox>
			</ui-form-group>
		</ui-form>
		<ui-title title="模糊状态" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="复选框" contentui="justify-end">
				modal2:{{modal2}}
				<ui-checkbox v-model="modal2" indeterminate>选项</ui-checkbox>
			</ui-form-group>
		</ui-form>
		
		<ui-title title="大小" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="大" contentui="justify-end">
				<ui-checkbox ui="round lg" v-model="size1">选项1</ui-checkbox>
				<ui-checkbox ui="lg" v-model="size2">选项2</ui-checkbox>
			</ui-form-group>
			<ui-form-group title="更大" contentui="justify-end">
				<ui-checkbox ui="round text-xl" v-model="size3">选项1</ui-checkbox>
				<ui-checkbox ui="text-xl" v-model="size4">选项2</ui-checkbox>
			</ui-form-group>
		</ui-form>
		<ui-title title="禁用" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="复选框" contentui="justify-end">
				<ui-checkbox disabled>选项</ui-checkbox>
			</ui-form-group>
		</ui-form>
		<ui-title title="样式" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="背景" contentui="justify-end">
				<ui-checkbox v-model="style1" unbg="borders border-red" bg="bg-red">红色</ui-checkbox>
				<ui-checkbox v-model="style2" unbg="borders border-blue" bg="bg-blue-gradient">渐变</ui-checkbox>
				<ui-checkbox v-model="style3" unbg="borders border-blue shadow-blue" bg="bg-blue shadow-blue">阴影</ui-checkbox>
				<ui-checkbox v-model="style4" unbg="border-red-thin border border-red shadow-red shadow-sm" bg="bg-red-thin border border-red shadow-red shadow-sm">红框阴影</ui-checkbox>
			</ui-form-group> 
			<ui-form-group title="未选中" contentui="justify-end">
				<ui-checkbox v-model="unstyle1" unbg="borders border-red" bg="bg-red">红色</ui-checkbox>
				<ui-checkbox v-model="unstyle2" unbg="borders border-blue" bg="bg-blue-gradient">渐变</ui-checkbox>
				<ui-checkbox v-model="unstyle3" unbg="borders border-blue shadow-blue" bg="bg-blue shadow-blue">阴影</ui-checkbox>
				<ui-checkbox v-model="unstyle4" unbg="border-red-thin border border-red shadow-red shadow-sm" bg="bg-red-thin border border-red shadow-red shadow-sm">红框阴影</ui-checkbox>
			</ui-form-group>
		</ui-form>

		<ui-title title="使用group" depth="2" isIcon ui="mx-4"></ui-title>
		<view class="paragraph px-4">group:{{group}}</view>
		<ui-form ui="ui-BG">
			<ui-form-group title="复选框" contentui="justify-end">
				<ui-checkbox-group bg="bg-green-gradient" v-model="group">
					<block slot-scope="{ isAllChecked, isIndeterminate}">
					<ui-checkbox :indeterminate="isIndeterminate" v-model="isAllChecked" all>全选</ui-checkbox>
					<ui-checkbox value="1">选项1</ui-checkbox>
					<ui-checkbox value="2">选项2</ui-checkbox>
					<ui-checkbox value="3">选项3</ui-checkbox></block>
				</ui-checkbox-group>
			</ui-form-group>
		</ui-form>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loading: true,
			modal1:false,
			modal2:false,
			size1:true,
			size2:true,
			size3:true,
			size4:true,
			style1:true,
			style2:true,
			style3:true,
			style4:true,
			unstyle1:false,
			unstyle2:false,
			unstyle3:false,
			unstyle4:false,
			group:['1']
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
