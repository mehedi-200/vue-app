<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components:{
    HelloWorld,
  },
}
</script>

<template>
<div class="wrap text-white">
  <p>I am Home Page</p>
  <HelloWorld :msg="'I come from Home page'"/>
</div>
</template>

<style>

</style>