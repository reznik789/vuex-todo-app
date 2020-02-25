<template>
  <div id="app">    
    <Header />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header';
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arrial Narrow", Arial, Helvetica, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
  margin: 0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
