import Vue from 'vue'
 /**
  * getUuid 生成唯一id
  */
 function getUuid() {
 	return Number(Math.random().toString().substr(3, 3) + Date.now() * Math.random()).toString(36)
 }

 /**
  * getColor 随机生成库内颜色名
  */
 function getColor() {
 	let colorArr = ['yellow', 'orange', 'red', 'pink', 'mauve', 'purple', 'blue', 'cyan', 'green', 'olive', 'grey',
 		'brown'
 	];
 	return colorArr[Math.floor(Math.random() * colorArr.length)]
 }

 /**
  * showTips 显示系统提示
  */
 function showTips(msg) {
 	uni.showToast({
 		title: msg,
 		icon: 'none'
 	})
 }

 /**
  * copyText 多端复制文本
  */
 function copyText(text) {
 	// #ifndef H5
 	uni.setClipboardData({
 		data: text,
 		success: function() {
 			showTips('复制成功！')
 		},
 		fail: function() {
 			showTips('复制失败！')
 		},
 	});
 	// #endif
 	// #ifdef H5
 	var createInput = document.createElement('textarea');
 	createInput.value = text;
 	document.body.appendChild(createInput);
 	createInput.select();
 	document.execCommand('Copy');
 	createInput.className = 'createInput';
 	createInput.style.display = 'none';
 	showTips('复制成功！')
 	// #endif
 }
 const util = {
 	getUuid,
 	getColor,
 	showTips,
 	copyText
 }
 export default util

 Vue.prototype.$util = util;
