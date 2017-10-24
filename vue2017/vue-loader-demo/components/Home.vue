<template>
	<div>
		<h3>我是主页</h3>
		<div class="content">
			<router-link to="/home/login">用户登录</router-link>
			<router-link to="/home/reg">用户注册</router-link>
		</div>
		<div class="box">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.box{
		margin-top: 20px;
		border: 1px dashed #ccc;
	}
</style>