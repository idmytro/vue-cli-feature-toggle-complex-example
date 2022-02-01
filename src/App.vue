<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>

      <template v-if="$f('feature/about')">
        | <router-link to="/about">About (feature/about)</router-link>
      </template>

      <template v-if="!$f('feature/about')">
        | <router-link to="/about">About (disabled?)</router-link>
      </template>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    console.log('==', this.$f('feature/about'));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
