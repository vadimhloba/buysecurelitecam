<template>
  <div class="home-banner">
		<div class="container">
			<div class="col-one">
				<div class="testers">
					<p>
						<img class="stars" src="/img/stars.png">
						<span>5000+</span>
						<img class="marker" src="/img/marker.png">
						Verified Reviews
						<img class="testers" src="/img/testers.png">
					</p>
				</div>
				<div class="title">
					<p>
						<span>Instantly & Discreetly <br> Keep Eyes On Your Home</span>
						With Secure Lite Cam
					</p>
				</div>
				<div class="features">
					<img class="icon-cam" src="/img/icon-cam.png">
					<p>
						<span>360° HD Camera</span>
						<img class="marker-two" src="/img/marker-two.png">
						<span>24x7 Monitoring</span>
						<img class="marker-two" src="/img/marker-two.png">
						<span>Motion Detection</span>
					</p>
				</div>
				<ul class="desc">
					<li>360° Built-In Night Vision HD Camera</li>
					<li>Motion Detection & Alarm Function</li>
					<li>24x7 Monitoring & Recording via Phone</li>
					<li>Easy Set Up - Just Replace Regular Bulb </li>
				</ul>
				<div class="btn-box">
					<p class="btn-desc">
						<img src="/img/icon-gift.png">
						Exclusive Offer - Not Available On Amazon 
						<img src="/img/icon-gift.png">
					</p>
					<BtnOffer buttonText="Unlock Offer & Save 50%" class="btn"/>
					<div class="btn-text">
						<span>Hurry!</span> Only <span>172 Left</span> At This Price!
					</div>
					<SliderOffer/>
				</div>
			</div>
			<img class="pr-cam" src="/img/pr-cam.png">
			<img class="pr-can" src="/img/pr-can.png">
		</div>
	</div>
</template>

<script>
export default {
  name: 'HomeBanner'
}
</script>

<style lang="scss" scoped>
.home-banner {
	padding: 25px 0 30px;
  height: auto;
  background: #f6fbff;

	@media (min-width: 768px) {
		width: 100%;
		background: url(/img/banner.jpg) 42% top;
    background-size: cover;
		overflow: hidden;
    height: 700px;
	}
	@media (min-width: 992px) {
		background: url(/img/banner.jpg) no-repeat center top;
		height: 765px;
	}
	.col-one {
		width: 60%;
		padding: 45px 0;
		.testers {
			font-size: 19px;
    	line-height: 22px;
			p {
				display: flex;
				align-items: center;
				font-weight: 600;
				.stars {
					margin: 0 12px 0 5px;
				}
				span {
					font-weight: 700;
				}
				.marker {
					margin: 0 7px 0 5px;
				}
				.testers {
					margin-left: 5px;
				}
			}
		}
		.title {
			font-size: 52px;
    	line-height: 56px;
			font-weight: 700;
			margin-top: 8px;
			p {
				color: var(--darkblue);
				span {
					color: var(--blue);
				}
			}
		}
		.features {
			display: flex;
			align-items: center;
			background: var(--bluish);
			border-radius: 50px;
			margin-top: 21px;
			p {
				display: flex;
				align-items: center;
				font-size: 20px;
    		line-height: 30px;
				font-weight: 700;
				margin-left: 12px;
				.marker-two {
					margin: 0 10px;
				}
			}
		}
		.desc {
			margin-top: 24px;
			padding-left: 15px;
			list-style: none;
			li {
				font-size: 23px;
    		line-height: 30px;
				font-weight: 500;
				margin-top: 12px;
				&::before {
					content: url(/img/tick.png);
					padding-right: 20px;
				}
				&:first-child {
					margin-top: 0;
				}
			}
		}
		.btn-box {
			.btn-desc {
				display: flex;
				align-items: flex-end;
				justify-content: center;
				color: var(--red);
				padding-bottom: 8px;
				img {
					margin: 0 8px;
				}
			}
		}
	}
	.pr-cam {
		display: none;
		@media (min-width: 768px) {
			display: flex;
			position: absolute;
			top: 80px;
    	right: 55px;
    	width: 200px;
		}
		@media (min-width: 992px) {
			right: 130px;
    	width: 300px;
		}
		@media (min-width: 1200px) {
			top: 41px;
    	right: 238px;
		}
	}
	.pr-can {
		display: none;
		@media (min-width: 768px) {
			display: flex;
			position: absolute;
			right: -8px;
    	width: 140px;
    	top: 120px;
		}
		@media (min-width: 992px) {
			right: -15px;
    	width: 200px;
		}
		@media (min-width: 1200px) {
			top: 104px;
    	right: 10px;
		}
	}
}
</style>