<template>
	<div class="offer-form">
		<div class="container">
			<div class="title-main">
				<h1 class="title-up">Instantly Secure Your Home</h1>
				<h1 class="title-down">Without The Expensive Monitoring Systems!</h1>
			</div>
			<div class="row-one">
				<div class="column">
					<Info :showDiv="false"/>
					<div class="post">
						<img src="/img/product-offer.png">
					</div>
				</div>
				<div class="col-two">
					<div class="step oswald-custom">
						<p>STEP 1 : SHIPPING INFORMATION</p>
					</div>
					<form>
						<div class="form-content">
							<div class="top-desc">
								<div class="coupon">50SECURITY</div>
								<p class="coupon-text">Congratulations <br> Discount Code Activated <img src="/img/marker-light.png"></p>
							</div>
							<div class="form-field">
								<input type="text" class="form-control" spellcheck="false" autocorrect="off" placeholder="First Name" data-error-message="Please enter your first name!" value required>
							</div>
							<div class="form-field">
								<input type="text" class="form-control" spellcheck="false" autocorrect="off" placeholder="Last Name" data-error-message="Please enter your last name!" value required>
							</div>
							<div class="form-field">
								<input type="text" class="form-control" spellcheck="false" autocorrect="off" placeholder="Adress" data-error-message="Please enter your adress!" value required>
							</div>
							<div class="form-field">
								<input type="text" class="form-control" spellcheck="false" autocorrect="off" placeholder="Apt, Suite, Unit, Building (optional)" data-error-message="Please enter your optional!" value required>
							</div>
							<div class="form-field">
								<input type="text" class="form-control" spellcheck="false" autocorrect="off" placeholder="City" data-error-message="Please enter your city!" value required>
							</div>
							<div class="form-field">
								<select type="text" placeholder="Your State" class="form-control" data-error-message="Please select your state!" data-selected="AL">
									<option value="" selected="selected">Select State</option>
									<option value="AL">Alabama</option>
									<option value="AK">Alaska</option>
									<option value="AS">American Samoa</option>
									<option value="AZ">Arizona</option>
									<option value="AR">Arkansas</option>
									<option value="AE">Armed Forces Middle East</option>
									<option value="AA">Armed Forces Americas</option>
									<option value="AP">Armed Forces Pacific</option>
									<option value="CA">California</option>
									<option value="CO">Colorado</option>
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="DC">District of Columbia</option>
									<option value="FM">Federated States of Micronesia</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="GU">Guam</option>
									<option value="HI">Hawaii</option>
									<option value="ID">Idaho</option>
									<option value="IL">Illinois</option>
									<option value="IN">Indiana</option>
									<option value="IA">Iowa</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NV">Nevada</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NM">New Mexico</option>
									<option value="NY">New York</option>
									<option value="NC">North Carolina</option>
									<option value="ND">North Dakota</option>
									<option value="MP">Northern Mariana Islands</option>
									<option value="OH">Ohio</option>
									<option value="OK">Oklahoma</option>
									<option value="OR">Oregon</option>
									<option value="PA">Pennsylvania</option>
									<option value="PR">Puerto Rico</option>
									<option value="MH">Republic of Marshall Islands</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="SD">South Dakota</option>
									<option value="TN">Tennessee</option>
									<option value="TX">Texas</option>
									<option value="UT">Utah</option>
									<option value="VT">Vermont</option>
									<option value="VI">Virgin Islands of the U.S.</option>
									<option value="VA">Virginia</option>
									<option value="WA">Washington</option>
									<option value="WV">West Virginia</option>
									<option value="WI">Wisconsin</option>
									<option value="WY">Wyoming</option>
								</select>
								<img src="">
							</div>
							<div class="form-field">
								<select class="form-control" data-selected="US" data-error-message="Please select your country!">
									<option value="">Select Country</option>
									<option value="CA">Canada</option>
									<option value="US">United States</option>
								</select>
								<img src="">
							</div>
							<div class="form-field">
								<input type="text" class="form-control" spellcheck="false" autocorrect="off" placeholder="First Name" data-error-message="Please enter your first name!" value required>
							</div>
							<div class="form-field">
								<input type="text" class="form-control" spellcheck="false" autocorrect="off" placeholder="First Name" data-error-message="Please enter your first name!" value required>
							</div>
							<div class="form-field">
								<input type="text" class="form-control" spellcheck="false" autocorrect="off" placeholder="First Name" data-error-message="Please enter your first name!" value required>
							</div>
							<div class="bottom-desc">
								<p>We never share your information.</p>
							</div>
						</div>
						<div class="form-content">
							<button type="submit">
								Reserve My Order
								<svg style="color: white" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
								  <defs>
								    <linearGradient id="gradient">
								      <stop offset="0" stop-color="white" stop-opacity="0.5"/>
								      <stop offset="50%" stop-color="white" stop-opacity="0.5"/>
								      <stop offset="50%" stop-color="white" stop-opacity="1"/>
								      <stop offset="100%" stop-color="white" stop-opacity="1"/>
								    </linearGradient>
								  </defs>
								  <path d="M8.5,8.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L9.3,12L7,14.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l3-3c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4L8.5,8.3z M17,11.3l-3-3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l2.3,2.3l-2.3,2.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l3-3C17.3,12.3,17.3,11.7,17,11.3z" fill="url(#gradient)"></path>
								</svg>
							</button>
						</div>
					</form>
					<div class="form-content">
						<div class="block">
							<img src="/img/30-days.png">
							<div class="box">
								<h1>30-DAYS MONEY BACK GUARANTEE</h1>
								<p>If you are unsatisfied for any reason within 30 days, simple contact our customer care center for a full refund of your initial order. Happy shopping!</p>
							</div>
						</div>
						<div class="block">
							<img src="/img/lock.png">
							<div class="box">
								<h1>YOUR PRIVACY IS IMPORTANT</h1>
								<div class="seal">buysecurelitecam.com is Safe & Secure Guaranteed!</div>
								<p>You'll pay nothing if unauthorized charges are made to your credit card as a result of shopping at buysecurelitecam.com</p>
							</div>
						</div>
						<div class="block">
							<img src="/img/shield.png">
							<div class="box">
								<h1>YOUR PRIVACY IS IMPORTANT</h1>
								<p>All information is encrypted and transmitted without risk using a Secure Socket Layer (SSL) protocol.</p>
							</div>
						</div>
						<div class="block">
							<img src="/img/us-flag.png">
							<div class="box">
								<h1>AMERICAN OWNED</h1>
								<p> Secure Lite Cam is proud to be an American-owned company.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row-two">
				<What :show-image="false" :show-div="false" :show-btn="false"/>
				<div class="testers">
					<div class="tester">
						<div class="col-one">
							<img src="/img/user.jpg">
						</div>
						<div class="col-two">
							<div class="wrapper">
								<div>
									<span>Justin C. Bond - Powhatan Point, OH</span>
									<a href="#">
										<img src="/img/check-mark.svg">
										<div>Verified Review</div>
									</a>
								</div>
								<img src="/img/stars.png">
							</div>
							<div class="desc">
								I bought the first one to try it out. It is better than a ring device to me based on the fact that you can move the camera in a 360 degree rotation. The night vision/infrared is excellent as well.
							</div>
						</div>
					</div>
					<div class="tester">
						<div class="col-one">
							<img src="/img/user.jpg">
						</div>
						<div class="col-two">
							<div class="wrapper">
								<div>
									<span>Julia R. Anderson - Hickory Hills, IL</span>
									<a href="#">
										<img src="/img/check-mark.svg">
										<div>Verified Review</div>
									</a>
								</div>
								<img src="/img/stars.png">
							</div>
							<div class="desc">
								I bought one of these in May and liked it so much I bought a second one in June. The cameras work great for what we need. We have just over an acre of land and these cameras cover the entire area. The video and audio quality are very good even at night.
							</div>
						</div>
					</div>
					<div class="tester">
						<div class="col-one">
							<img src="/img/user.jpg">
						</div>
						<div class="col-two">
							<div class="wrapper">
								<div>
									<span>David R. Sanderson - Manchester, NH</span>
									<a href="#">
										<img src="/img/check-mark.svg">
										<div>Verified Review</div>
									</a>
								</div>
								<img src="/img/stars.png">
							</div>
							<div class="desc">
								This is ideal for individuals who have a porch light but no electrical source for mounting security cameras. I switched out the porch light for this security bulb. I'm never in the dark when I get home at night because the motion-activated switch turns on the light when I arrive. If someone comes within range of my property, it notifies me. I was able to review any activity after connecting the SD card. I can move the screen in a radius too. Perfect answer for security surveillance outside! The cost is also quite reasonable. Definitely recommend!
							</div>
						</div>
					</div>
					<div class="tester">
						<div class="col-one">
							<img src="/img/user.jpg">
						</div>
						<div class="col-two">
							<div class="wrapper">
								<div>
									<span>Tabatha A. Pires - New Berlin, WI</span>
									<a href="#">
										<img src="/img/check-mark.svg">
										<div>Verified Review</div>
									</a>
								</div>
								<img src="/img/stars.png">
							</div>
							<div class="desc">
								The night vision is astounding, attached to a flood light 2 stories up... we sit on a hill so it's a total equivalent of 3 stories and it is amazing video quality down to the street on the side of my house.
							</div>
						</div>
					</div>
					<div class="tester">
						<div class="col-one">
							<img src="/img/user.jpg">
						</div>
						<div class="col-two">
							<div class="wrapper">
								<div>
									<span> Alex H. Cottingham - Plymouth, MI</span>
									<a href="#">
										<img src="/img/check-mark.svg">
										<div>Verified Review</div>
									</a>
								</div>
								<img src="/img/stars.png">
							</div>
							<div class="desc">
								I had my doubts but this little camera is amazing!
							</div>
						</div>
					</div>
					<div class="tester">
						<div class="col-one">
							<img src="/img/user.jpg">
						</div>
						<div class="col-two">
							<div class="wrapper">
								<div>
									<span>Reina J. Underwood - North Olmsted, OH</span>
									<a href="#">
										<img src="/img/check-mark.svg">
										<div>Verified Review</div>
									</a>
								</div>
								<img src="/img/stars.png">
							</div>
							<div class="desc">
								It pans to the left and right, up and down, has motion tracking that works flawlessly and has many features that the big name cameras have... it also has a slot for a 64GB SD Card.  This purchase has a lot of value to it. 
							</div>
						</div>
					</div>
					<div class="tester">
						<div class="col-one">
							<img src="/img/user.jpg">
						</div>
						<div class="col-two">
							<div class="wrapper">
								<div>
									<span>Cassie G. Oleary - Front Royal, VA</span>
									<a href="#">
										<img src="/img/check-mark.svg">
										<div>Verified Review</div>
									</a>
								</div>
								<img src="/img/stars.png">
							</div>
							<div class="desc">
								I'm a researcher at heart and I finally purchased this camera for a multitude of reasons. There is no monthly fee, the set up is so simple, it has good app reviews, and the customer service is awesome. Other companies have high monthly fees for storage and ongoing security and mounts that have to be drilled in. These I just have to pop in an sd card, and screw in a bulb. A project I can do myself without having to nag my husband for weeks to help!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'OfferForm',
}
</script>

<style lang="scss" scoped>
.offer-form {
	.container {
		.title-main {
			margin-top: 24px;
			h1 {
				display: flex;
				justify-content: center;
				background: url();
			}
			.title-down {
				padding-bottom: 0;
				margin-bottom: 20px;
			}
		}
		.row-one {
			width: 100%;
			display: flex;
			.column {
				width: 58.3333%;
				.col-one {
					width: 100%;
					padding: 10px 10px 20px 10px;
				}
			}
			.post {
				img {
					height: 100%;
  		  	max-height: 710px;
				}
			}
			.col-two {
				width: 41.6667%;
				margin-top: 1.5rem;
				padding: 0 25px;
				.oswald-custom {
					font-family: 'Oswald', sans-serif;
					font-weight: 400;
    			line-height: 1.5;
    			color: #212529;
				}
				.step {
					font-size: 20px;
					padding-left: 0.5rem;
					padding-bottom: 0.5rem;
					border-bottom: 1px solid rgba(0,0,0,.1);
					margin-bottom: 1rem;
				}
				.form-content {
					background-color: #0070ba;
    			background: -webkit-gradient(linear, left top, right top, from(#0070ba), color-stop(#5b8db1), to(#0070ba));
    			background: linear-gradient(to right, #0070ba, #5b8db1, #0070ba);
    			background-image: -webkit-gradient(linear, left top, right top, from(#0070ba), color-stop(#5b8db1), to(#0070ba));
    			background-image: linear-gradient(to right, #0070ba, #5b8db1, #0070ba);
    			background-image: -moz-linear-gradient(left, #0070ba, #5b8db1, #0070ba);
    			-webkit-box-shadow: 0 6px 9px -5px #000;
    			box-shadow: 0 6px 9px -5px #000;
    			padding: 15px;
    			border-radius: 5px;
    			border: 1px solid #dedede;
					button[type=submit] {
						background-color: #1e8504;
						border-radius: 9px;
    				color: #fff;
    				font-size: 20px;
    				font-weight: 700;
    				letter-spacing: .51px;
    				margin-top: 15px;
    				line-height: 22px;
    				text-align: center;
    				padding: 5px 15px;
    				width: 100%;
    				position: relative;
    				outline: none !important;
    				border: 2px solid #fff;
						cursor: pointer;
						display: flex;
						justify-content: center;
						align-items: center;
						transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
						&:hover {
							background-color: #24a104;
						}
						svg {
							width: 40px;
							height: 40px;
						}
					}
					.block {
						background: #f7f7f7;
						border-radius: 10px;
						padding: 16px 4px 16px 8px;
						margin-top: 16px;
						display: flex;
						align-items: center;
						img {
							width: 50px;
							min-width: 50px;
							margin-right: 10px;
						}
						h1 {
							font-weight: 700;
							line-height: 1.1;
							font-family: Oswald, sans-serif;
							margin-bottom: 4px;
							font-size: 16px;
						}
						p {
							font-size: 12px;
							line-height: 16px;
						}
						.seal {
							font-size: 12px;
							line-height: 1.5;
						}
					}
				}
				.top-desc {
					margin: 5px 0 15px;
					display: flex;
					.coupon {
						color: #242424;
    				font-size: 20px;
    				line-height: 28px;
    				font-weight: bold;
    				border: 2px dashed #e91414;
    				padding: 5px 14px;
    				border-radius: 2px;
    				background: #fff;
					}
					.coupon-text {
						color: #fff;
    				font-size: 14px;
    				line-height: 20px;
    				letter-spacing: 0.5px;
    				margin: 0px 0 0 20px;
						img {
							display: inline-block;
    					vertical-align: middle;
    					width: 15px;
    					margin: -5px 0 0 0;
						}
					}
				}
				.form-field {
					position: relative;
					font-size: 16px;
					margin-bottom: 8px;
					input {
						padding: 7.2px;
					}
					.form-control {
						display: block;
    				width: 100%;
    				height: calc(24px + 12px + 2px);
    				padding: 6px 12px;
    				font-size: 16px;
    				font-weight: 400;
    				line-height: 1.5;
    				color: #495057;
    				background-color: #fff;
    				background-clip: padding-box;
    				border: 1px solid #ced4da;
    				border-radius: 4px;
    				transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
					}
				}
				.bottom-desc {
					p {
						font-size: 12px;
						color: #fff;
						margin-top: 12px;
						font-weight: 400;
						line-height: 1.5;
						text-align: center;
					}
				}
			}
		}
		.row-two {
			.testers {
				margin-top: 16px !important;
				.tester {
					padding: 10px 0;
    			background: #f7f7f7 !important;
    			border: 1px solid #e1e1e1;
					display: flex;
					margin: 8px 0;
					.col-one {
						padding: 0 8px;
						flex: 0 0 8.333333%;
						max-width: 8.333333%;
						img {
							border-radius: 50%;
						}
					}
					.col-two {
						padding-left: 4px;
						padding-right: 15px;
						flex: 0 0 91.666667%;
						max-width: 91.666667%;
						.wrapper {
							display: flex;
							align-items: center;
							justify-content: space-between;
							div {
								display: flex;
								align-items: center;
							}
							span {
    						margin-left: 0;
    						padding: 1px 0;
    						font-weight: 700;
    						font-size: 14px;
    						color: #1fba34;
								margin-right: 5px;
							}
							a {
								color: blue;
								border-left: 1px solid #666;
    						padding-left: 5px;
    						margin-left: 0;
    						color: #666;
    						font-size: 12px;
    						pointer-events: none;
    						font-weight: 600;
								display: flex;
								img {
									margin-right: 3px;
								}
								div {
									color: blue;
								}
							}
						}
						.desc {
							border-top: 1px dashed #a0a0a0;
    					margin-top: 9px;
    					padding-top: 5px;
						}
					}
				}
			}
		}
	}
}
</style>