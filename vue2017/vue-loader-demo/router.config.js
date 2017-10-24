//专门配置路由规则

//引入模块
import Home from './components/Home.vue'
import News from './components/News.vue'
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'


const routes = [
	{path: '/home',component:Home,
		children: [
			{
				'login':{
					component: Login
				},
				'reg':{
					component: Reg
				}
			}
		]
	},
	{path: '/news',component:News},
	{path: '*',redirect: '/home'}
];