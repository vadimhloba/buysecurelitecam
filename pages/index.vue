<template>
	<div class="page page__index">
  	<HomeHeader/>
		<HomeBanner/>
		<HomeInstant/>
		<HomeSlider/>
		<HomeSlide/>
		<HomeWhy/>
		<HomeSmart/>
		<HomeSecure/>
		<What image-url="/img/arw-down.png" :show-image="true"/>
		<Faq/>
		<HomeFooter/>
	</div>
</template>

<script scoped>
export default {
	layout: 'empty',
}
</script>