<template>
  <div class="home-slide">
		<ul>
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
	height: 51px;
	overflow-y: auto;
	background: var(--darkblue);
	margin-top: 10px;
	ul {
		text-align: left;
		padding: 0;
		margin: 0;
		max-width: 100%;
		width: 5076px;
		display: flex;
		align-items: center;
		list-style: none;
		li {
			position: relative;
			padding: 12px 40px 0;
			font-size: 18px;
			font-weight: 400;
			color: var(--white);
			white-space: nowrap;
			&:after {
				content: '';
				width: 1px;
				background: var(--white);
				top: 15px;
				bottom: 4px;
				position: absolute;
				right: 0;
			}
		}
	}
}
</style>