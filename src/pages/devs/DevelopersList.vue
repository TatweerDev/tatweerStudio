<template>
  <div> 
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <developer-filter @change-filter="setFilters"></developer-filter>
    </section>
    <section>
      <base-card>
        <div>
          <base-button @click="loadDevelopers(true)">Refresh</base-button>
          <base-button v-if="!isDev && !isLoading" link to="/register" mode="white">Register as a Developer</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
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
  </div>
</template>

<script>
import DeveloperItem from '../../components/developers/DeveloperItem.vue';
import DeveloperFilter from '../../components/developers/DevloperFilter.vue'
export default {
  components: {
    DeveloperItem,
    DeveloperFilter
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        design: true,
        apps: true
      }
    }
  },
  computed: {
    filteredDevs() {
      const devs = this.$store.getters['devs/developers'];
      return devs.filter(dev => {
        if (this.activeFilters.frontend && dev.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && dev.areas.includes('backend')) {
          return true
        }
        if (this.activeFilters.design && dev.areas.includes('design')) {
          return true
        }
        if (this.activeFilters.apps && dev.areas.includes('apps')) {
          return true
        }
        return false
      })
    },
    hasDevelopers() {
      return !this.isLoading && this.$store.getters['devs/hasDevelopers'];
    },
     isDev() {
      return this.$store.getters['devs/isDev'];
    }
  },
  created() {
    this.loadDevelopers();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadDevelopers(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('devs/loadDevelopers', {forceRefresh: refresh});
      } catch (error) {
        this.error = error.message || 'Something went wrong...'
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
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