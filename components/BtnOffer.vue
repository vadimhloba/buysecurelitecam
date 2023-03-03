<template>
	<nuxt-link to="checkout" class="customize pulse">{{ buttonText }}<span class="arw"></span></nuxt-link>
</template>

<script scoped>
export default {
	name: 'BtnOffer',
	props: {
		buttonText: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.customize {
	display: block;
  height: 70px;
  overflow: hidden;
  color: #ffffff;
  font-size: 27px;
  line-height: 70px;
  position: relative;
  text-align: center;
  padding-right: 50px;
  font-weight: 800;
  letter-spacing: 0.3px;
  background: #00bb29;
  border-radius: 6px;
  border: 1px solid #00de31;
	.arw {
		position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50px;
    background: #00bb29;
    border-left: 1px solid #4dd06a;
		&:after {
			content: '';
    	position: absolute;
    	right: 16px;
    	top: 50%;
    	margin-top: -10px;
    	border-left: 10px solid #fff;
    	border-top: 10px solid transparent;
    	border-bottom: 10px solid transparent;
		}
	}
}
</style>