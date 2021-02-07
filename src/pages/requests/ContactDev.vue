<template>
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
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsvalid: true,
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
        developerId: this.$route.params.id
      });
      this.$router.replace('/devs')
    }
  }
}
</script>

<style scoped>
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