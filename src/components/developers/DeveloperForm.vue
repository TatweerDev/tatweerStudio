<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">Please fulfill this filed</p>
    </div>
    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Please fulfill this filed</p>
    </div>
    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Please fulfill this filed</p>
    </div>
    <div class="form-control" :class="{invalid: !portfolio.isValid}">
      <label for="portfolio">Portfolio URL</label>
      <input
        type="text"
        id="portfolio"
        v-model.trim="portfolio.val"
        @blur="clearValidity('portfolio')"
      />
      <p v-if="!lastName.portfolio">Please fulfill this filed</p>
    </div>
    <div class="form-control" :class="{invalid: !rate.isValid}">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid">Rate is must be a number, greater than 0</p>
    </div>
    <div class="form-control" :class="{invalid: !areas.isValid}">
      <h3>Areas of specialisation</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValidity('areas')">
        <label for="frontend">Frontend development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas.val" @blur="clearValidity('areas')">
        <label for="backend">Backend development</label>
      </div>
      <div>
        <input type="checkbox" id="design" value="design" v-model="areas.val" @blur="clearValidity('areas')">
        <label for="design">Interface  design</label>
      </div>
      <div>
        <input type="checkbox" id="apps" value="apps" v-model="areas" @blur="clearValidity('areas')">
        <label for="apps">Appication development</label>
      </div>
      <p v-if="!areas.isValid">At least one expertise must be selected</p>
    </div>
    <p v-if="!formIsValid">Please input valid info about yourself...</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName:  {
        val: '',
        isValid: true
      },
      description:  {
        val: '',
        isValid: true
      },
      portfolio: {
        val: '',
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      formIsValid: true
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.portfolio.val === '') {
        this.portfolio.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        portfolio: this.portfolio.val,
        rate: this.rate.val,
        areas: this.areas.val
      }
      this.$emit('save-data', formData);
    }
  }
}
</script>

<style scoped>
.form-control {
  color: rgba(236, 236, 236, 0.945);
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #000;
  font: inherit;
  background-color: #ffffff8e;
  border-radius: 5px;
}

input:focus,
textarea:focus {
  background-color: #fdfcafc4;
  outline: none;
  border-color: #c5b314;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: 1px solid #c5b314;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>