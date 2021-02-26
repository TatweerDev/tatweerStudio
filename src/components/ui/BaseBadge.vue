<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin: 0.5rem;
}

.Frontend {
  background: linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(242,197,100,1) 100%);
  color: #000;
}

.Backend {
  background: linear-gradient(270deg, rgba(184,116,15,1) 0%, rgba(247,208,8,1) 100%);
  color: white;
}

.Design {
  background: linear-gradient(148deg, rgba(184,116,15,1) 0%, rgba(247,208,8,1) 100%);
  color: white;
}

.Apps {
  background: linear-gradient(270deg, rgba(0,110,23,1) 0%, rgba(0,255,67,1) 100%);
  color: white;
}
</style>