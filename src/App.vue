<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/ar">AR</router-link> |
      <router-link to="/blocks">Blocks</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Lora", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #a1a1a1;
}
</style>
