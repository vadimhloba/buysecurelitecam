<template>

  <header class="header">
		<div class="header__topStrip">
			<div class="container">
				<p>Your 50% Discount Code Has Been Applied<span>VIP50</span></p>
			</div>
		</div>
		<div class="header__top-fix-bar" :class="{'bar-fixed': isFixed}">
			<div class="wrapper">
				<div class="container">
					<div class="logo">
						<img src="/img/logo.png">
					</div>
					<div class="box-links">
						<ul>
							<li><nuxt-link to="#banner">Overview</nuxt-link></li>
							<li><nuxt-link to="#why">Features</nuxt-link></li>
							<li><nuxt-link to="#smart">Where To Use</nuxt-link></li>
							<li><nuxt-link to="#what">Reviews</nuxt-link></li>
							<li><nuxt-link to="#faq">FAQ</nuxt-link></li>
						</ul>
						<nuxt-link class="btn" to="checkout">Unlock Offer</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</header>

</template>

<script>
export default {
  name: 'HomeHeader',
	data:()=>({ isFixed:false }),
  mounted(){
		window.addEventListener('scroll', this.handleScroll);
	},
  beforeDestroy(){
		window.removeEventListener('scroll', this.handleScroll);
	},
  methods:{
	  handleScroll(){
	    this.isFixed = window.pageYOffset > 0
	  }
	}
}
</script>

<style lang="scss" scoped>
.header {
	&__topStrip {
		width: 100%;
		padding: 7px 0;
		background: var(--darkblue);
		p {
			text-align: center;
			color: #ffffff;
    	font-size: 12px;
			line-height: 18px;
			letter-spacing: .5px;
    	font-weight: 500;
			margin: 0 auto;
			@media (min-width: 768px) {
				font-size: 16px;
    		line-height: 20px;
				letter-spacing: 1px;
			}
			span {
				color: var(--yellow);
				font-weight: bold;
				border: 2px dashed #ffe614;
    		padding: 0 5px;
				margin-left: 5px;
			}
		}
	}
	&__top-fix-bar {
		width: 100%;
		@media (min-width: 768px) {
			margin-bottom: 70px;
		}
		&.bar-fixed {
			@media (min-width: 768px) {
				.wrapper {
					position: fixed;
    			z-index: 11;
    			top: 0;
    			background: #fff;
    			-webkit-transition: margin .3s ease-out;
    			transition: margin .3s ease-out;
    			margin-top: 0;
    			-webkit-box-shadow: 0 3px 4px 0 rgba(0,0,0,0.1);
    			box-shadow: 0 3px 4px 0 rgba(0,0,0,0.1);
				}
			}
		}
		.wrapper {
			padding: 10px 0;
			width: 100%;
			position: relative;
			-webkit-box-shadow: 0 3px 4px 0 rgba(0,0,0,0.1);
    	box-shadow: 0 3px 4px 0 rgba(0,0,0,0.1);
			@media (min-width: 768px) {
				padding: 0;
    		height: 70px;
    		margin-top: -70px;
    		top: 70px;
			}
		}
		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.logo {
				width: 95px;
				@media (min-width: 768px) {
					width: 130px;
					margin-top: 5px;
				}
			}
			.box-links {
				display: flex;
			}
			ul {
				display: none;
				list-style: none;
				align-items: center;
				margin-top: 10px;
				@media (min-width: 1200px) {
					display: flex;
				}
				li {
					padding: 0 26px;
    			position: relative;
					a {
						font-size: 18px;
    				line-height: 19px;
    				font-weight: 300;
						color: #0f0f0f;
						&:hover {
							color: #00c04e;
						}
					}
					&:last-child:after {
						width: 0;
					}
					&:after {
						content: '';
    				width: 1px;
    				background: #ccc;
    				top: 0px;
    				bottom: 0;
    				position: absolute;
    				right: 0;
					}
				}
			}
			.btn {
				display: flex;
				justify-content: center;
				background: var(--lightgreen);
				width: 125px;
    		height: 36px;
    		line-height: 36px;
    		font-size: 15px;
    		letter-spacing: 0.5px;
    		color: #ffffff;
    		border-radius: 4px;
    		font-weight: 600;
				@media (min-width: 768px) {
					width: 200px;
					height: 50px;
					line-height: 50px;
					margin-left: 15px;
					font-size: 20px;
					margin-top: 10px;
				}
			}
		}
	}
}
</style>