<template>
  <div class="wrapper">
    <base-scroll></base-scroll>
    <base-dialog :v-show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <div class="description">
      <base-card mode="about">
        <desc-item></desc-item>
      </base-card>
    </div>
    <div class="devs">
      <section>
        <developer-filter @change-filter="setFilters" ></developer-filter>
      </section>
      <section>
        <base-card>
          <div>
            <base-button v-if="isLoggedIn && !isRegistered && !isLoading" link to="/register" mode="white">Register as a Developer</base-button>
          </div>
          <div>
            <base-button v-if="isLoggedIn && isRegistered && !isLoading" link to="/requests" mode="white">My messages</base-button>
          </div>
          <div v-if="isLoading">
            <base-spinner></base-spinner>
          </div>
          <ul v-else-if="hasDevelopers">
            <developer-item 
              v-for="dev in filteredDevs"
              :key="dev.id"
              :id="dev.id"
              :first-name="dev.first_name"
              :last-name="dev.last_name"
              :rate="dev.hourly_rate"
              :areas="dev.areas"
              >
            </developer-item>
          </ul>
          <h3 v-else>There is no Developers found</h3>
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
      isLoading: false,
      error: null,
      scroll: false,
      activeFilters: {
        frontend: true,
        backend: true,
        design: true,
        apps: true,
      }
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAthenticated;
    },
    filteredDevs() {
      const developers = this.$store.getters['devs/developers'];
      return developers.filter(dev => {
        if (this.activeFilters.frontend && dev.areas.includes('Frontend')) {
          return true
        }
        if (this.activeFilters.backend && dev.areas.includes('Backend')) {
          return true
        }
        if (this.activeFilters.design && dev.areas.includes('Design')) {
          return true
        }
        if (this.activeFilters.apps && dev.areas.includes('Apps')) {
          return true
        }
        return false
      })
    },
    hasDevelopers() {
      return !this.isLoading && this.$store.getters['devs/hasDevelopers'];
    },
     isRegistered() {
      return localStorage.isRegistered
    }
  },
  mounted() {
    this.loadDevelopers();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadDevelopers() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('devs/loadDevelopers');
      } catch (error) {
        this.error = error.message || 'Something went wrong...(';
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
.description {
  width: 28rem;
}
.devs {
  width: 38rem;
}

.wrapper {
  display: flex;
  margin: 0 60px;
  justify-content: space-between;
}

@media screen and (max-width: 1200px) {
  .description {
    width: 23rem;
  }

  .devs {
    width: 30rem;
    margin-left: 10px;
  }
}

@media screen and (max-width: 991px) {
  .devs,
  .description {
    width: 40rem;
    margin: 1rem auto;
  }

  .wrapper {
    flex-direction: column-reverse;
    align-items: center;
  }
}

@media screen and (max-width: 767px) {
  .devs,
  .description {
    width: auto;
    margin: 1rem auto;
  }
}

@media screen and (max-width: 480px) {
  .wrapper {
    margin: 0 20px;
  }
}

@media screen and (max-width: 350px) {
  .wrapper {
    margin: 0;
  }
}

</style>