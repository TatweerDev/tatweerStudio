<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleClose">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isSuccess" title="Success!" @close="handleRedirect">
      <p>Thank you for registering. Check out your e-mail, and confirm authorisation. Then login</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password1">Password</label>
          <input type="password" id="password1" v-model.trim="password1" />
        </div>
        <div class="form-control">
          <label for="password2">Confirm Password</label>
          <input type="password" id="password2" v-model.trim="password2" />
        </div>
        <p
          v-if="!formIsValid"
        >Please enter a valid email and password (must be at least 8 characters long).</p>
        <base-button>Sign up</base-button>
      </form>
      <div>
        <span>If you already signed on our site, just
          <router-link to="/login">login instead</router-link>
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
      password1: '',
      password2: '',
      formIsValid: true,
      isLoading: false,
      error: null,
      isSuccess: false
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password1.length < 8 ||
        this.password1 !== this.password2
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      try {
        await this.$store.dispatch('signup', {
          email: this.email,
          password: this.password1,
          re_password: this.password2,
        });
        this.isSuccess = true;
      } catch (err) {
        this.isLoading = false;
        this.error = err.message || 'Failed to authenticate, try later.';
      }

      this.isLoading = false;
    },
    handleClose() {
      this.error = null;
    },
    handleRedirect() {
      this.isSuccess = false;
      const redirectUrl = '/' + (this.$route.query.redirect || 'login');
      this.$router.replace(redirectUrl);
    }
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