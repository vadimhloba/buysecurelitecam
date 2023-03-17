<template>
  <div class="home-secure">
		<div class="container">
			<img src="/img/arw-down.png" class="arw-down">
			<h1 class="title-up">Instantly Secure Your Home</h1>
			<h1 class="title-down">Without The Expensive Monitoring Systems!</h1>
			<p class="title-desc">Installed like a regular light bulb, our innovative Security  Bulb allows you to monitor your home, <br class="hide-mob"> valuables and loved ones from anywhere in the world.</p>
			<div class="block">
				<div class="col-one left">
					<h1>Monitor Home / Office <br> From Anywhere In The World</h1>
					<p>The WiFi enabled smart light bulb lets you monitor & secure your every corner home or office and get a real-time feed right on your smartphone, no matter where you are.</p>
					<ul>
						<li>
							<img src="/img/wifi-icon.png">
							<p>WiFi Enabled <br> Smart Bulb</p>
						</li>
						<li>
							<img src="/img/live-icon.png">
							<p>Real Time <br> Feed</p>
						</li>
						<li>
							<img src="/img/cost-icon.png">
							<p>One-Time <br> Fixes Cost</p>
						</li>
					</ul>
					<div class="btn-box">
						<BtnOffer buttonText="Unlock Offer & Save 50%"/>
					</div>
				</div>
				<div class="col-two">
					<img src="/img/block-img-one.jpg">
				</div>
			</div>
			<div class="block">
				<div class="col-two">
					<img src="/img/block-img-two.jpg">
				</div>
				<div class="col-one right">
					<h1>Security In Your Palm <br> Free App Access</h1>
					<p>Integrate seamlessly with our FREE mobile app, giving you full control over each of your cameras and microphones. Scroll between cameras, and operate the 2-way intercom system just like a video call, from anywhere in the world.</p>
					<ul>
						<li>
							<img src="/img/brends-icon.png">
							<p>iOS & Android <br> Supported</p>
						</li>
						<li>
							<img src="/img/arw-icon.png">
							<p>One Access For <br> All Your Bulbs</p>
						</li>
						<li>
							<img src="/img/users-icon.png">
							<p>Multi-User <br> Access Enabled</p>
						</li>
					</ul>
					<div class="btn-box">
						<BtnOffer buttonText="Order Now & Save 50%"/>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="col-one left">
					<h1>Motion-Detected Alerts For <br> Real Time Safety & Action</h1>
					<p>When set to motion detection, it sends real-time alerts of any activity in the area via the app & email - letting you take swift action. It works great for communicating with the delivery guy & also prevents break-ins & theft!</p>
					<ul>
						<li>
							<img src="/img/detection-icon.png">
							<p>Motion <br> Detection</p>
						</li>
						<li>
							<img src="/img/alarm-icon.png">
							<p>Automatic <br> Alarm</p>
						</li>
						<li>
							<img src="/img/micro-icon-v2.png">
							<p>2 Way <br> HQ Audio</p>
						</li>
					</ul>
					<div class="btn-box">
						<BtnOffer buttonText="Unlock Offer & Save 50%"/>
					</div>
				</div>
				<div class="col-two">
					<img src="/img/block-img-three.jpg">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HomeSecure'
}
</script>

<style lang="scss" scoped>
.home-secure {
	position: relative;
	padding: 25px 0 0;
	text-align: center;
	@media (min-width: 768px) {
		padding: 40px 0 60px;
	}
	.block {
		position: relative;
		display: grid;
		width: 100%;
		height: auto;
		border-radius: 15px;
		background: #f5fcff;
		align-items: center;
		overflow: hidden;
		margin-top: 40px;
		text-align: left;
		@media (min-width: 768px) {
			display: flex;
		}
		.col-one {
			position: relative;
			width: 100%;
			padding: 20px;
			@media (min-width: 768px) {
				width: 50%;
			}
			@media (min-width: 992px) {
				padding: 35px;
			}
			&.left {
				order: 1;
				@media (min-width: 768px) {
					order: -1;
				}
			}
			&.left:before,
			&.right:before {
				display: none;
				position: absolute;
				content: '';
				z-index: 999;
				border-top: 30px solid transparent;
    		border-bottom: 30px solid transparent;
				@media (min-width: 768px) {
					display: block;
				}
			}
			&.left {
				position: relative;
				&::before {
					top: 27px;
					border-left: 26px solid #f5fcff;
					@media (min-width: 768px) {
						right: -25px;
    				top: 30px;
					}
					@media (min-width: 992px) {
    				top: 60px;
					}
					@media (min-width: 1200px) {
						top: 30px;
					}
				}
			}
			&.right {
				position: relative;
				&::before {
					border-right: 26px solid #f5fcff;
					@media (min-width: 768px) {
						left: -26px;
    				top: 30px;
					}
					@media (min-width: 992px) {
    				top: 60px;
					}
					@media (min-width: 1200px) {
						right: auto;
    				left: -27px;
					}
				}
			}
			h1 {
				font-size: 22px;
    		line-height: 32px;
    		font-weight: 700;
				color: var(--darkblue);
				@media (min-width: 768px) {
					font-size: 20px;
    			line-height: 30px;
				}
				@media (min-width: 992px) {
					font-size: 29px;
    			line-height: 37px;
				}
			}
			p {
				margin-top: 10px;
    		font-size: 16px;
    		line-height: 24px;
    		letter-spacing: 0.5px;
				@media (min-width: 992px) {
					margin-top: 15px;
    			font-size: 17px;
    			line-height: 24px;
				}
				@media (min-width: 1200px) {
					margin-top: 20px;
					font-size: 20px;
    			line-height: 30px;
				}
			}
			ul {
				text-align: center;
				display: flex;
				list-style: none;
				align-items: center;
				margin-top: 15px;
				@media (min-width: 768px) {
					margin-top: 20px;
				}
				@media (min-width: 992px) {
					margin-top: 25px;
				}
				@media (min-width: 1200px) {
					margin-top: 30px;
				}
				li {
					position: relative;
					width: calc(100% / 3);
					&:nth-child(1):after,
					&:nth-child(2):after {
						content: '';
						width: 1px;
						background: #cccdce;
						position: absolute;
						right: 0;
						top: 13px;
						bottom: 13px;
						display: none;
						@media (min-width: 992px) {
							display: block;
						}
						&:last-child {
							content: none;
						}
					}
					p {
						font-weight: 600;
						font-size: 12px;
    				line-height: 18px;
						@media (min-width: 768px) {
							font-size: 14px;
    					line-height: 18px;
						}
						@media (min-width: 992px) {
							font-size: 14px;
    					line-height: 20px;
						}
						@media (min-width: 1200px) {
							font-size: 16px;
    					line-height: 22px;
						}
					}
					img {
						margin: 0 auto;
						margin-bottom: 10px;
						height: 33px;
						@media (min-width: 992px) {
							height: auto;
						}
					}
					.btn {
						width: 470px;
						max-width: 100%;
					}
				}
			}
			.btn-box {
				width: 470px;
				max-width: 100%;
				display: none;
				@media (min-width: 992px) {
					display: block;
				}
			}
		}
		.col-two {
			position: relative;
			width: 100%;
			@media (min-width: 768px) {
				width: 50%;
			}
			img {
				width: 100%;
				height: auto;
				@media (min-width: 768px) {
					height: 376px;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
				@media (min-width: 992px) {
					height: 530px;
				}
				@media (min-width: 1200px) {
					height: 577px;
				}
			}
		}
	}
}
</style>