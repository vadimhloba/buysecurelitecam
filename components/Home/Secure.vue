<template>
  <div class="home-secure">
		<div class="container">
			<img src="/img/arw-down.png" class="arw-down">
			<h1 class="title-up">Instantly Secure Your Home</h1>
			<h1 class="title-down">Without The Expensive Monitoring Systems!</h1>
			<p class="title-desc">Installed like a regular light bulb, our innovative Security  Bulb allows you to monitor your home, <br> valuables and loved ones from anywhere in the world.</p>
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
	padding: 40px 0 60px;
	text-align: center;
	.arw-down {
		display: block;
		margin: 0 auto 15px;
	}
	.block {
		position: relative;
		display: flex;
		width: 100%;
		border-radius: 15px;
		background: #f5fcff;
		align-items: center;
		overflow: hidden;
		margin-top: 40px;
		text-align: left;
		.col-one {
			position: relative;
			width: 50%;
			padding: 35px;
			&.left:before,
			&.right:before {
				position: absolute;
				content: '';
				z-index: 999;
				border-top: 30px solid transparent;
    		border-bottom: 30px solid transparent;
			}
			&.left {
				position: relative;
				&::before {
					right: -26px;
					top: 30px;
					border-left: 26px solid #f5fcff;
				}
			}
			&.right {
				position: relative;
				&::before {
					right: auto;
    			left: -26px;
					border-right: 26px solid #f5fcff;
				}
			}
			h1 {
				font-size: 29px;
    		line-height: 37px;
    		font-weight: 700;
				color: var(--darkblue);
			}
			p {
				margin-top: 20px;
    		font-size: 18px;
				line-height: 28px;
    		letter-spacing: 0.5px;
			}
			ul {
				text-align: center;
				display: flex;
				margin-top: 30px;
				list-style: none;
				align-items: center;
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
						&:last-child {
							content: none;
						}
					}
					img {
						margin: 0 auto;
						margin-bottom: 10px;
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
			}
		}
		.col-two {
			width: 50%;
		}
	}
}
</style>