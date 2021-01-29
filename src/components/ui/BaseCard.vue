<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 18px rgba(184,116,15,1);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  background-color: rgba(17, 11, 1, 0.664);
}
</style>