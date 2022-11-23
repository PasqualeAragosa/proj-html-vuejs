<script>
import AnalysesData from '../AppMain/AnalysesData.vue';

export default {
    name: 'AnalysesBox',
    components: {
        AnalysesData
    }
}
</script>

<template>
    <div class="wrapper">
        <section class="analyses w-75 m-auto text-center">
            <h3 class="mb-4">
                Let passion and determination be the guide along the way and develop at your own pace that's
                comfortable.
            </h3>
            <span class="fw-bold d-block text-uppercase">Fannie Moreno</span>
            <span class="fw-bold mt-2 text-secondary d-block fst-italic">/Founder & CEO</span>
        </section>
        <!-- /.analyses -->
        <AnalysesData />
        <!-- AnalysesData -->
    </div>
    <!-- /.wrapper -->
</template>

<style lang="scss" scoped>

</style>