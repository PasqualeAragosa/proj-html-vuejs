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
  background-color: $jumbo;
}

.bg_green {
  background-color: $mountain;
}

.bg_grey {
  background-color: $grey;
}

.green {
  color: $mountain;
}

.grey {
  color: $grey;
}
</style>
