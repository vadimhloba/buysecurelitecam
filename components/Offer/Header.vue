<template>
	<div class="offer-header">
		<div class="top-img">
			<img src="/img/black_friday-desk.png" class="desktop-img">
			<img src="img/black_friday-mob.png" class="mob-img">
		</div>
		<div class="top-strip">
			<span>Attention:</span> Your <strong>60%</strong> Discount <b class="discount">+ 5% OFF</b> has been applied!
		</div>
		<header>
			<div class="container">
				<div class="col-one">
					<img src="/img/logo-offer.png" class="logo">
					<div class="desc">
						<span>SECURE</span> <br> <span>CHECKOUT</span>
					</div>
				</div>
				<div class="col-two">
					<div class="call">
						<img src="/img/white-phone.png">
						<span>Questions?</span>
						<span>Call:</span>
						<a href="tel:+380 000 000 000">+1 (833) 228 5045</a>
					</div>
					<div class="bottom-inf">
						<img src="/img/30-days.png">
						<span>30 Days 100% Money Back Guarantee</span>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
export default {
  name: 'OfferHeader',
}
</script>

<style lang="scss" scoped>
.offer-header {
	.top-img {
		.desktop-img {
			display: none;
			width: 100%;
			@media (min-width: 768px) {
				display: block;
			}
		}
		.mob-img {
			display: block;
			width: 100%;
			@media (min-width: 768px) {
				display: none;
			}
		}
	}
	.top-strip {
		background: red;
		padding: 5px 0;
		width: 100%;
    color: #fff;
    font-size: 17px;
		text-align: center;
		span {
			font-weight: 700;
    	color: #fff000;
		}
		.discount {
			display: none;
		}
	}
	header {
		-webkit-box-shadow: 0 6px 9px -5px #000;
    box-shadow: 0 6px 9px -5px #000;
    background-color: #01335e;
    background-image: -webkit-gradient(linear, right top, left top, from(#01335e), color-stop(50%, #265f91), to(#01335e));
    background-image: linear-gradient(270deg, #01335e, #265f91 50%, #01335e);
    position: relative;
    border-top: 10px solid #f1dd39;
    padding: 20px 0;
		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.col-one {
			display: flex;
			.logo {
				display: block;
				max-width: 150px;
    		padding-left: 16px;
    		max-height: 50px;
				@media (min-width: 768px) {
					padding-right: 0.7rem;
					padding-left: 0;
					max-height: 100%;
					max-width: 100%;
				}
			}
			.desc {
				display: none;
				border-left: 1px solid #fff;
				align-self: center;
				color: #fff;
				padding-left: 0.5rem;
				@media (min-width: 768px) {
					display: block;
				}
			}
		}
		.col-two {
			.call {
				position: relative;
				display: flex;
				justify-content: flex-end;
				font-size: 12px;
				img {
					transform: rotate(240deg);
					width: 10px;
    			height: 13px;
					max-width: 100%;
					margin-right: 5px;
					margin-top: 1px;
				}
				span {
					color: #fff;
					&:nth-child(2) {
						display: none;
						@media (min-width: 768px) {
							margin-right: 5px;
							display: block;
						}
					}
				}
				a {
					color: #15c309;
					margin-left: 5px;
				}
			}
			.bottom-inf {
				display: flex;
				align-items: center;
				justify-content: space-between;
				img {
					width: 30px;
					margin-left: 30px;
					margin-right: 8px;
					@media (min-width: 768px) {
						width: 50px;
					}
				}
				span {
					font-size: 10px;
    			color: #fff;
					width: 101px;
					@media (min-width: 768px) {
						font-size: 12px;
						width: 121px;
					}
				}
			}
		}
	}
}
</style>