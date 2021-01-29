<template>
  <section>
    FILTER
  </section>
  <section>
    <base-card>
      <div>
        <base-button>Refresh</base-button>
        <base-button link to="/register" mode="white">Register as a Developer</base-button>
      </div>
      <ul v-if="hasDevelopers">
        <developer-item 
          v-for="dev in filteredDevs"
          :key="dev.id"
          :id="dev.id"
          :first-name="dev.firstName"
          :last-name="dev.lastName"
          :rate="dev.hourlyRate"
          :areas="dev.areas"
          >
        </developer-item>
      </ul>
      <h3 v-else>There is no Developers found</h3>
    </base-card>
  </section>
</template>

<script>
import DeveloperItem from '../../components/developers/DeveloperItem.vue'
export default {
  components: {
    DeveloperItem
  },
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