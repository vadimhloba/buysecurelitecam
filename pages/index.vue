<template>
	<div class="page page__index">
		<!-- <div class="title">
			<div class="title__clamp">Lorem ipsum dolor, sit amet.</div>
			<div class="title__old">Lorem ipsum dolor, sit amet.</div>
		</div>
		<div class="box__wrap">
			<div class="box">
				<div class="box__title">Lorem ipsum dolor sit amet consectetur.</div>
			</div>
			<div class="box">
				<div class="box__old">Lorem ipsum dolor sit amet consectetur.</div>
			</div>
		</div> -->
  	<HomeHeader/>
		<HomeBanner/>
		<HomeInstant/>
		<HomeSlider/>
		<HomeSlide/>
		<HomeWhy/>
		<HomeSmart/>
		<HomeSecure/>
		<HomeFaq/>
		<HomeFooter/>
	</div>
</template>

<script>
export default {
  mounted(){
  	console.log('Home page');
  }
}
</script>