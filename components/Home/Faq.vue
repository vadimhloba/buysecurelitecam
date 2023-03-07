<template>
  <div class="home-faq">
		<div class="container">
			<img src="/img/arw-down.png" class="arw-down">
			<h1 class="title-up">Frequently Asked Questions</h1>
			<h1 class="title-down">We've Got All The Answers</h1>
  		<div class="faq-slider">
  		  <div v-for="slide in slides" :key="slide.text" class="slide" @click="clickEl">
  		    <div class="text">{{ slide.text }}</div>
  		    <div class="tab-content appear">
  		      <p v-if="slide.content">{{ slide.content }}</p>
  		      <video v-if="slide.video" controls width="100%">
  		        <source :src="slide.video" type="video/mp4">
  		      </video>
  		      <p v-if="slide.content2">{{ slide.content2 }}</p>
  		      <video v-if="slide.video2" controls width="100%">
  		        <source :src="slide.video2" type="video/mp4">
  		      </video>
  		    </div>
  		  </div>
  		</div>
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
  name: 'HomeFaq',
	data() {
    return {
      slides: [
        {
          text: 'How easy is this camera to setup?',
          content: 'Super easy! Have a look in the short video below how the camera bulb can work for you!',
          video: 'https://video.buysecurelitecam.com/faq-video-1.mp4#t=1',
          content2: 'We also recommend watching the full length video below for more details and features.',
          video2: 'https://video.buysecurelitecam.com/Interstitial-video.mp4#t=1'
        },
        {
          text: 'What is the camera resolution?',
          content: '1080p.'
        },
        {
          text: 'Do I need an SD Card to review my footage?',
          content: 'No, you can subscribe to Cloud Services if you don\'t mind the extra monthly subscription fee. However, we do sell SD cards that will hold all your footage that the camera captures.  When the storage is full, it will cycle the storage and record the new footage over the oldest recorded footage, similar to a DVR.'
        },
        {
          text: 'Is this an Outdoor Camera?',
          content: 'This camera can be used indoors or outdoors. You do want to place it in a covered area to avoid the camera from getting completely submerged with rain and the elements.'
        },
        {
          text: 'Does the Light Camera work with both Android and iPhone?',
          content: 'Yes! This camera bulb will work with both Android or iPhone environments. Just scan the QR Code to download the appropriate app.'
        },
        {
          text: 'Can we share our cameras with others?',
          content: 'Yes, you can share your cameras across multiple people and devices using the QR code within the app.'
        },
        {
          text: 'What happens when the power goes out, do I need to reset my settings?',
          content: 'Nope, the camera will store all your settings and your last set position. The camera will automatically recalibrate itself when the power comes back on and default to the last position the admin gave it.'
        },
        {
          text: 'I went through the steps, but I still am having trouble connecting to Wi-Fi. What should I do?',
          content: 'Make sure that you have connected the product to your 2.4g network, rather than your 5g network. This fixes customers issues most of the time.'
        }
      ]
    }
  },
	methods: {
		clickEl(e) {
			const slide = e.target.closest('.slide');
    	slide.querySelector('.text')?.classList.toggle('active');
    	slide.querySelector('.tab-content')?.classList.toggle('active');
  	}
	}
}
</script>

<style lang="scss" scoped>
.home-faq {
	padding: 40px 0 60px;
	text-align: center;
	background: var(--bluelight);
	.arw-down {
		display: block;
		margin: 0 auto 15px;
	}
	.faq-slider {
		max-width: 1030px;
		margin: 40px auto 0;
		display: block;
		text-align: left;
		.slide {
			.text {
				padding: 25px 40px 25px 0;
    		font-size: 20px;
    		line-height: 28px;
				font-weight: 600;
    		letter-spacing: 0.5px;
    		cursor: pointer;
    		border-bottom: 1px solid #d8d9d9;
				background: url(/img/open-btn.png) no-repeat 97% center;
				&.active {
					background: url(/img/close-btn.png) no-repeat 97% center;
				}
			}
			.tab-content {
				padding: 20px 30px 0 0;
				display: none;
				&.active {
					display: block;
				}
				p {
					font-size: 18px;
    			line-height: 28px;
    			letter-spacing: 0.5px;
					margin-bottom: 15px;
				}
			}
		}
	}
	.btn-box {
		margin: 55px auto 0;
	}
}
</style>