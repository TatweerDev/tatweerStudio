<template>
  <div>
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
    <section v-if="!isShown">
      <base-card>
        <header>
          <h2>If you intersted - contact me now!</h2>
          <base-button @click="showForm">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section v-if="isShown">
      <base-card>
        <form @submit.prevent="submitForm">
          <div>
            <label for="email">Your E-Mail</label>
            <input type="email" id="email" v-model.trim="email">
          </div>
          <div>
            <label for="message">Message</label>
            <textarea id="message" rows="5" v-model.trim="message"></textarea>
          </div>
          <p class="errors" v-if="!formIsvalid">Please enter valid email and write your message</p>
          <div class="actions">
            <base-button>Send Message</base-button>
          </div>
        </form>
      </base-card>
    </section>
  </div>
</template>

<script>
import BaseCard from '../../components/ui/BaseCard.vue';
export default {
  components: { BaseCard },
  props: ['id'],
  data() {
    return {
      selectedDev: this.$store.getters['devs/developers'].find(
      developer => developer.id === this.id
    ),
      email: '',
      message: '',
      formIsvalid: true,
      isShown: false
    }
  },
  methods: {
    submitForm() {
      this.formIsvalid = true;
      if (this.email === '' || !this.email.includes('@') || this.message === '') {
        this.formIsvalid = false;
        return;
      }
      this.$store.dispatch('requests/contactDev', {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id
      });
      this.$router.replace('/devs')
    },
    showForm() {
      this.isShown = true
    }
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

form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
  background-color: #ffffff8e;
}

input:focus,
textarea:focus {
  border-color: #c5b314;
  background-color: #fdfcafc4;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>