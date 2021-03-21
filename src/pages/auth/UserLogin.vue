<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Loging in..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p
          v-if="!formIsValid"
        >Please enter a valid email and password (must be at least 8 characters long).</p>
        <base-button>Log In</base-button>
      </form>
      <div>
        <span>If you forgot your password click here to 
          <router-link to="/reset">Reset</router-link>
        </span>
      </div>
    </base-card>
  </div>
</template>

<script>

import BaseButton from '../../components/ui/BaseButton.vue';
export default {
  components: { BaseButton },
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 8
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      try {
        await this.$store.dispatch('login',{
          email: this.email,
          password: this.password,
        });
        const redirectUrl = '/' + (this.$route.query.redirect || 'devs');
        this.$router.replace(redirectUrl);
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try later.';
        this.isLoading = false;
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
a {
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(184,116,15);
}

form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 1rem 0;
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
}

input:focus,
textarea:focus {
  border-color: rgb(184,116,15);
  background-color: #ffffff9f;
  outline: none;
}
</style>