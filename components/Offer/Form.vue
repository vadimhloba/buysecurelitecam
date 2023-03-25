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
					<form class="form-content">
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
					</form>
					<div class="form-content">
						<button>
							Reserve My Order
							<img src="">
						</button>
					</div>
					<div class="form-content">
						<div class="col">
							<h1></h1>
							<p></p>
						</div>
						<div class="col">
							<h1></h1>
							<p></p>
						</div>
						<div class="col">
							<h1></h1>
							<p></p>
						</div>
						<div class="col">
							<h1></h1>
							<p></p>
						</div>
					</div>
				</div>
			</div>
			<div class="row-two">
				<What :show-image="false"/>
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
					button {
						background-color: #1e8504;
						border-radius: 9px;
    				color: #fff;
    				font-size: 20px;
    				font-weight: 700;
    				letter-spacing: .51px;
    				margin-top: 15px;
    				line-height: 22px;
    				text-align: center;
    				padding: 15px;
    				width: 100%;
    				position: relative;
    				outline: none !important;
    				border: 2px solid #fff;
						cursor: pointer;
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
					margin-bottom: 0.5rem;
					input {
						padding: 0.45rem;
					}
					.form-control {
						display: block;
    				width: 100%;
    				height: calc(1.5em + 0.75rem + 2px);
    				padding: 0.375rem 0.75rem;
    				font-size: 1rem;
    				font-weight: 400;
    				line-height: 1.5;
    				color: #495057;
    				background-color: #fff;
    				background-clip: padding-box;
    				border: 1px solid #ced4da;
    				border-radius: 0.25rem;
    				transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
					}
				}
			}
		}
	}
}
</style>