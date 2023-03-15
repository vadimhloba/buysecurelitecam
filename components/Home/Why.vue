<template>
  <div class="home-why" id="why">
		<div class="container">
			<img src="/img/arw-down.png" class="arw-down">
			<h1 class="title-up">Why Secure Lite Cam?</h1>
			<h1 class="title-down">Small In Size - Big On Features</h1>
			<p class="title-desc">Say Goodbye to complicated home security setups. <strong>Secure Lite Cam</strong> is powered by your <br class="hide-mob"> light bulb socket and is fully controlled by your smartphone.</p>
			<div class="pr-features">
				<img src="/img/pr-features.png" class="product">
				<img src="/img/pr-features-mob.png" class="product-mob">
				<ul class="left">
					<li>
						<img src="/img/curcl-icon.png" class="icon">
						<h1>360° Panoramic Camera</h1>
						<p>Enables you to capture an entire room from all angles with just one bulb.</p>
					</li>
					<li>
						<img src="/img/light-icon.png" class="icon">
						<h1>IR Night Vision Camera</h1>
						<p>8 IR LED lights reflect off objects to transmit HQ video even in the darkest hour. </p>
					</li>
					<li>
						<img src="/img/move-icon.png" class="icon">
						<h1>Motion Detection Alert</h1>
						<p>Get real-time notification on your phone anytime there is a motion in the area.</p>
					</li>
				</ul>
				<ul class="right">
					<li>
						<img src="/img/wifi-icon.png" class="icon">
						<h1>WiFi Enabled Smart Bulb</h1>
						<p>Connects directly to your WiFi & is accessible from anywhere in the world! </p>
					</li>
					<li>
						<img src="/img/phone-icon.png" class="icon">
						<h1>24/7 Smartphone Monitoring</h1>
						<p>24/7 monitoring, safely & permanently recorded on SD card & your private feed.</p>
					</li>
					<li>
						<img src="/img/gear-icon.png" class="icon">
						<h1>Plug & Play Installation</h1>
						<p>Just plug into a regular light bulb socket & it's connected. No wire, no batteries!</p>
					</li>
				</ul>
			</div>
			<h1 class="title">Smart Security Solution for Your Home and Work</h1>
			<ul class="features">
				<li>
					<img src="/img/spy-icon.png" class="icon">
					<p>Spy <br class="for-mob"> Camera</p>
				</li>
				<li>
					<img src="/img/hd-icon.png" class="icon">
					<p>1080P <br class="for-mob"> HD</p>
				</li>
				<li>
					<img src="img/rec-icon.png" class="icon">
					<p>24/7 <br class="for-mob"> Recording</p>
				</li>
				<li>
					<img src="/img/micro-icon.png" class="icon">
					<p>2 Way <br class="for-mob"> Audio</p>
				</li>
				<li>
					<img src="/img/sd-icon.png" class="icon">
					<p>Micro SD <br class="for-mob"> Slot</p>
				</li>
				<li>
					<img src="/img/weather-icon.png" class="icon">
					<p>Weather <br class="for-mob"> Proof</p>
				</li>
			</ul>
			<div class="btn-box">
				<BtnOffer buttonText="Unlock Offer & Save 50%"/>
				<div class="btn-text">
					<span>Hurry!</span> Only <span>172 Left</span> At This Price!
				</div>
				<SliderOffer/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HomeWhy'
}
</script>

<style lang="scss" scoped>
.home-why {
	position: relative;
	padding: 40px 0 60px;
	width: 100%;
	text-align: center;
	.pr-features {
		position: relative;
		width: 100%;
		display: block;
		margin: 30px auto 0;
		@media (min-width: 768px) {
			margin: 45px auto 0;
		}
		@media (min-width: 992px) {
			display: flex;
			margin: 80px auto 0;
		}
		.product {
			position: absolute;
			width: 490px;
			left: 50%;
			top: -14px;
			display: none;
			transform: translateX(-50%);
			@media (min-width: 992px) {
				display: block;
			}
			@media (min-width: 1200px) {
				width: 560px;
				top: -17px;
			}
		}
		.product-mob {
			width: 195px;
			display: block;
			margin: 0 auto;
			@media (min-width: 992px) {
				display: none;
			}
		}
		ul {
			list-style: none;
			margin-top: 40px;
			&:last-child {
				margin-top: 0;
				@media (min-width: 768px) {
					margin-top: 40px;
				}
				@media (min-width: 992px) {
					margin-top: 0;
				}
			}
			@media (min-width: 992px) {
				margin-top: 0;
			}
			h1 {
				font-size: 19px;
				line-height: 27px;
				@media (min-width: 1200px) {
					font-size: 21px;
    			line-height: 28px;
				}
			}
			p {
				font-size: 17px;
				line-height: 25px;
				letter-spacing: 0.5px;
				margin-top: 5px;
				@media (min-width: 768px) {
					font-size: 18px;
    			line-height: 27px;
					margin-top: 10px;
				}
				@media (min-width: 1200px) {
					font-size: 19px;
    			line-height: 28px;
				}
			}
			img {
				position: absolute;
				top: 8px;
				max-width: 40px;
				@media (min-width: 768px) {
					top: 0;
					max-width: 100%;
				}
			}
		}
		.left {
			width: 100%;
			text-align: left;
			float: left;
			@media (min-width: 768px) {
				width: 47%;
			}
			@media (min-width: 992px) {
				width: 31%;
			}
			li {
				position: relative;
    		padding: 0 0 0 54px;
				margin-bottom: 20px;
				@media (min-width: 768px) {
					padding: 0 0 0 61px;
					margin-bottom: 30px;
				}
				@media (min-width: 1200px) {
					margin-bottom: 58px;
				}
				img {
					top: 0;
					left: 0;
				}
			}
		}
		.right {
			width: 100%;
			text-align: left;
			margin-left: auto;
			float: right;
			@media (min-width: 768px) {
				width: 47%;
			}
			@media (min-width: 992px) {
				width: 31%;
				float: left;
				text-align: right;
			}
			li {
				position: relative;
    		padding: 0 0 0 54px;
    		margin-bottom: 30px;
				@media (min-width: 768px) {
					padding: 0 0 0 61px;
				}
				@media (min-width: 992px) {
					padding: 0 61px 0 0;
				}
				@media (min-width: 1200px) {
					margin-bottom: 58px;
				}
				img {
					top: 0;
					left: 0;
					@media (min-width: 992px) {
						right: 0;
						left: auto;
					}
				}
			}
		}
	}
	.title {
		display: inline-block;
		position: relative;
		font-weight: 700;
		font-size: 20px;
		line-height: 26px;
		margin-top: 5px;
		max-width: 267px;
		@media (min-width: 768px) {
			max-width: 100%;
			font-size: 21px;
			line-height: 32px;
			margin-top: 30px;
		}
		@media (min-width: 992px) {
			font-size: 25px;
    	line-height: 32px;
		}
		&::before, &::after {
			@media (min-width: 768px) {
				display: inline-block;
				content: '';
				width: 90px;
				height: 1px;
				background: #bdbdbd;
				vertical-align: middle;
			}
			@media (min-width: 992px) {
				width: 100px;
			}
		}
		&::before {
			margin: -2px 15px 0 0;
		}
		&::after {
			margin: -2px 0 0 15px;
		}
	}
	.features {
		display: block;
		list-style: none;
		align-items: center;
		margin-top: 50px;
		width: 100%;
		@media (min-width: 768px) {
			display: flex;
		}
		li {
			display: inline-block;
			justify-content: center;
			text-align: center;
			font-size: 16px;
			line-height: 22px;
			font-weight: 500;
			margin-top: 20px;
			width: calc((100% / 3) - 3px);
			@media (min-width: 768px) {
				display: grid;
				margin-top: 0;
				width: calc(100% / 6);
				font-size: 15px;
				line-height: 20px;
			}
			@media (min-width: 992px) {
				font-size: 18px;
    		line-height: 26px;
			}
			@media (min-width: 1200px) {
				font-size: 20px;
    		line-height: 28px;
			}
			img {
				margin: 0 auto;
				margin-bottom: 10px;
				height: 38px;
				@media (min-width: 768px) {
					height: 51px;
				}
				@media (min-width: 992px) {
					height: 100%;
				}
			}
		}
	}
	.btn-box {
		margin-top: 50px;
		margin-left: auto;
		margin-right: auto;
	}
}
</style>