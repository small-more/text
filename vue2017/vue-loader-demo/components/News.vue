<template>
	<div>
		<h3>我是新闻</h3>
		<ul>
			<li><router-link to="{path:'/news/detail/001'}">第一条新闻</router-link></li>
			<li><router-link to="{path:'/news/detail/002'}">第二条新闻</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style>
</style>