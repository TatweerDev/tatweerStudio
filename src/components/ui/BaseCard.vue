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
  max-width: 40rem;
  background: rgba(17, 11, 1, 0.664);
  min-width: 320px;
}

.about {
  background: linear-gradient(148deg, rgb(150, 95, 13) 0%, rgba(206, 173, 7, 0.7) 100%);;
  box-shadow: none;
  color: #fff;
  padding: 1rem 1.5rem 1.5rem 1.5rem;
}

</style>
