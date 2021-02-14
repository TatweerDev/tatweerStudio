<template>
  <header>
    <nav>
      <router-link class="animation" to="/">
        <logo-animation ></logo-animation>
      </router-link>
      <router-link to="/">
        <h1>Tatweer Development Studio</h1>
      </router-link>
      <ul class="nav__list">
        <li>
          <router-link to="/devs">All developers</router-link>
        </li>
        <li>
          <router-link to="/auth">Login</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import LogoAnimaition from './LogoAnimation.vue'
export default {
  components: {
    'logo-animation' : LogoAnimaition
  }  
}
</script>

<style scoped>
header {
  width: 100%;
  height: 6.6rem;
  background: linear-gradient(148deg, rgba(184,116,15,1) 0%, rgba(247,208,8,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
}


h1 {
  color: white;
  margin: 0 auto 0 1rem;
  text-shadow: 0px 0px 13px rgb(0 0 0 / 89%);
  align-items: center;
  padding: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.nav__list {
  list-style: none;
  margin: 0 0 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__list li a {
  color: #000;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  margin: 0 0.5rem;
}

.nav__list li a:active,
.nav__list li a:hover,
.nav__list li a.router-link-active {
  border: 1px solid #000;
}

@media screen and (max-width: 991px) {
  h1 {
    margin: 0;
    font-size: 1rem;
  }

  header a {
    padding: 0.5rem;
    font-size: 0.75rem;
  }
}

@media screen and (max-width: 767px) {
  header {
    height: 15rem;
  }

  header nav{
    flex-direction: column;
  }

  h1 {
    text-align: center;
    margin: 0;
    font-size: 1.5rem;
  }

  .nav__list {
    margin: auto;
  }

}
</style>