<template>
	<ui-sys bg="ui-BG" :footer="false">
		<ui-navbar back></ui-navbar>
		<view class="p-5">
			<view class="text-xxl"><view class="text-bold py-2">欢迎登录Colorui组件库</view></view>
			<view class="mt-5"><ui-tab v-model="tabCur" :tab="['帐号户登录', '验证码登录']" tpl="long" dot="radius" textCur="text-lg" text="text-lg"></ui-tab></view>
			<block v-if="tabCur == 0">
				<ui-form ui="ui-BG mt-4">
					<ui-form-group icon="cicon-avatar text-gray"><ui-input v-model="account.phone" placeholder="帐号户名/手机号" ></ui-input></ui-form-group>
					<ui-form-group icon="cicon-safe-check text-gray"><ui-input type="password" v-model="account.password" placeholder="帐号户密码" ></ui-input></ui-form-group>
				</ui-form>
			</block>
			<block v-if="tabCur == 1">
				<ui-form ui="ui-BG mt-4">
					<ui-form-group icon="cicon-mobile text-gray"><ui-input v-model="login.phone" placeholder="手机号" ></ui-input></ui-form-group>
					<ui-form-group icon="cicon-numcode text-gray">
						<ui-input v-model="login.code" placeholder="验证码"></ui-input>
						<block slot="action"><button class="ui-btn bg-blue-gradient">发送验证码</button></block>
					</ui-form-group>
				</ui-form>
			</block>
			<view class="my-3">我已阅读并接受</view>
			<view class="mt-5">
				<button class="ui-btn bg-blue-gradient radius lg block shadow-blue" @tap="loginSubmit" :disabled="isLoading">
					登录
					<text class="cicon-loading1 icon-spin ml-3" v-if="isLoading"></text>
				</button>
			</view>
			<view class="flex-bar mt-4">
				<view class="p-3">忘记密码？</view>
				<view class="p-3">
					立即注册
					<text class="cicon-round-angle-o ml-3"></text>
				</view>
			</view>
			<ui-fixed bottom>
				<view class="p-5">
					<ui-title title="其他登录方式" align="center" hasLine tpl="center-column"></ui-title>
					<button class="ui-btn bg-green-gradient radius lg block shadow-green" @tap="wxloginSubmit" :disabled="isLoading">
						<text class="cicon-weixin icon-xl mr-3"></text>
						微信一键登录
						<text class="cicon-loading1 icon-spin ml-3" v-if="wxisLoading"></text>
					</button>
				</view>
			</ui-fixed>
		</view>
	</ui-sys>
</template>

<script>
var _this = '';
export default {
	data() {
		return {
			appstatus: {
				app_status: 1,
				app_reg: true
			},
			isShowPassWord: true,
			tabCur: 0,
			code: '',
			account: {
				phone: '',
				password: ''
			},
			login: {
				phone: '',
				code: ''
			},
			isLoading: false,
			wxisLoading: false,
			loginpage: true
		};
	},
	onLoad(e) {
		_this = this;
		if (e.phone) {
			let account = _this.account;
			account.phone = e.phone;
			account.password = e.password;
		}
	},
	methods: {
		togglePassword() {
			this.isShowPassWord = !this.isShowPassWord;
		},
		wxloginSubmit() {
			_this.wxisLoading = true;
			_this.$store.commit('setLogin', true);
			setTimeout(() => {
				uni.switchTab({
					url: '/pages/home/home'
				});
			}, 300);
		},
		loginSubmit() {
			_this.isLoading = true;
			_this.$store.commit('setLogin', true);
			setTimeout(() => {
				uni.switchTab({
					url: '/pages/home/home'
				});
			}, 300);
		},
		loginSubmit() {
			let data = {};
			if (this.$util.isEmpty(this.account.phone, '登录帐号号/手机号')) {
				return false;
			}
			if (this.$util.isEmpty(this.account.password, '登录密码')) {
				return false;
			}
			data = _this.account;
			_this.isLoading = true;

			_this.$util
				.request('init/login', data, 'POST')
				.then(res => {
					_this.$util.showTips(res.msg);
					if (res.code == 200) {
						uni.setStorageSync('token', res.data.token);
						this.upUserInfo();
					}
					_this.isLoading = false;
				})
				.catch(err => {
					_this.$util.showTips('系统错误,请稍后重试');
					_this.isLoading = false;
				});
		},
		upUserInfo() {
			_this.$util.request('user/userInfo').then(res => {
				if (res.code == 200) {
					uni.setStorageSync('uinfo', res.data);
					_this.$store.commit('upUserInfo', res.data);
					_this.$store.commit('login', true);
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/index/index'
						});
					}, 300);
				} else {
					_this.$util.showTips(res.msg);
					_this.$store.commit('login', false);
				}
			});
		}
	}
};
</script>

<style lang="scss"></style>
