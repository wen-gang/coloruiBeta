import store from './store.js'
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


function genSessionId(length) {
	var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
	if (!"0" [0]) { //fix IE67
		str = str.split("");
	}
	for (var i = 0, id = "", len = str.length; i < length; i++) {
		id += str[Math.floor(Math.random() * len)];
	}
	return id;
}
/**
 * request 常用请求
 */
function request(url, data = {}, method = "GET") {
	return new Promise(function(resolve, reject) {
		let header = {
			// "Content-Type": "application/x-www-form-urlencoded",
			// 'X-Requested-With': "XMLHttpRequest"
		};

		// if (uni.getStorageSync('sessionid')) {
		// 	header.Cookie = 'PHPSESSID=' + uni.getStorageSync('sessionid');
		// } else {
		// 	let sessionid = genSessionId(24);
		// 	header.Cookie = 'PHPSESSID=' + sessionid;
		// 	uni.setStorageSync('sessionid', sessionid);
		// }

		uni.request({
			url: url,
			data: data,
			method: method,
			header: header,
			success(res) {
				if (res.statusCode == 200) {
					resolve(res.data);
				} else if (res.statusCode == 401 || res.statusCode == 500) {
					if (uni.getStorageSync('sessionid')) {
						// 清除登录相关内容
						uni.removeStorageSync('sessionid');
						uni.reLaunch({
							url: '/pages/login/login'
						})
						uni.showModal({
							content: res.data.msg,
							success: function(res) {}
						});
					}
					store.commit('login', false);
				} else {
					uni.showToast({
						title: res.data.message,
						icon: 'none'
					})
				}
			},
			fail(err) {
				console.log(err)
				reject(err)
			}
		})
	});
}

/**
 * getUuid 生成唯一id
 */
function getUuid() {
	return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36)
}

/**
 * setColor 根据字符串判断颜色类名和css色值
 */
function setColor(val, isClass) {
	if (val.indexOf('bg') != -1 || val.indexOf('box') != -1 || val.indexOf('text') != -1) {
		return isClass ? val : ''
	} else {
		return isClass ? '' : val
	}
}

/**
 * isEmpty 判断是否为空
 */
function isEmpty(val, text = '') {
	let empty = false;
	// null or undefined
	if (val == null) empty = true;

	if (typeof val === 'boolean') empty = false;

	if (typeof val === 'number') empty = !val;

	if (val instanceof Error) empty = val.message === '';

	switch (Object.prototype.toString.call(val)) {
		// String or Array
		case '[object String]':
		case '[object Array]':
			empty = !val.length;

			// Map or Set or File
		case '[object File]':
		case '[object Map]':
		case '[object Set]':
			{
				empty = !val.size;
			}
			// Plain Object
		case '[object Object]':
			{
				empty = !Object.keys(val).length;
			}
	}
	if (text != '' && empty) {
		showTips(text + '不能为空')
	}
	return empty;
}

/**
 * formatTime 格式化时间戳
 */
function formatTime(date, fmt) {
	var o = {
		"M+": date.getMonth() + 1, //月份 
		"d+": date.getDate(), //日 
		"h+": date.getHours(), //小时 
		"m+": date.getMinutes(), //分 
		"s+": date.getSeconds(), //秒 
		"q+": Math.floor((date.getMonth() + 3) / 3), //季度 
		"S": date.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[
				k])
			.substr(("" + o[k]).length)));
	return fmt;
}

/**
 * setStatusStyle 跨端设置状态栏样式
 */
function setStatusStyle(status) {
	// console.log('setStatusStyle', status)
	if (status == 'light') {
		// #ifndef MP-ALIPAY
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#000000',
			animation: {
				duration: 200,
				timingFunc: 'easeIn'
			}
		});
		// #endif

		// #ifdef APP-PLUS
		plus.navigator.setStatusBarStyle('light');
		// #endif

		// #ifdef MP-ALIPAY
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#000000'
		});
		// #endif
	} else {
		// #ifndef MP-ALIPAY
		uni.setNavigationBarColor({
			frontColor: '#000000',
			backgroundColor: '#ffffff',
			animation: {
				duration: 200,
				timingFunc: 'easeIn'
			}
		});
		// #endif

		// #ifdef APP-PLUS
		plus.navigator.setStatusBarStyle('dark');
		// #endif

		// #ifdef MP-ALIPAY
		uni.setNavigationBarColor({
			frontColor: '#000000'
			backgroundColor: '#ffffff'
		});
		// #endif
	}
}

module.exports = {
	showTips,
	copyText,
	request,
	getUuid,
	setColor,
	isEmpty,
	formatTime,
	setStatusStyle
}
