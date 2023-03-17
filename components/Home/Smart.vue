<template>
  <div class="home-smart" id="smart">
		<div class="container">
			<img src="/img/arw-down.png" class="arw-down">
			<div class="title">
				<h1 class="title-up">Smart Security Solution</h1>
				<h1 class="title-down">For Your Home and Work</h1>
			</div>
			<div class="wrapper">
				<div class="col-one">
					<img src="/img/steps-img-mob.jpg" class="steps-img-mob">
					<img src="/img/steps-img.jpg" class="steps-img">
				</div>
				<div class="col-two">
					<h1 class="title-up">Smart Security Solution</h1>
					<h1 class="title-down">For Your Home and Work</h1>
					<ul>
						<li>
							<span>1</span>
							<h1>Protection from Porch Pirates</h1>
							<p>Deter package thieves with security light bulb & have recorded proof if your package goes missing</p>
						</li>
						<li>
							<span>2</span>
							<h1>Prevent Break-Ins & Thefts </h1>
							<p>Get real-time alerts of any off activity in your house on your phone & take timely action to protect your home.</p>
						</li>
						<li>
							<span>3</span>
							<h1>Baby, Pet & Senior Safety</h1>
							<p>Keep an eye on your family while they are alone or being taken care of while capturing some great moments.</p>
						</li>
						<li>
							<span>4</span>
							<h1>Workplace Surveillance</h1>
							<p>Monitor every corner of your home, store, or warehouse day or night, right from your phone in 1080P clarity.</p>
						</li>
					</ul>
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
  name: 'HomeSmart'
}
</script>

<style lang="scss" scoped>
.home-smart {
	padding: 25px 0 35px;
	background: var(--bluelight);
	@media (min-width: 768px) {
		padding: 40px 0 60px;
	}
	.title {
		text-align: center;
		.title-up {
			display: block;
			@media (min-width: 992px) {
				display: none;
			}
		}
		.title-down {
			display: block;
			@media (min-width: 992px) {
				display: none;
			}
		}
	}
	.wrapper {
		display: block;
		justify-content: space-between;
		align-items: flex-start;
		@media (min-width: 992px) {
			display: flex;
			margin-top: 35px;
		}
	}
	.col-one {
		width: 100%;
		@media (min-width: 992px) {
			width: 47%;
		}
		.steps-img-mob {
			display: none;
			width: 550px;
			margin: 30px auto 0;
			@media (min-width: 768px) {
				display: block;
				padding: 0;
			}
			@media (min-width: 992px) {
				display: none;
			}
		}
		.steps-img {
			display: block;
			margin: 20px auto 40px;
			max-width: 330px;
			@media (min-width: 768px) {
				display: none;
				margin: 0;
				max-width: 100%;
			}
			@media (min-width: 992px) {
				display: block;
				margin-top: 8px;
			}
		}
	}
	.col-two {
		width: 100%;
		margin-top: 0;
		padding: 0;
		@media (min-width: 768px) {
			margin-top: 15px;
    	padding: 0 50px;
		}
		@media (min-width: 992px) {
			width: 50%;
			margin-top: 0;
			padding: 0;
		}
		.title-up {
			display: none;
			@media (min-width: 992px) {
				display: block;
			}
		}
		.title-down {
			background: url(/img/pre-line-left.png) no-repeat left bottom;
			display: none;
			@media (min-width: 992px) {
				display: block;
			}
		}
		ul {
			list-style: none;
			li {
				position: relative;
				padding: 0 0 0 40px;
    		margin-top: 20px;
				@media (min-width: 768px) {
					margin-top: 25px;
					padding: 0 0 0 45px;
				}
    		@media (min-width: 992px) {
					margin-top: 15px;
				}
				@media (min-width: 1200px) {
					margin-top: 30px;
				}
				h1 {
					font-size: 19px;
    			line-height: 30px;
    			color: var(--darkblue);
    			font-weight: 700;
					@media (min-width: 992px) {
						font-size: 21px;
    				line-height: 26px;
					}
					@media (min-width: 1200px) {
						font-size: 22px;
    				line-height: 29px;
					}
				}
				p {
					font-size: 17px;
    			line-height: 25px;
    			letter-spacing: 0.5px;
					margin-top: 0;
					font-weight: 400;
					@media (min-width: 768px) {
						margin-top: 5px;
					}
					@media (min-width: 992px) {
						font-size: 18px;
    				line-height: 28px;
						margin-top: 6px;
					}
					@media (min-width: 1200px) {
						font-size: 19px;
					}
				}
				span {
					position: absolute;
					left: 0;
					top: 5px;
					width: 30px;
    			height: 30px;
    			color: var(--white);
    			background: var(--blue);
    			border-radius: 50%;
    			text-align: center;
    			font-weight: 600;
    			font-size: 20px;
    			line-height: 30px;
				}
			}
		}
	}
	.btn-box {
		margin-right: auto;
		margin-left: auto;
		margin-top: 70px;
	}
}
</style>