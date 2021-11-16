import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		/*
		*	by default (only for example)
		*/
		checkList: [
	      {
	        task: "TO do",
	        isCompleted: false
	      },
	      {
	        task: "TO do #2",
	        isCompleted: true
	      },
	      {
	        task: "TO do #3",
	        isCompleted: false
	      }
	    ],
	    modal: false
	},
	/*
	*	I don't know why, but it doesn't work
	*	I made it by another way.
	*	
	*/
	watch: {
		checkList: { 
			handler (old, payload) {
				console.log('handler watch:', old, payload)
				this.$store.commit('setLocalStorage', this.$store.getters.checkList)
			},
			deep: true
		}
	},
	mutations: {
		setCheckList (state, payload) {	
			state.checkList = payload
		},
		setLocalStorage (state, payload) {
			localStorage.setItem('list', JSON.stringify(payload))
		},
		createTask (state, payload) {
			state.checkList.push(payload)
		},
		setModal (state, payload) {
			state.modal = payload
		}
	},
	getters: {
		checkList (state) {
			return state.checkList
		},
		checkListActive (state) {
			return state.checkList.filter(task => { return !task.isCompleted })
		},
		checkListCompeted (state) {
			return state.checkList.filter(task => { return task.isCompleted })
		},
		modal (state) {
			return state.modal
		}
	}
})