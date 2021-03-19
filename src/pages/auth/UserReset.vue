<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleClose">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Loging in..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Enter your E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <p
          v-if="!formIsValid"
        >Please enter a valid email and password (must be at least 8 characters long).</p>
        <base-button>Reset Password</base-button>
      </form>
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
      formIsValid: true,
      isLoading: false,
      error: null
    }
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@')) 
      {
        this.formIsValid = false;
        return
      }

      this.isLoading = true;

      try {
        await this.$store.dispatch('reset',{
          email: this.email
        });
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try later.';
        this.isLoading = false
      }
      this.isLoading = false
    },
    handleClose() {
      this.error = null;
    },
  }
}
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