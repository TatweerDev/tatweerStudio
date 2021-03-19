<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #7a5a00;
  border: 1px solid #000;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #b88703;
  border-color: #b88703;
}

.header {
  display: block;
  color: #000;
  align-items: center;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem;
  background-color: transparent;
  border-radius: 0%;
}

.header:hover {
  outline: 1px solid #000;
  background-color: transparent;
}

.pure {
  background-color: #b88703;
  color: #fff;
  border: none;
}

.pure:hover,
.pure:active {
  background-color: #7a5a00;
  border-color: #7a5a00;
}

.white {
  background-color: #fff;
  border-color: #fff;
  color: #000;
}

.outline:hover,
.outline:active {
  background-color: #edd2ff;
}

@media screen and (max-width: 991px) {
  .header {
    font-size: 0.75rem;
  }
}
</style>