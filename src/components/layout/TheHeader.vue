<template>
  <header>
    <nav>
      <h1><router-link to="/">Tatweer Development Studio</router-link></h1>
      <ul>
        <li>
          <router-link to="/devs">All developers</router-link>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background: linear-gradient(148deg, rgba(184,116,15,1) 0%, rgba(247,208,8,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #000;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #000;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
  text-shadow: 0px 0px 13px rgb(0 0 0 / 89%);
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
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>