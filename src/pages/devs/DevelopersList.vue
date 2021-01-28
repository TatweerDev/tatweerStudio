<template>
  <section>
    FILTER
  </section>
  <section>
    <div>
      <button>Refresh</button>
      <router-link to="/register">Register as a Developer</router-link>
    </div>
    <ul v-if="hasDevelopers">
      <li v-for="dev in filteredDevs" :key="dev.id">
        {{ dev.firstName }}
      </li>
    </ul>
    <h3 v-else>There is no Developers found</h3>
  </section>
</template>

<script>
export default {
  computed: {
    filteredDevs() {
      return this.$store.getters['devs/developers'];
    },
    hasDevelopers() {
      return this.$store.getters['devs/hasDevelopers'];
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>