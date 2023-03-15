<template>
  <div class="home-slide">
		<ul class="marque">
			<li>Limited Time Discount</li>
			<li>Exclusive Website Offer</li>
			<li>Fast Shipping & Delivery</li>
			<li>Money Back Guarantee</li>
			<li>24/7 Customer Support</li>
			<li>Limited Time Discount</li>
			<li>Exclusive Website Offer</li>
			<li>Exclusive Website Offer</li>
			<li>Money Back Guarantee</li>
			<li>24/7 Customer Support</li>
			<li class="clone">Limited Time Discount</li>
			<li class="clone">Exclusive Website Offer</li>
			<li class="clone">Fast Shipping & Delivery</li>
			<li class="clone">Money Back Guarantee</li>
			<li class="clone">24/7 Customer Support</li>
			<li class="clone">Limited Time Discount</li>
			<li class="clone">Exclusive Website Offer</li>
			<li class="clone">Exclusive Website Offer</li>
			<li class="clone">Money Back Guarantee</li>
			<li class="clone">24/7 Customer Support</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'HomeSlide'
}
</script>

<style lang="scss" scoped>
.home-slide {
	position: relative;
	width: 100%;
	height: 40px;
	overflow: hidden;
	background: var(--darkblue);
	margin-top: 10px;
	@media (min-width: 768px) {
		height: 51px;
	}
	ul {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		text-align: left;
		display: flex;
		&:hover {
			animation-play-state: paused;
		}
		li {
			position: relative;
			font-weight: 400;
			color: var(--white);
			white-space: nowrap;
			padding: 7px 30px 0;
			font-size: 16px;
			line-height: 26px;
			@media (min-width: 768px) {
				padding: 12px 40px 0;
				font-size: 18px;
				line-height: 30px;
			}
			&:after {
				content: '';
				width: 1px;
				background: var(--white);
				top: 8px;
				bottom: 8px;
				position: absolute;
				right: 0;
				@media (min-width: 768px) {
					top: 14px;
					bottom: 14px;
				}
			}
		}
	}
}
</style>