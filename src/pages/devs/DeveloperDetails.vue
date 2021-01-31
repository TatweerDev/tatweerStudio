<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
      <p>{{ description }}</p>
      <h3>Click here to see <a :href="portfolio">My portfolio</a></h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>If you intersted - contact me now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedDev: null
    };
  },
  computed: {
    fullName() {
      return this.selectedDev.firstName + ' ' + this.selectedDev.lastName;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
    areas() {
      return this.selectedDev.areas;
    },
    rate() {
      return this.selectedDev.hourlyRate;
    },
    portfolio() {
      return this.selectedDev.portfolio;
    },
    description() {
      return this.selectedDev.description;
    }
  },
  created() {
    this.selectedDev = this.$store.getters['devs/developers'].find(
      developer => developer.id === this.id
    );
  }
}
</script>

<style scoped>
a {
  color: rgb(243, 219, 4);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

p {
  text-shadow: 0px 0px 13px rgb(0 0 0 / 89%);
}
</style>