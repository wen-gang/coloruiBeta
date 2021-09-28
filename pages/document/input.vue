<template>
	<ui-sys title="输入框">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">输入框</view>
		</view>

		<ui-title title="基础用法" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="文本"><ui-input placeholder="请输入文本"></ui-input></ui-form-group>
		</ui-form>
		
		<ui-title title="自定义类型" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<!-- 输入任意文本 -->
			<ui-form-group title="文本"><ui-input placeholder="请输入文本"></ui-input></ui-form-group>
			<!-- #ifdef MP -->
			<!-- 输入身份证，调起身份证键盘 -->
			<ui-form-group title="身份证"><ui-input type="idcard" placeholder="请输入身份证"></ui-input></ui-form-group>
			<!-- #endif -->
			<!-- 带小数点的数字键盘 -->
			<ui-form-group title="整数"><ui-input type="digit" placeholder="请输入整数"></ui-input></ui-form-group>
			<!-- 数字输入键盘 -->
			<ui-form-group title="数字"><ui-input type="number" placeholder="请输入数字"></ui-input></ui-form-group>
			<!-- 输入密码 -->
			<ui-form-group title="密码"><ui-input type="password" placeholder="请输入密码"></ui-input></ui-form-group>
		</ui-form>
		<ui-title title="禁用输入框" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="文本" disabled><ui-input placeholder="请输入文本"></ui-input></ui-form-group>
		</ui-form>
		<ui-title title="显示图标" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="图标" icon="cicon-safe-check"><ui-input placeholder="请输入文本"></ui-input></ui-form-group>
			<ui-form-group icon="cicon-safe-check"><ui-input placeholder="请输入文本"></ui-input></ui-form-group>
			<ui-form-group title="图标">
				<ui-input placeholder="请输入文本"></ui-input>
				<block slot="action"><text class="cicon-place icon-xl"></text></block>
			</ui-form-group>
		</ui-form>
		<ui-title title="必填项" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group required icon="cicon-mobile" type="phone"><ui-input placeholder="请输入手机号"></ui-input></ui-form-group>
		</ui-form>
		<ui-title title="插槽" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG">
			<ui-form-group title="短信验证">
				<ui-input placeholder="请输入短信验证码"></ui-input>
				<block slot="action"><button class="ui-btn bg-blue-gradient">发送验证码</button></block>
			</ui-form-group>
		</ui-form>
		<ui-title title="文本域" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG mt-4">
			<ui-form-group title="高度自适应" titleTop><ui-input placeholder="请输入用户名" maxlength="140" type="textarea" autoheight></ui-input></ui-form-group>
		</ui-form>
		<ui-title title="显示字数统计" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG mt-4">
			<ui-form-group title="高度自适应" titleTop><ui-input placeholder="请输入用户名" maxlength="50" type="textarea" autoheight showtag></ui-input></ui-form-group>
		</ui-form>

		<ui-title title="内容对齐" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form-group title="右对齐"><ui-input placeholder="输入框内容右对齐" ui="text-right"></ui-input></ui-form-group>
		<ui-form-group title="居中"><ui-input placeholder="输入框内容居中" ui="text-center"></ui-input></ui-form-group>

		<ui-title title="组" depth="2" isIcon ui="mx-4"></ui-title>
		<ui-form ui="ui-BG mt-4">
			<ui-form-group icon="cicon-avatar"><ui-input placeholder="请输入用户名"></ui-input></ui-form-group>
			<ui-form-group required icon="cicon-mobile" type="phone"><ui-input placeholder="请输入手机号"></ui-input></ui-form-group>
			<ui-form-group icon="cicon-lock"><ui-input placeholder="请输入密码" type="password" name="password"></ui-input></ui-form-group>
			<ui-form-group icon="cicon-numcode">
				<ui-input placeholder="请输入验证码"></ui-input>
				<block slot="action"><button class="ui-btn bg-blue-gradient">发送验证码</button></block>
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
			input2: ''
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
