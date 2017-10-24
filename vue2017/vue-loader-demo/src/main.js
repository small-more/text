import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Login from '../components/Login.vue'
import Reg from '../components/Reg.vue'
import Detail from '../components/Detail.vue'

Vue.use(VueRouter);

const routes = [
	{	path: '/home',
		component: Home,
		children: [
			{path:'login',component:Login},
			{path:'reg',component:Reg}
		]
	},
	{
		path: '/news',
		component: News,
		children: [
			{path:'/detail/:id',component: Detail}
		]
	},
	{path: '*',redirect: '/home'}
];

//配置路由1
const router = new VueRouter({
	routes: routes
});

export default router;

new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
})
