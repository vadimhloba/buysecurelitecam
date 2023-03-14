<template>
  <div class="home-smart" id="smart">
		<div class="container">
			<img src="/img/arw-down.png" class="arw-down">
			<div class="wrapper">
				<div class="col-one">
					<img src="/img/steps-img.jpg">
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
	padding: 40px 0 60px;
	background: var(--bluelight);
	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.col-one {
		width: 570px;
		max-width: 100%;
	}
	.col-two {
		width: 49%;
		.title-down {
			background: url(/img/pre-line-left.png) no-repeat center bottom;
		}
		ul {
			list-style: none;
			li {
				position: relative;
				padding: 0 0 0 45px;
    		margin: 30px 0 0 0;
				h1 {
					font-size: 22px;
    			line-height: 29px;
    			color: var(--darkblue);
    			font-weight: 700;
				}
				p {
					font-size: 19px;
    			line-height: 28px;
    			letter-spacing: 0.5px;
					margin-top: 6px;
					font-weight: 400;
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