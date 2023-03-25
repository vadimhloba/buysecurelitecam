<template>
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
		<img src="/img/bnr-mob.jpg" class="bnr-mob">
		<div class="features">
			<img class="icon-cam" src="/img/icon-cam.png">
			<p>
				<span>360° <br class="for-mob"> HD Camera</span>
				<img class="marker-two" src="/img/marker-two.png">
				<span>24x7 <br class="for-mob"> Monitoring</span>
				<img class="marker-two" src="/img/marker-two.png">
				<span>Motion <br class="for-mob"> Detection</span>
			</p>
		</div>
		<ul class="desc">
			<li>360° Built-In Night Vision HD Camera</li>
			<li>Motion Detection & Alarm Function</li>
			<li>24x7 Monitoring & Recording via Phone</li>
			<li>Easy Set Up - Just Replace Regular Bulb </li>
		</ul>
		
		<div v-if="showDiv" class="btn-box">
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
</template>

<script>
export default {
	name: 'Info',
	props: {
		showDiv: {
			type: Boolean,
			default: true
		}
	}
}
</script>

<style lang="scss" scoped>
.col-one {
	width: 100%;
	text-align: center;
	@media (min-width: 768px) {
		width: 72%;
		padding: 45px 0;
		text-align: left;
	}
	@media (min-width: 992px) {
		width: 64%;
	}
	@media (min-width: 992px) {
		width: 64%;
	}
	@media (min-width: 1200px) {
		width: 60%;
	}
	.testers {
		font-size: 16px;
  	line-height: 20px;
		@media (min-width: 768px) {
			font-size: 17px;
  		line-height: 22px;
		}
		@media (min-width: 992px) {
			font-size: 19px;
  		line-height: 22px;
		}
		p {
			width: 100%;
			font-weight: 600;
			text-align: center;
			@media (min-width: 768px) {
				text-align: left;
			}
			.stars {
				display: none;
				margin: 0 12px 0 5px;
				@media (min-width: 768px) {
					display: inline-block;
					vertical-align: middle;
				}
			}
			span {
				display: inline-block;
				vertical-align: middle;
				font-weight: 700;
			}
			.marker {
				display: inline-block;
				vertical-align: middle;
				margin: 0 7px 0 5px;
			}
			.testers {
				width: 95px;
				display: inline-block;
				vertical-align: middle;
				margin-left: 5px;
				@media (min-width: 768px) {
					width: 107px;
				}
				@media (min-width: 992px) {
					width: 173px;
				}
			}
		}
	}
	.title {
		font-size: 26px;
  	line-height: 32px;
		font-weight: 700;
		margin-top: 6px;
		max-width: 321px;
		margin-right: auto;
		margin-left: auto;
		@media(min-width: 768px) {
			max-width: 100%;
		  font-size: 37px;
  		line-height: 48px;
			margin-top: 8px;
		}
		@media(min-width: 992px) {
			font-size: 45px;
  		line-height: 54px;
		}
		@media(min-width: 1200px) {
			font-size: 52px;
  		line-height: 56px;
		}
		p {
			color: var(--darkblue);
			span {
				color: var(--blue);
			}
		}
	}
	.bnr-mob {
		display: block;
		margin-top: 15px;
		@media(min-width: 768px) {
		  display: none;
		}
	}
	.features {
		background: var(--bluish);
		padding: 10px 0;
		@media(min-width: 768px) {
			display: flex;
			align-items: center;
			border-radius: 50px;
			padding: 0;
			margin-top: 21px;
		}
		.icon-cam {
			max-width: 34px;
			display: none;
			@media(min-width: 768px) {
				display: block;
			}
			@media(min-width: 992px) {
				max-width: 100%;
			}
		}
		p {
			font-weight: 700;
			font-size: 15px;
  		line-height: 18px;
			text-align: center;
			@media(min-width: 768px) {
				font-size: 15px;
 				line-height: 24px;
				display: flex;
				align-items: center;
				margin-left: 6px;
			}
			@media(min-width: 992px) {
				margin-left: 12px;
				font-size: 17px;
  			line-height: 28px;
			}
			@media(min-width: 1200px) {
				font-size: 20px;
  			line-height: 30px;
			}
			span {
				display: inline-block;
  			vertical-align: middle;
  			padding: 0 10px;
				@media(min-width: 768px) {
					display: block;
  				padding: 0;
				}
			}
			.marker-two {
				display: inline-block;
  			vertical-align: middle;
				margin: 0 6px;
				max-width: 19px;
				@media(min-width: 1200px) {
					max-width: 100%;
					margin: 0 10px;
				}
			}
		}
	}
	.desc {
		margin-top: 24px;
		padding-left: 15px;
		list-style: none;
		text-align: left;
  	background-size: 16px;
		li {
			font-size: 17px;
			line-height: 22px;
			padding-left: 40px;
			background: url(/img/tick.png) no-repeat left 6px;
			background-size: 16px;
			margin-top: 12px;
			@media(min-width: 768px) {
				background: url(/img/tick.png) no-repeat left 10px;
				font-size: 20px;
  			line-height: 29px;
  			padding-left: 35px;
			}
			@media(min-width: 992px) {
				font-size: 23px;
  			line-height: 30px;
				font-weight: 500;
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
</style>