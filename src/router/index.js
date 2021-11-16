import Vue from 'vue'
import Router from 'vue-router'

import All from '../components/All'
import Active from '../components/Active'
import Completed from '../components/Completed'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/all',
			name: 'all',
			component: All
		},
		{
			path: '/active',
			component: Active
		},
		{
			path: '/completed',
			component: Completed
		},
		{
			path: '*',
			component: All
		}
	],
	mode: 'history'
})