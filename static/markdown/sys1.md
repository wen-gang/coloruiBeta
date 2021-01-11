
## 设置多主题
ColorUI支持多主题方案,如果你项目中不需要多主题,你可以在`coloui/scss/_var.scss` 中设置 `$enable-theme` 来关闭多主题的编译,以减少冗余代码。

 ```css
$enable-theme:     false !default; 
 ```
## 使用之前
 使用多主题必须使用`<cu-sys></cu-sys>` 组件来包裹你的页面代码,这样样式才能生效。
 ```html
 <template>
	<cu-sys>
		<!--  你的页面代码-->
	</cu-sys>
 </template>
 ```
 默认主题是`theme-light`,colorui自带有`theme-light`雅白,`theme-dark`酷黑,`theme-lightblue`浅蓝,`theme-darkblue`深蓝,`theme-auto`自动。
 
 酷黑和深蓝都是深色主题,自动主题是根据 css`@media (prefers-color-scheme: xx)` 来判断当前环境是深色还是浅色模式,以使用`theme-light`或者`theme-dark`主题。
 
 如果你想在深色模式下使用其他主题,你可以在`coloui/scss/theme/ _style.scss` 中设置
 ```css
 @media (prefers-color-scheme: dark) {
	.theme-auto {
		@include theme-XXX;
	}
 }
 ```
## 切换主题
切换主题是`Vuex`+`Storage`的方案。 `this.sys_theme` 可以得到当前主题的名称。 `this.sys_mode` 可以得到当前主题的深浅（light/dark)。
切换主题的方法：
```js
this.$store.commit('setTheme', '主题名称');";
```
## 添加一个自定义主题
1.在`coloui/scss/theme/` 目录下复制一个主题文件,并重命名,如果是浅色主题,名称里请包含`light`字段,如果是深色主题,名称里请包含`dark`字段,如:`_lightred.scss`.这将影响到状态栏的配色以及深浅相关的参数获取
2.更改文件`_lightred.scss`内的名称以及相关配置：
```
@mixin theme-lightred {
	···
} 
```
3.在`coloui/scss/theme/ _style.scss` 中添加：
```
@if $enable-theme {
	.theme-lightred {
		@include theme-lightred;
	}
	···
}
```
## 主题配色

多主题是采用css`var()`来定义颜色的。你可以在内联样式,和页面配置的样式中使用`var()`。
```css
.my-primary{
	color:var(--main-a);
}
```
```html
<view style="color:var(--main-a);"></view>
```
不同的主题对应的变量颜色也不同,不同的变量控制着不同的层级颜色,按照你项目的需求来使用这些变量：
```
--main-a:      主色
--main-b:      备选色 
--main-c:      备选色 
--main-d:      备选色 
--main-e:      主色的识别色
	
--page-bg:       页面背景色
--page-bg-sub:   页面背景备选色
--box-bg:        内容背景色
--box-bg-sub:    内容背景备选色 
--box-bg:       菜单背景色
--box-bg-sub:   菜单背景备选色

--border-color:  定义边框颜色。

--text-{x}:      定义文字层级颜色。

// 代码颜色
--code-color:     定义代码文字颜色。
--code-bg-color:  定义行内代码背景颜色。
--pre-bg-color:   定义块级代码背景颜色。

```
## 相关类名
```css
.main-{a,b,c,d,e}-bg{
  对应主色层级的背景色
}
.main-{a,b,c,d,e}-text{
  对应主色层级的文字色
}
.text-{a,b,c,d,e}{
  对应文字层级的文字色
}
.main-{a,b,c,d}-box{
  对应主色层级的背景色
  对应主色e层级的文字色
}
.page-bg,.box-bg,.box-bg,.page-bg-sub,.box-bg-sub,.box-bg-sub{
  对应的背景色
}
```
## 参考

