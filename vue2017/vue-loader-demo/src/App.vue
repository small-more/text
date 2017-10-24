<template>
	<div id="app">
		<h3>vue-loader + vue-router</h3>
		
		<div>
			<router-link to="/home">主页</router-link>
			<router-link to="/news">新闻</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	
</script>

<style>
	.app{
		width: 100%;
		height: 50px;
		border: 1px solid red;
	}
	.router-link-active{
		font-size: 22px;
		color: #FF6666;
	}
</style>