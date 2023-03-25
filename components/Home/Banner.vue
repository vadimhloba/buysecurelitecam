<template>
  <div class="home-banner" id="banner">
		<div class="container">
			<Info :showDiv="true"/>
			<img class="pr-cam" src="/img/pr-cam.png">
			<img class="pr-can" src="/img/pr-can.png">
		</div>
	</div>
</template>

<script>
export default {
  name: 'HomeBanner'
}
</script>

<style lang="scss" scoped>
.home-banner {
	padding: 25px 0 30px;
  height: auto;
  background: #f6fbff;

	@media (min-width: 768px) {
		width: 100%;
		background: url(/img/banner.jpg) 42% top;
    background-size: cover;
		overflow: hidden;
    height: 700px;
	}
	@media (min-width: 992px) {
		background: url(/img/banner.jpg) no-repeat center top;
		height: 765px;
	}
	.pr-cam {
		display: none;
		@media (min-width: 768px) {
			display: flex;
			position: absolute;
			top: 80px;
    	right: 55px;
    	width: 200px;
		}
		@media (min-width: 992px) {
			top: 41px;
			right: 130px;
    	width: 300px;
		}
		@media (min-width: 1200px) {
    	right: 238px;
		}
	}
	.pr-can {
		display: none;
		@media (min-width: 768px) {
			display: flex;
			position: absolute;
			right: -8px;
    	width: 140px;
    	top: 120px;
		}
		@media (min-width: 992px) {
			right: -15px;
    	width: 200px;
		}
		@media (min-width: 1200px) {
			top: 104px;
    	right: 10px;
		}
	}
}
</style>