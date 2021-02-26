<template>
  <transition name="scroll">
    <div v-if="isVisible" class="scroll-arrow" @click="scrollUp"></div>
  </transition>
</template>

<script>
export default {
   data () {
    return {
      isVisible: false,
      throttleScroll: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    },
    handleScroll() {
      // console.log('works')
      if(window.pageYOffset >= 300) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    }
  }
}
</script>

<style scoped>
.scroll-arrow {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  background:  rgb(180, 124, 2);
  border: 10px solid rgb(180, 124, 2);
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 330 330'%3E%3Cpath d='M325.606 229.393l-150.004-150a14.997 14.997 0 00-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 00315 255a14.95 14.95 0 0010.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in;
}

.scroll-arrow:hover {
  cursor: pointer;
  background-color: rgb(247,208,8);
  border: 10px solid rgb(247,208,8);
}

.scroll-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.scroll-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.scroll-enter-active {
  transition: all 0.5s ease-out;
}

.scroll-leave-active {
  transition: all 0.5s ease-in;
}

.scroll-enter-to,
.scroll-leave-from {
  opacity: 1;
}
</style>