<template>
  <div class="home-footer">
		<div class="container">
			<img src="/img/logo.png">
			<ul>
				<li>Reference</li>
				<li>Owner's Manual</li>
				<li>FAQs</li>
				<li>Contact Us</li>
				<li>Terms & Conditions</li>
				<li>Privacy Policy</li>
				<li>Returns</li>
				<li>Shipping</li>
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
	img {
		margin: 0 auto 15px;
	}
	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style: none;
		li {
			display: flex;
			align-items: center;
			position: relative;
			padding-right: 7px;
			margin-right: 7px;
			&::after {
				content: '';
				width: 1px;
				position: absolute;
				right: 0;
				height: 15px;
				background: #3d3d3d;
			}
			&:last-child::after {
				width: 0;
			}
		}
	}
	p {
		font-size: 16px;
    line-height: 26px;
    color: #333333;
    margin-top: 7px;
	}
}
</style>