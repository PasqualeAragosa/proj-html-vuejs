<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader, AppMain, AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />

</template>

<style lang="scss">
@use './assets/scss/variables.scss' as *;

.wrapper {
  width: 75%;
  margin: auto;
}

.bg_jumbo {
  background-color: $cb_jumbo;
}

.bg_green {
  background-color: $cb_mountain;
}

.bg_grey {
  background-color: #F5F7FA;
}

.green {
  color: $cb_mountain;
}
</style>
