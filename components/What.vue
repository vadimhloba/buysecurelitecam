<template>
  <div class="home-what" id="what">
		<div class="container">
			<img v-if="showImage" :src="imageUrl" class="arw-down">
			<h1 class="title-up">See What our customers think about</h1>
			<h1 class="title-down">Secure Lite Cam</h1>
			<p class="title-desc">The <strong>Secure Lite Cam</strong> has started to develop a cult following, and with over 5,000 5-star reviews, <br class="hide-mob"> it makes sense. Here's what customers are saying about it:</p>
			<div class="features">
				<div class="block">
					<img src="/img/block-img1.jpg">
					<h1>Easy to set up. Good quality picture</h1>
					<img class="stars" src="/img/stars.png">
					<p class="desc">Easy to set up. Good quality picture. Can preset camera views. Does a good job tracking a person and even our little dog. I recommend this product. Responsive technical support. We reached out to tech support on a Sunday evening and they got back to us right away.</p>
					<p class="customer"><span>Joe Nemes</span><img src="/img/marker.png"> Verified Customer</p>
				</div>
				<div class="block">
					<img src="/img/block-img2.jpg">
					<h1>Very convenient and easy to set up</h1>
					<img class="stars" src="/img/stars.png">
					<p class="desc">I like this camera very much. Very convenient and easy to set up. The App for the set up is easy to use. I did buy a mini SD Card which are cheap to record video and photos. If looking for wireless camera for easy installation, this is the one</p>
					<p class="customer"><span>Josh Styles</span><img src="/img/marker.png"> Verified Customer</p>
				</div>
				<div class="block">
					<img src="/img/block-img3.jpg">
					<h1>Literally almost plug and play!</h1>
					<img class="stars" src="/img/stars.png">
					<p class="desc">Literally almost plug and play! Get the app, make sure the power is on and boom, camera action. Need the SD card to record video, but AI recognizes humans and will take a photo even without SD card…see third photo.</p>
					<p class="customer"><span>Maria Vargas</span><img src="/img/marker.png"> Verified Customer</p>
				</div>
			</div>
			<div class="testers">
				<div class="tester">
					<div class="row-one">
						<div class="customer">
							<p class="letter">J</p>
							<h1>Justin C. Bond</h1>
							<small>Powhatan Point, OH</small>
							<p><img src="/img/marker-v2.png"> Verified Buyer</p>
						</div>
						<div class="product">
							<img src="/img/pr-img1.png">
							<p>Reviewing<br><span>Secure Lite Cam</span></p>
						</div>
					</div>
					<div class="row-two">
						<img src="/img/stars.png">
						<p>I bought the first one to try it out. It is better than a ring device to me based on the fact that you can move the camera in a 360 degree rotation. The night vision/infrared is excellent as well.</p>
					</div>
				</div>
				<div class="tester">
					<div class="row-one">
						<div class="customer">
							<p class="letter">J</p>
							<h1>Julia R. Anderson</h1>
							<small>Hickory Hills, IL</small>
							<p><img src="/img/marker-v2.png"> Verified Buyer</p>
						</div>
						<div class="product">
							<img src="/img/pr-img2.png">
							<p>Reviewing<br><span>Secure Lite Cam</span></p>
						</div>
					</div>
					<div class="row-two">
						<img src="/img/stars.png">
						<p>I bought one of these in May and liked it so much I bought a second one in June. The cameras work great for what we need. We have just over an acre of land and these cameras cover the entire area. The video and audio quality are very good even at night.</p>
					</div>
				</div>
				<div class="tester">
					<div class="row-one">
						<div class="customer">
							<p class="letter">D</p>
							<h1>David R. Sanderson</h1>
							<small>Manchester, NH</small>
							<p><img src="/img/marker-v2.png"> Verified Buyer</p>
						</div>
						<div class="product">
							<img src="/img/pr-img3.png">
							<p>Reviewing<br><span>Secure Lite Cam</span></p>
						</div>
					</div>
					<div class="row-two">
						<img src="/img/stars.png">
						<p>This is ideal for individuals who have a porch light but no electrical source for mounting security cameras. I switched out the porch light for this security bulb. I'm never in the dark when I get home at night because the motion-activated switch turns on the light when I arrive. If someone comes within range of my property, it notifies me. I was able to review any activity after connecting the SD card. I can move the screen in a radius too. Perfect answer for security surveillance outside! The cost is also quite reasonable. Definitely recommend!</p>
					</div>
				</div>
				<div class="tester">
					<div class="row-one">
						<div class="customer">
							<p class="letter">T</p>
							<h1>Tabatha A. Pires</h1>
							<small>New Berlin, WI</small>
							<p><img src="/img/marker-v2.png"> Verified Buyer</p>
						</div>
						<div class="product">
							<img src="/img/pr-img4.png">
							<p>Reviewing<br><span>Secure Lite Cam</span></p>
						</div>
					</div>
					<div class="row-two">
						<img src="/img/stars.png">
						<p>The night vision is astounding, attached to a flood light 2 stories up... we sit on a hill so it's a total equivalent of 3 stories and it is amazing video quality down to the street on the side of my house.</p>
					</div>
				</div>
				<div class="tester">
					<div class="row-one">
						<div class="customer">
							<p class="letter">A</p>
							<h1>Alex H. Cottingham</h1>
							<small>Plymouth, MI</small>
							<p><img src="/img/marker-v2.png"> Verified Buyer</p>
						</div>
						<div class="product">
							<img src="/img/pr-img5.png">
							<p>Reviewing<br><span>Secure Lite Cam</span></p>
						</div>
					</div>
					<div class="row-two">
						<img src="/img/stars.png">
						<p>I had my doubts but this little camera is amazing!</p>
					</div>
				</div>
				<div class="tester">
					<div class="row-one">
						<div class="customer">
							<p class="letter">R</p>
							<h1>Reina J. Underwood</h1>
							<small>North Olmsted, OH</small>
							<p><img src="/img/marker-v2.png"> Verified Buyer</p>
						</div>
						<div class="product">
							<img src="/img/pr-img5.png">
							<p>Reviewing<br><span>Secure Lite Cam</span></p>
						</div>
					</div>
					<div class="row-two">
						<img src="/img/stars.png">
						<p>It pans to the left and right, up and down, has motion tracking that works flawlessly and has many features that the big name cameras have... it also has a slot for a 64GB SD Card.  This purchase has a lot of value to it.</p>
					</div>
				</div>
				<div class="tester">
					<div class="row-one">
						<div class="customer">
							<p class="letter">C</p>
							<h1>Cassie G. Oleary</h1>
							<small>Front Royal, VA</small>
							<p><img src="/img/marker-v2.png"> Verified Buyer</p>
						</div>
						<div class="product">
							<img src="/img/pr-img5.png">
							<p>Reviewing<br><span>Secure Lite Cam</span></p>
						</div>
					</div>
					<div class="row-two">
						<img src="/img/stars.png">
						<p>I'm a researcher at heart and I finally purchased this camera for a multitude of reasons. There is no monthly fee, the set up is so simple, it has good app reviews, and the customer service is awesome. Other companies have high monthly fees for storage and ongoing security and mounts that have to be drilled in. These I just have to pop in an sd card, and screw in a bulb. A project I can do myself without having to nag my husband for weeks to help!</p>
					</div>
				</div>
			</div>
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
  name: 'What',
	props: {
		imageUrl: String,
		showImage: {
			type: Boolean,
			default: true
		}
	}
}
</script>

<style lang="scss" scoped>
.home-what {
	position: relative;
	padding: 25px 0 30px;
	text-align: center;
	@media (min-width: 768px) {
		padding: 20px 0 60px;
	}
	.features {
		margin: 30px auto 0;
		display: block;
		justify-content: space-between;
		@media (min-width: 768px) {
			margin-top: 40px;
			display: flex;
		}
		.block {
			width: 100%;
			padding: 0 20px;
    	text-align: left;
			margin-bottom: 30px;
			@media (min-width: 768px) {
				margin-bottom: 0;
				padding: 0;
				width: 32%;
				text-align: center;
			}
			@media (min-width: 992px) {
				width: 31%;
			}
			&:last-child {
				margin-bottom: 0;
			}
			img {
				display: block;
				margin: 0 auto;
			}
			h1 {
				font-size: 18px;
    		line-height: 26px;
    		margin: 15px 0 10px;
    		font-weight: 600;
				@media (min-width: 768px) {
					font-size: 20px;
    			line-height: 26px;
					margin: 20px 0 15px;
				}
				@media (min-width: 992px) {
					font-size: 20px;
    			line-height: 28px;
				}
			}
			.stars {
				margin: 0;
				@media (min-width: 768px) {
					margin: 20px auto 0;
				}
			}
			.desc {
				font-size: 16px;
    		line-height: 25px;
    		letter-spacing: 0.5px;
				margin-top: 15px;
				@media (min-width: 768px) {
					font-size: 17px;
    			line-height: 26px;
					letter-spacing: 0;
					margin-top: 10px;
				}
				@media (min-width: 1200px) {
					font-size: 18px;
    			line-height: 28px;
				}
			}
			.customer {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				font-size: 14px;
    		line-height: 20px;
				margin-top: 16px;
				@media (min-width: 768px) {
					margin-top: 25px;
					justify-content: center;
				}
				span {
    			font-size: 17px;
					font-weight: 500;
					@media (min-width: 768px) {
						font-size: 15px;
					}
					@media (min-width: 992px) {
						font-size: 18px;
					}
				}
				img {
					margin: -2px 5px 0;
				}
			}
		}
	}
	.testers {
		margin-top: 20px;
		text-align: left;
		@media (min-width: 768px) {
			margin-top: 80px;
		}
		.tester {
			display: block;
			border-bottom: 1px solid var(--lightgray);
    	margin-top: 33px;
			padding-bottom: 30px;
			@media (min-width: 768px) {
				margin: 20px 0;
				padding-bottom: 35px;
				display: flex;
			}
			&:last-child {
				border-bottom: 0;
			}
			.row-one {
				display: flex;
				justify-content: space-between;
				width: 100%;
				padding-right: 15px;
				@media (min-width: 768px) {
					width: 260px;
					display: block;
				}
				.customer {
					position: relative;
					padding-left: 60px;
					@media (min-width: 768px) {
						padding: 10px 0 10px 90px;
					}
					.letter {
						position: absolute;
						display: block;
						left: 0;
						background: var(--darkblue-v2);
						border-radius: 50%;
						color: var(--white);
						font-size: 22px;
    				text-align: center;
						width: 50px;
    				height: 50px;
    				line-height: 50px;
    				top: 0;
						@media (min-width: 768px) {
							width: 70px;
							height: 70px;
							line-height: 70px;
							top: 2px;
						}
					}
					h1 {
						font-size: 16px;
    				line-height: 22px;
    				font-weight: 600;
						@media (min-width: 768px) {
							font-size: 18px;
    					line-height: 24px;
						}
					}
					p {
						display: flex;
						align-items: center;
						font-size: 13px;
    				color: #83cc1c;
    				margin-top: 3.5px;
						@media (min-width: 768px) {
							font-size: 17px;
							margin-top: 7px;
						}
						img {
							display: block;
							margin: -2px 6px 0 0;
						}
					}
				}
				.product {
					position: relative;
					padding-left: 55px;
					display: flex;
					@media (min-width: 768px) {
						width: 100%;
						border-top: 1px solid var(--lightgray);
						margin-top: 16px;
						padding: 16px 0 10px 90px;
					}
					img {
						position: absolute;
						left: 0;
						border-radius: 10px;
						width: 50px;
    				height: 50px;
    				padding: 5px;
    				top: 0;
						@media (min-width: 768px) {
							border-radius: 5px;
							width: 73px;
							height: 73px;
							padding: 0;
							top: 16px;
						}
					}
					p {
						font-size: 14px;
    				line-height: 22px;
						@media (min-width: 768px) {
							font-size: 15px;
							margin-top: 14px;
						}
						span {
							font-weight: 600;
						}
					}
				}
			}
			.row-two {
				display: block;
				width: 100%;
				@media (min-width: 768px) {
					padding: 8px 0 8px 30px;
					width: calc(100% - 270px);
					border-left: 1px solid var(--lightgray);
				}
				img {
					margin-top: 15px;
				}
				p {
					font-size: 16px;
					line-height: 25px;
    			letter-spacing: 0.5px;
					margin-top: 15px;
					@media (min-width: 768px) {
						font-size: 17px;
					}
					@media (min-width: 992px) {
						font-size: 18px;
    				line-height: 27px;
					}
				}
			}
		}
	}
	.btn-box {
		display: none;
		width: 470px;
		margin: 70px auto 0;
		@media (min-width: 768px) {
			display: block;
		}
	}
}
</style>