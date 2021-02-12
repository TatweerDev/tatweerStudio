<template>
    <div>
        <lottie :options="defaultOptions" :height="80" :width="230" v-on:animCreated="handleAnimation"/>
    </div>
</template>

<script>

  import animationData from '../../assets/animation.json';

  export default {
    name: 'app',
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1
      }
    },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },
    }
  }
</script>
