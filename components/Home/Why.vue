<template>
  <div class="home-why" id="why">
		<div class="container">
			<img src="/img/arw-down.png" class="arw-down">
			<h1 class="title-up">Why Secure Lite Cam?</h1>
			<h1 class="title-down">Small In Size - Big On Features</h1>
			<p class="title-desc">Say Goodbye to complicated home security setups. <strong>Secure Lite Cam</strong> is powered by your <br> light bulb socket and is fully controlled by your smartphone.</p>
			<div class="pr-features">
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
				<img src="/img/pr-features.png" class="product">
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
					<p>Spy Camera</p>
				</li>
				<li>
					<img src="/img/hd-icon.png" class="icon">
					<p>1080P HD</p>
				</li>
				<li>
					<img src="img/rec-icon.png" class="icon">
					<p>24/7 Recording</p>
				</li>
				<li>
					<img src="/img/micro-icon.png" class="icon">
					<p>2 Way Audio</p>
				</li>
				<li>
					<img src="/img/sd-icon.png" class="icon">
					<p>Micro SD Slot</p>
				</li>
				<li>
					<img src="/img/weather-icon.png" class="icon">
					<p>Weather Proof</p>
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
		display: flex;
		margin: 80px auto 0;
		.product {
			position: absolute;
			width: 560px;
			left: 50%;
			top: -17px;
			transform: translateX(-50%);
		}
		ul {
			list-style: none;
			h1 {
				font-size: 21px;
    		line-height: 28px;
			}
			p {
				font-size: 19px;
    		line-height: 28px;
				letter-spacing: 0.5px;
				margin-top: 10px;
			}
			img {
				position: absolute;
			}
		}
		.left {
			width: 31%;
			text-align: left;
			li {
				position: relative;
    		padding: 0 0 0 61px;
    		margin: 0 0 58px 0;
				img {
					top: 0;
					left: 0;
				}
			}
		}
		.right {
			width: 31%;
			text-align: right;
			margin-left: auto;
			li {
				position: relative;
    		padding: 0 61px 0 0;
    		margin: 0 0 58px 0;
				img {
					top: 0;
					right: 0;
				}
			}
		}
	}
	.title {
		display: inline-block;
		position: relative;
		font-size: 25px;
    line-height: 32px;
		font-weight: 700;
		margin-top: 30px;
		&::before, &::after {
			display: inline-block;
			content: '';
			width: 100px;
			height: 1px;
			background: #bdbdbd;
			vertical-align: middle;
		}
		&::before {
			margin: -2px 15px 0 0;
		}
		&::after {
			margin: -2px 0 0 15px;
		}
	}
	.features {
		display: flex;
		list-style: none;
		align-items: center;
		margin-top: 50px;
		li {
			display: grid;
			justify-content: center;
			text-align: center;
			width: calc(100% / 6);
			font-size: 20px;
    	line-height: 28px;
			font-weight: 500;
			img {
				margin: 0 auto;
				margin-bottom: 10px;
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