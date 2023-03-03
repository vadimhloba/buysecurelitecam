<template>
  <div class="home-instant">
		<div class="container">
			<img class="arw-down" src="/img/arw-down.png">
			<p class="title">Instant & Discreet Security</p>
			<p class="title-desc">For Your Home From Anywhere</p>
			<p class="desc">It has never been easier to set up a surveillance system. <br> Professional Home Surveillance System For A Fraction Of The Price.</p>
			<div class="video">
				<img v-if="showVideo" class="img-post" src="/img/index-poster.png" @click="playVideo">
				<video controls ref="videoPlayer" width="100%">
					<source src="https://video.buysecurelitecam.com/Interstitial-video.mp4" type="video/mp4">
				</video>
			</div>
			<p class="post-desc">Secure Lite Cam is compact and has all the features anyone would want when <br> having cameras inside & outside their home.</p>
			<div class="btn-box">
				<BtnOffer buttonText="Unlock Offer & Save 50%" class="btn"/>
				<div class="btn-text">
					<span>Hurry!</span> Only <span>172 Left</span> At This Price!
				</div>
				<div class="slider">
					<div class="tab-move"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HomeInstant',
	data: () => ({ showVideo: true }),
	methods: {
    playVideo() {
      this.showVideo = false;
      this.$refs.videoPlayer.play();
    }
  }
}
</script>

<style lang="scss" scoped>
.home-instant {
	width: 100%;
	padding: 30px 0 70px;
	text-align: center;
	.arw-down {
		display: block;
		margin: 0 auto;
	}
	.title {
		font-size: 40px;
    line-height: 49px;
	}
	.title-desc {
		font-size: 40px;
    line-height: 49px;
    font-weight: 700;
		color: var(--blue);
		padding-bottom: 50px;
		background: url(/img/pre-line.png) no-repeat center bottom;
	}
	.desc {
		font-size: 19px;
    line-height: 28px;
    letter-spacing: 0.5px;
		margin-top: 20px;
	}
	.video {
		position: relative;
		background: #000000;
    display: flex;
    margin: 50px auto 0;
    max-width: 660px;
    overflow: hidden;
    cursor: pointer;
    width: 100%;
    border: 4px solid #fff;
    box-shadow: 0 2px 9px 0 rgb(0 0 0 / 10%);
    -webkit-box-shadow: 0 2px 9px 0 rgb(0 0 0 / 10%);
		.img-post {
			position: absolute;
			z-index: 2;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-width: 660px;
			max-height: 380px;
			width: 100%;
		}
	}
	.post-desc {
		margin-top: 50px;
    font-weight: 600;
		font-size: 19px;
    line-height: 28px;
    letter-spacing: 0.5px;
	}
	.btn-box {
		display: block;
		max-width: 470px;
		width: 100%;
		margin: 35px auto 0;
		font-size: 17px;
    line-height: 20px;
		font-weight: 600;
		.btn-text {
			margin: 9px 0 18px;
			span {
				color: var(--red);
			}
		}
		.slider {
			position: relative;
			height: 6px;
			background: var(--grayish);
			border-radius: 6px;
			overflow: hidden;
			.tab-move {
				height: 6px;
				width: 50%;
				background: var(--red);
				border-radius: 6px;
			}
		}
	}
}
</style>