<template>
	<ui-sys title="菜单">
		<view class="ui-container">
			<ui-title depth="2" title="菜单" isIcon></ui-title>

			<ui-menu ui="mt-5 border radius">
				<ui-menu-item title="Github" icon="cicon-github"></ui-menu-item>
				<ui-menu-item arrow title="关于Colorui组件库">
					<block slot="icon">
						<image src="/static/logo.png" mode="aspectFill" class="ui-menu-item-image"></image>
					</block>
				</ui-menu-item>
				<ui-menu-item arrow title="按钮" icon="cicon-ellipse">
					<block slot="action">
						<button class="ui-btn border sm">
							<text class="cicon-cloud-upload"></text>
							上传
						</button>
					</block>
				</ui-menu-item>
				<ui-menu-item arrow title="标签" icon="cicon-tag text-orange">
					<block slot="action">
						<ui-tag info="bg-red" src="https://oss.colorui.org/cos/avatar/lol-avatar/1009.jpg" bg="bg-red"></ui-tag>
						<ui-tag info="bg-red-thin" ui="sm" bg="bg-red-thin"></ui-tag>
					</block>
				</ui-menu-item>
				<ui-menu-item arrow title="头像组" icon="cicon-tag text-orange">
					<block slot="action">
						<ui-avatar-stack ui="mx-3">
							<ui-avatar ui="round" src="https://oss.colorui.org/cos/avatar/lol-avatar/1042.jpg" ></ui-avatar>
							<ui-avatar ui="round" src="https://oss.colorui.org/cos/avatar/lol-avatar/1050.jpg" ></ui-avatar>
							<ui-avatar ui="round" src="https://oss.colorui.org/cos/avatar/lol-avatar/1060.jpg" ></ui-avatar>
						</ui-avatar-stack>
					</block>
				</ui-menu-item>
			</ui-menu>
		</view>
		<ui-menu ui="mt-5">
			<ui-menu-item arrow title="Github" icon="cicon-github"></ui-menu-item>
			<ui-menu-item arrow title="关于Colorui组件库">
				<block slot="icon">
					<image src="/static/logo.png" mode="aspectFill" class="ui-menu-item-image"></image>
				</block>
			</ui-menu-item>
			<ui-menu-item arrow title="按钮" icon="cicon-ellipse">
				<block slot="action">
					<button class="ui-btn border sm">
						<text class="cicon-cloud-upload"></text>
						上传
					</button>
				</block>
			</ui-menu-item>
			<ui-menu-item arrow title="标签" icon="cicon-tag text-orange">
				<block slot="action">
					<ui-tag info="bg-red" src="https://oss.colorui.org/cos/avatar/lol-avatar/1009.jpg" bg="bg-red"></ui-tag>
					<ui-tag info="bg-red-thin" ui="sm" bg="bg-red-thin"></ui-tag>
				</block>
			</ui-menu-item>
			<ui-menu-item arrow title="头像组" icon="cicon-tag text-orange">
				<block slot="action">
					<ui-avatar-stack ui="mx-3" reverse>
						<ui-avatar ui="round" src="https://oss.colorui.org/cos/avatar/lol-avatar/1042.jpg"></ui-avatar>
						<ui-avatar ui="round" src="https://oss.colorui.org/cos/avatar/lol-avatar/1050.jpg"></ui-avatar>
						<ui-avatar ui="round" src="https://oss.colorui.org/cos/avatar/lol-avatar/1060.jpg"></ui-avatar>
					</ui-avatar-stack>
				</block>
			</ui-menu-item>
		</ui-menu>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {};
	},
	onLoad() {
		_this = this;
	},
	onReady() {},
	methods: {}
};
</script>

<style></style>
