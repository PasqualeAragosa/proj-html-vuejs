<script>
import AnalysesBox from './AppMain/AnalysesBox.vue';
import ServicesBox from './AppMain/ServicesBox.vue';
import CoursesBox from './AppMain/CoursesBox.vue';
import TalkBox from './AppMain/TalkBox.vue';
import BlogsBox from './AppMain/BlogsBox.vue';
import HelpBox from './AppMain/HelpBox.vue';
import CertificationBox from './AppMain/CertificationBox.vue';

export default {
    name: 'AppMain',
    components: {
        AnalysesBox, ServicesBox, CoursesBox, TalkBox, BlogsBox, HelpBox, CertificationBox
    }
}
</script>

<template>
    <main id="site_main">
        <div class="wrapper m-auto w-75">
            <AnalysesBox />
            <ServicesBox />
            <CoursesBox />
            <TalkBox />
            <BlogsBox />
            <HelpBox />
            <CertificationBox />
        </div>
        <!-- /.wrapper -->
    </main>
    <!-- /#site_main -->
</template>

<style lang="scss">
#site_main {
    margin-top: 200px;
}
</style>