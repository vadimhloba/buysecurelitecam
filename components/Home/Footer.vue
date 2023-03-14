<template>
  <div class="home-footer">
		<div class="container">
			<img src="/img/logo.png">
			<ul>
				<li>Reference</li>
				<li>|</li>
				<li>Owner's Manual</li>
				<li>|</li>
				<li>FAQs</li>
				<li>|</li>
				<li>Contact Us</li>
				<li>|</li>
				<li>Terms & Conditions</li>
				<li>|</li>
				<li>Privacy Policy</li>
				<li>|</li>
				<li>Returns</li>
				<li>|</li>
				<li>Shipping</li>
				<li>|</li>
				<li>Waranty</li>
			</ul>
			<p>© 2023 Secure Lite Cam, All rights reserved.</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="scss" scoped>
.home-footer {
	padding: 50px 0;
	text-align: center;
	color: #333333;
	img {
		margin: 0 auto 15px;
	}
	ul {
		width: 100%;
		li {
			display: inline-block;
		}
	}
	p {
		font-size: 16px;
    line-height: 26px;
    margin-top: 7px;
	}
}
</style>