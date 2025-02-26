<template>
<div class="wrap">
  <router-link class="btn btn-primary btn-brand-primary me-3 mb-3" to="/home">Home</router-link>
  <router-link class="btn btn-primary btn-brand-primary me-3 mb-3" to="/about">About</router-link>
  <router-link class="btn btn-primary btn-brand-primary me-3 mb-3" to="/throttle">Throttle</router-link>
  <router-link class="btn btn-primary btn-brand-primary mb-3" to="/xss">Xss Protection</router-link>
</div>

  <div class="view w-50 m-auto">
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
body{
  background: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
