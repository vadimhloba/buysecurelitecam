<template>
  <div class="home-footer">
		<div class="btn-mob" :class="{ 'btn-fixed': isFixed }">
			<BtnOffer buttonText="Unlock Offer & Save 50%"/>
		</div>
		<div class="container">
			<img src="/img/logo.png">
			<ul>
				<li><nuxt-link to="reference" target="_blank">Reference</nuxt-link></li>
				<li>|</li>
				<li><nuxt-link to="manual" target="_blank">Owner's Manual</nuxt-link></li>
				<li>|</li>
				<li><nuxt-link to="faq" target="_blank">FAQs</nuxt-link></li>
				<li>|</li>
				<li><nuxt-link to="contact" target="_blank">Contact Us</nuxt-link></li>
				<li>|</li>
				<li><nuxt-link to="tam" target="_blank">Terms & Conditions</nuxt-link></li>
				<li>|</li>
				<li><nuxt-link to="privacy" target="_blank">Privacy Policy</nuxt-link></li>
				<li>|</li>
				<li><nuxt-link to="returns" target="_blank">Returns</nuxt-link></li>
				<li>|</li>
				<li><nuxt-link to="shipping" target="_blank">Shipping</nuxt-link></li>
				<li>|</li>
				<li><nuxt-link to="waranty" target="_blank">Waranty</nuxt-link></li>
			</ul>
			<p>© 2023 Secure Lite Cam, All rights reserved.</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HomeFooter',
	data:() => ({ isFixed: false }),
  mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
  beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},
  methods: {
	  handleScroll() {
	    this.isFixed = window.pageYOffset > 0
	  }
	}
}
</script>

<style lang="scss" scoped>
.home-footer {
	position: relative;
	text-align: center;
	color: #333333;
	display: block;
	@media (min-width: 768px) {
		padding: 50px 0;
	}
	img {
		margin: 25px auto 13px;
		max-width: 90px;
		@media (min-width: 768px) {
			margin: 0 auto 15px;
			max-width: 100%;
		}
	}
	ul {
		width: 100%;
		li {
			display: inline-block;
			a {
				color: #333333;
			}
		}
	}
	p {
		font-size: 16px;
    line-height: 26px;
    margin-top: 7px;
	}
	.btn-mob {
		background: #2677bc;
    padding: 9px 10px 9px;
    transition: bottom 1s;
    display: block;
		&.btn-fixed {
			position: fixed;
			width: 100vw;
			z-index: 99;
			bottom: 0%;
    	left: auto;
			@media (min-width: 768px) {
				display: none;
			}
		}
	}
}
</style>