export default {
	data() {
		return {
			
		};
	},

	props: {
		bg: {
			type: String,
			default: 'box-bg'
		},
		text: {
			type: String,
			default: 'text-c'
		},
		curbg: {
			type: String,
			default: 'bg-main-a'
		},
		curtext: {
			type: String,
			default: 'text-main-a'
		}
	},
	 
	created() {
		if (this._uid != this.$root._uid) {
			this._onShow();
		}
		if (this.$parent) {
			this.sys_layer = (this.$parent.sys_layer ? this.$parent.sys_layer : 0) + 1
		}

	},
	 
}
