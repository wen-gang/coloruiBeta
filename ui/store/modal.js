export default {
	state: {
		 target:'',
		 dialog:{
			title:'',
			content:'',
			showCancel:true,
			cancelText:'取消',
			cancelColor:'',
			confirmText:'确定',
			confirmColor:'',
			success:()=>{},
		 },
		 toast:{
			title:'', 
			icon:'',
			image:'',
			duration:1500,
			mask:false,
			isLoading:false,
			success:()=>{},
		 },
	},
	getters: {
		 
		
	},
	mutations: {
		setTarget(state, data) { 
			state.target = data;
		},
		setDialog(state, data) {
			state.target = 'sys_dialog'; 
			state.dialog = Object.assign(state.dialog,data);
		},
		setToast(state, data) { 
			state.toast = Object.assign(state.toast,data);
		},
	},
	actions: {}
}
