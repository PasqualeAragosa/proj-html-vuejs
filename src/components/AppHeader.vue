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
    <header id="site_header">
        <div class="wrapper">
            <NavBar />
            <!-- NavBar -->
            <JumboTron />
            <!-- JumboTron -->
        </div>
        <!-- /.wrapper -->
    </header>
    <!-- /#site_header -->
</template>

<style lang="scss">
@use '../assets/scss/variables.scss' as *;

#site_header {
    background-color: $cb_port;

    .wrapper {
        width: 80%;
        margin: auto;
    }
}
</style>