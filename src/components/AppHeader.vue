<script>
import NavBar from './AppHeader/NavBar.vue';
import JumboTron from './AppHeader/JumboTron.vue';

export default {
    name: 'AppHeader',
    components: {
        NavBar, JumboTron
    }
}
</script>

<template>
    <header>
        <NavBar />
        <JumboTron />
    </header>
</template>

<style lang="scss">

</style>