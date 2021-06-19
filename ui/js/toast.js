 import store from '@/ui/store'
 const toast = (content)=>{
		store.commit('setDialog', content); 
	}

export default toast