<template>
	<ui-sys title="标题" doc>
		<view class="ui-container">
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">标题组件可以快速构建一个等级标题。包含多种样式。</view>
			<ui-menu class="mt-4 radius border">
				<ui-menu-item icon="cicon-equalizer" title="参数" arrow @click.native="_to('/pages/parameter/parameter?component=ui-navbar')"></ui-menu-item>
			</ui-menu>

			<ui-title title="默认" depth="2" isIcon></ui-title>
			<view class="ui-BG radius px-3 border"><ui-title title="标题"></ui-title></view>		
			<ui-code tag="pre" lang="html" title :content="code1"></ui-code>

			<ui-title title="副标题" depth="2" isIcon></ui-title>
			<view class="ui-BG radius px-3 border"><ui-title title="标题" desc="副标题"></ui-title></view>	
			<ui-code tag="pre" lang="html" title :content="code2"></ui-code>
			
			<ui-title title="显示图标" depth="2" isIcon></ui-title>
			<view class="ui-BG radius px-3 border">
				<ui-title title="基础" desc="basic" isIcon></ui-title>
			</view>	
			<view class="ui-BG radius px-3 border mt-3">
				<ui-title title="自定义图标" desc="icon">
					<block slot="icon"><text class="text-red cicon-whatshot"></text></block>
				</ui-title>
			</view>	
			<ui-code tag="pre" lang="html" title :content="code3"></ui-code>
			<ui-code tag="pre" lang="html" title :content="code31"></ui-code>
			
			<ui-title title="等级" depth="2" isIcon></ui-title>
			<view class="paragraph">不同等级字号、上下边距、默认的图标会不一样。<ui-code>depth="{1~4}"</ui-code></view>
			<view class="ui-BG radius px-3 border">
				<ui-title title="等级一" desc="等级一" isIcon depth="1"></ui-title>
			</view>	
			<view class="ui-BG radius px-3 border mt-3">
				<ui-title title="等级二" desc="等级二" isIcon depth="2"></ui-title>
			</view>	
			<view class="ui-BG radius px-3 border mt-3">
				<ui-title title="等级三" desc="等级三" isIcon depth="3"></ui-title>
			</view>	
			<view class="ui-BG radius px-3 border mt-3">
				<ui-title title="等级四" desc="等级四" isIcon depth="4"></ui-title>
			</view>
			<ui-code tag="pre" lang="html" title :content="code4"></ui-code>


			<ui-title title="特殊标记" depth="2" isIcon></ui-title>
			<view class="paragraph">圆点<ui-code>hasDot="true"</ui-code> 短线<ui-code>hasLine="true"</ui-code></view>
			<view class="ui-BG radius px-3 border"><ui-title title="圆点" desc="dot" hasDot></ui-title></view>
			<view class="ui-BG radius mt-3 px-3 border"><ui-title title="短线" desc="line" hasLine></ui-title></view>
			<ui-title title="内容对齐" depth="2" isIcon></ui-title>
			<view class="paragraph">内容对齐<ui-code>align="{left / center / right}"</ui-code></view>
			<view class="ui-BG radius px-3 border"><ui-title title="基础" desc="basic" align="left"></ui-title></view>
			<view class="ui-BG radius mt-3 px-3 border"><ui-title title="圆点" desc="dot" align="center" hasDot></ui-title></view>
			<view class="ui-BG radius mt-3 px-3 border"><ui-title title="短线" desc="line" align="right" hasLine></ui-title></view>
			
			<ui-title title="特殊模板" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>tpl="stack" hasDot</ui-code></view>
			<view class="ui-BG radius px-3 border"><ui-title title="精选推荐" titleColor="text-blue" descUi="text-cyan" desc="Carefully chosen" tpl="stack" hasDot></ui-title></view>
			<view class="paragraph mt-4"><ui-code>tpl="stack" hasLine</ui-code></view>
			<view class="ui-BG radius px-3 border"><ui-title title="精选推荐" titleColor="text-blue" descUi="text-cyan" desc="Carefully chosen" tpl="stack" hasLine></ui-title></view>
			
			<view class="paragraph mt-4"><ui-code>tpl="center-column" hasDot</ui-code></view>
			<view class="ui-BG radius px-3 border"><ui-title title="精选推荐" titleColor="text-blue" descUi="text-cyan" desc="Carefully chosen" tpl="center-column" hasDot></ui-title></view>
			<view class="ui-BG radius mt-3 px-3 border"><ui-title title="精选推荐" titleColor="text-blue" tpl="center-column" hasDot></ui-title></view>
			
			<view class="paragraph mt-4"><ui-code>tpl="center-column" hasLine</ui-code></view>
			<view class="ui-BG radius mt-3 px-3 border"><ui-title title="猜你喜欢" titleColor="text-red" descUi="text-orange" desc="Guess you like" tpl="center-column" hasLine></ui-title></view>
			<view class="ui-BG radius mt-3 px-3 border"><ui-title title="猜你喜欢" titleColor="text-red" tpl="center-column" hasLine></ui-title></view>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loading: true,			
			code1: '<ui-title title="标题"> </ui-title>',
			code2: '<ui-title title="标题" desc="副标题"> \n</ui-title>',
			code3: '<ui-title title="基础" desc="basic" isIcon>\n</ui-title> \n\n',
			code31: '<ui-title title="自定义图标" desc="icon">  \n  <block slot="icon">   \n    <text class="text-red cicon-whatshot">\n    </text>  \n  </block> \n</ui-title>',
			code4: '<ui-title title="等级一" desc="等级一" isIcon depth="1">\n</ui-title>',
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

<style lang="scss"></style>
