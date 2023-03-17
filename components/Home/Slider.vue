<template>
  <div class="slider">
		<div class="wrapper">
			<div class="slide-img"><img src="/img/slide-img1.jpg"></div>
			<div class="slide-img"><img src="/img/slide-img2.jpg"></div>
			<div class="slide-img"><img src="/img/slide-img3.jpg"></div>
			<div class="slide-img"><img src="/img/slide-img4.jpg"></div>
			<div class="slide-img"><img src="/img/slide-img5.jpg"></div>
			<div class="slide-img"><img src="/img/slide-img6.jpg"></div>
			<div class="slide-img"><img src="/img/slide-img7.jpg"></div>
			<div class="clone-img"><img src="/img/slide-img1.jpg"></div>
			<div class="clone-img"><img src="/img/slide-img2.jpg"></div>
			<div class="clone-img"><img src="/img/slide-img3.jpg"></div>
			<div class="clone-img"><img src="/img/slide-img4.jpg"></div>
			<div class="clone-img"><img src="/img/slide-img5.jpg"></div>
			<div class="clone-img"><img src="/img/slide-img6.jpg"></div>
			<div class="clone-img"><img src="/img/slide-img7.jpg"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HomeSlider'
}
</script>

<style lang="scss" scoped>
.slider {
	position: relative;
	overflow-y: auto;
	display: block;
	.wrapper {
		display: flex;
		width: 3500px;
		.slide-img, .clone-img {
			width: 268px !important;
			margin: 10px;
		}
	}
}
</style>