<template>
	<ui-sys title="单选框">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">单选框</view>
		</view>

		<ui-title title="基础用法" depth="2" isIcon ui="mx-4"></ui-title>
		<view class="p-4">值: {{ radio }}</view>
		<ui-form ui="ui-BG">
			<ui-form-group title="单选框" contentui="justify-end">
				<ui-radio v-model="radio" label="1">选项1</ui-radio>
				<ui-radio v-model="radio" label="2">选项2</ui-radio>
				<ui-radio v-model="radio" label="3">选项3</ui-radio>
			</ui-form-group>
		</ui-form>

		<ui-title title="颜色" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="单选框" contentui="justify-end">
				<ui-radio v-model="color" bg="bg-blue-light" label="blue-light">blue-light</ui-radio>
				<ui-radio v-model="color" bg="bg-green-gradient" label="green-gradient">green-gradient</ui-radio>
				<ui-radio v-model="color" bg="bg-red-thin" label="red-thin">red-thin</ui-radio>
			</ui-form-group>
		</ui-form>
		<ui-title title="样式" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="单选框" contentui="justify-end">
				<ui-radio ui="check" v-model="radio" label="1">选项1</ui-radio>
				<ui-radio ui="line" v-model="radio" label="2">选项2</ui-radio>
				<ui-radio v-model="radio" label="3">选项3</ui-radio>
			</ui-form-group>
		</ui-form>

		<ui-title title="大小" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="更大" contentui="justify-end">
				<ui-radio ui="check lg" v-model="radio" label="1">选项1</ui-radio>
				<ui-radio ui="line lg" v-model="radio" label="2">选项2</ui-radio>
				<ui-radio ui="lg" v-model="radio" label="3">选项3</ui-radio>
			</ui-form-group>
			<ui-form-group title="更大" contentui="justify-end">
				<ui-radio ui="check text-xl" v-model="radio" label="1">选项1</ui-radio>
				<ui-radio ui="line text-xl" v-model="radio" label="2">选项2</ui-radio>
				<ui-radio ui="text-xl" v-model="radio" label="3">选项3</ui-radio>
			</ui-form-group>
		</ui-form>

		<ui-title title="使用group" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="单选框" contentui="justify-end">
				<ui-radio-group bg="bg-green-gradient" v-model="group">
					<ui-radio label="1">选项1</ui-radio>
					<ui-radio label="2">选项2</ui-radio>
					<ui-radio label="3">选项3</ui-radio>
				</ui-radio-group>
			</ui-form-group>
		</ui-form>
		<ui-title title="disabled" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="单选框" contentui="justify-end">
				<ui-radio-group bg="bg-red-thin" v-model="disabled" disabled>
					<ui-radio label="1">选项1</ui-radio>
					<ui-radio label="2">选项2</ui-radio>
					<ui-radio label="3">选项3</ui-radio>
				</ui-radio-group>
			</ui-form-group>
			<ui-form-group title="单选框" contentui="justify-end">
				<ui-radio label="1" v-model="disabled" disabled>选项1</ui-radio>
				<ui-radio label="2" v-model="disabled" disabled>选项2</ui-radio>
				<ui-radio label="3" v-model="disabled" disabled>选项3</ui-radio>
			</ui-form-group>
		</ui-form>
		<ui-title title="可以取消" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="单选框" contentui="justify-end">
				<ui-radio-group bg="bg-red-thin" v-model="clearable" clearable>
					<ui-radio label="1">选项1</ui-radio>
					<ui-radio label="2">选项2</ui-radio>
					<ui-radio label="3">选项3</ui-radio>
				</ui-radio-group>
			</ui-form-group>
			<ui-form-group title="单选框" contentui="justify-end">
				<ui-radio clearable v-model="clearable" label="1">选项1</ui-radio>
				<ui-radio clearable v-model="clearable" label="2">选项2</ui-radio>
				<ui-radio clearable v-model="clearable" label="3">选项3</ui-radio>
			</ui-form-group>
		</ui-form>
		<ui-title title="卡片样式" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-radio-group bg="bg-red-thin" v-model="clearable" clearable>
			<ui-radio label="1" ui="card lg shadow-lg">
				<view class="flex-bar flex-sub w-100">
					<view class="flex-sub">
						<view class="text-xl">套餐一</view>
						<view class="ui-TC-3">一个月会员</view>
					</view>
					<view class="ml-5 px-4 text-xxl text-price text-orange">300.00</view>
				</view>
			</ui-radio>
			<ui-radio label="2" ui="card lg check shadow-lg" bg="bg-red">
				<view class="flex-bar flex-sub w-100">
					<view class="flex-sub">
						<view class="text-xl">套餐二</view>
						<view class="ui-TC-3">两个月会员</view>
					</view>
					<view class="ml-5 px-4 text-xxl text-price text-orange">580.00</view>
				</view>
			</ui-radio>
			<ui-radio label="3" ui="card lg line shadow-lg">
				<view class="flex-bar flex-sub w-100">
					<view class="flex-sub">
						<view class="text-xl">套餐三</view>
						<view class="ui-TC-3">三个月会员</view>
					</view>
					<view class="ml-5 px-4 text-xxl text-price text-orange">760.00</view>
				</view>
			</ui-radio>
			<!-- 消除样式 -->
			<ui-radio label="4" ui="card lg line shadow-lg" none>
				<view class="flex-bar flex-sub w-100">
					<view class="flex-sub">
						<view class="text-xl">套餐四 （消除样式）</view>
						<view class="ui-TC-3">四个月会员</view>
					</view>
					<view class="ml-5 px-4 text-xxl text-price text-orange">960.00</view>
				</view>
			</ui-radio>
		</ui-radio-group>

		<ui-title title="图片" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="单选框" contentui="justify-end">
				<ui-radio-group bg="bg-red-thin" v-model="clearable" clearable>
					<ui-radio  v-for="(item, index) in 5" :key="index" :label="index" :src="`https://cos.color-ui.com/avatar/lol-avatar/${1000 + index + 1}.jpg`"></ui-radio> 
				</ui-radio-group>
			</ui-form-group>
		</ui-form>

		<ui-title title="其他" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="单选框" contentui="justify-end">
				<ui-radio-group bg="bg-red-thin" v-model="clearable" clearable>
					<ui-radio label="1">选项1</ui-radio>
					<ui-radio
						label="2"
						:ui="`p-3 ui-BG-3 radius ${clearable == 2 ? 'borders border-white ' : ''}`"
						bg="bg-white shadow-sm shadow-red"
						unbg="borderss border-white ui-BG-3 "
					>
						选项2
					</ui-radio>
					<ui-radio label="3" ui="" bg="bg-red shadow-sm shadow-red" unbg="borders border-red ui-BG-3 shadow-sm shadow-red">选项3</ui-radio>
				</ui-radio-group>
			</ui-form-group>
		</ui-form>
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
			clearable: 1
		};
	},
	onLoad() {
		_this = this;
	},
	onReady() {},
	methods: {}
};
</script>

<style>

</style>
