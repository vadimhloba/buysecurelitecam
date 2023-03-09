<template>

  <header class="header">
		<div class="header__topStrip">
			<div class="container">
				<p>Your 50% Discount Code Has Been Applied<span>VIP50</span></p>
			</div>
		</div>
		<div class="header__top-fix-bar">
			<div class="container">
				<div class="logo">
					<img src="/img/logo.png">
				</div>
				<div class="box-links">
					<ul>
						<li><nuxt-link to="#">Overview</nuxt-link></li>
						<li><nuxt-link to="#">Features</nuxt-link></li>
						<li><nuxt-link to="#">Where To Use</nuxt-link></li>
						<li><nuxt-link to="#">Reviews</nuxt-link></li>
						<li><nuxt-link to="#">FAQ</nuxt-link></li>
					</ul>
					<nuxt-link class="btn" to="checkout">Unlock Offer</nuxt-link>
				</div>
			</div>
		</div>
	</header>

</template>

<script>
export default {
  name: 'HomeHeader'
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
		position: relative;
		width: 100%;
		padding: 5px 0;
		box-shadow: 0 3px 4px 0 rgb(0 0 0 / 10%);
		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.logo {
				width: 95px;
				@media (min-width: 768px) {
					width: 130px;
				}
			}
			.box-links {
				display: flex;
			}
			ul {
				display: none;
				list-style: none;
				align-items: center;
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
				}
			}
		}
	}
}
</style>