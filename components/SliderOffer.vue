<template>
	<div class="slider" ref="slider">
		<div class="tab-move" :style="{ width: counterLoad + '%' }"></div>
	</div>
</template>

<script scoped>
export default {
	name: 'SliderOffer',
	data() {
    return {
      values: [100, 60, 20],
			currentValueIndex: 0,
    };
  },
	methods: {
    updateCounterValue() {
      if (++this.currentValueIndex === this.values.length) clearInterval(this.interval);
    },
  },
	computed: {
    counterLoad() {
      return this.values[this.currentValueIndex];
    },
  },
	mounted() {
		this.interval = setInterval(this.updateCounterValue, 1000);
    this.animationTimeout = setTimeout(() => clearInterval(this.interval), 4000);
  },
}
</script>

<style lang="scss" scoped>
.slider {
	position: relative;
	height: 6px;
	background: var(--grayish);
	border-radius: 6px;
	overflow: hidden;
	.tab-move {
		height: 6px;
		background: var(--red);
		border-radius: 6px;
		transition: all ease 1s;
	}
}
 </style>