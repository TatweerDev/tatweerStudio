<template>
  <div class="wrapper">
    <div>
      <base-card mode="desc">
        <desc-item></desc-item>
      </base-card>
    </div>
    <div>
      <section>
        <developer-filter @change-filter="setFilters"></developer-filter>
      </section>
      <section>
        <base-card>
          <div>
            <base-button @click="loadDevelopers">Refresh</base-button>
            <base-button v-if="!isDev" link to="/register" mode="white">Register as a Developer</base-button>
          </div>
          <ul >
            <developer-item 
              v-for="dev in developers"
              :key="dev.id"
              :id="dev.id"
              :first-name="dev.firstName"
              :last-name="dev.lastName"
              :rate="dev.hourlyRate"
              :areas="dev.areas"
              >
            </developer-item>
          </ul>
          <!-- <h3 v-else>There is no Developers found</h3> -->
        </base-card>
      </section>
    </div>
  </div>
</template>

<script>
import DeveloperItem from '../../components/developers/DeveloperItem.vue';
import DeveloperFilter from '../../components/developers/DevloperFilter.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import DescItem from '../../components/layout/TheDescripton.vue';
export default {
  components: {
    DeveloperItem,
    DeveloperFilter,
    BaseCard,
    DescItem
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        design: true,
        apps: true,
      },
      developers: this.$store.getters['devs/developers']
    }
  },
  computed: {
    filteredDevs() {
      const developers = this.$store.getters['devs/developers'];
      return developers.filter(dev => {
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
      return this.$store.getters['devs/hasDevelopers'];
    },
     isDev() {
      return this.$store.getters['devs/isDev'];
    }
  },
  created() {
    this.loadDevelopers()
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadDevelopers() {
      try {
        await this.$store.dispatch('devs/loadDevelopers');
      } catch (error) {
        this.error = error.message || 'Something went wrong'
      }
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

.wrapper {
  display: flex;
  margin: 0 60px;
  justify-content: space-between;
}

</style>