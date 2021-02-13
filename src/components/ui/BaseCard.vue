<template>
  <div class="card" :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 18px rgba(184,116,15,1);
  padding: 1rem;
  margin: 2rem auto;
  width: 35rem;
  background: rgba(17, 11, 1, 0.664);
}

.desc {
  background: linear-gradient(148deg, rgb(150, 95, 13) 0%, rgb(206, 173, 7) 100%);;
  box-shadow: 0 2px 18px rgba(255, 255, 255, 0.7);
  color: #fff;
  max-width: 25rem;
}
</style>