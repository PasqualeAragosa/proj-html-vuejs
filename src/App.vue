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

.bg_jumbo {
  background-color: $cb_jumbo;
}

.bg_green {
  background-color: $cb_mountain;
}

.green {
  color: $cb_mountain;
}
</style>
