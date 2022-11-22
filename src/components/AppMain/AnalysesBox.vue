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
    <div class="analyses">
        <h3>
            Let passion and determination be the guide along the way and develop at your own pace that's
            comfortable.
        </h3>
        <span class="name">Fannie Moreno</span>
        <!-- /.name -->
        <span class="description"> <i>/Founder & CEO</i></span>
        <!-- /.description -->
    </div>
    <!-- /.analyses -->
    <AnalysesData />
</template>

<style lang="scss">
@use '../../assets/scss/variables.scss' as *;

.analyses {
    width: 40%;
    margin: auto;
    text-align: center;
    position: relative;
    margin-bottom: 2rem;

    h3 {
        margin-bottom: 1.5rem;
    }

    span {
        display: block;

        &:last-child {
            color: $cb_silver;
            margin-top: 0.5rem;
        }
    }
}
</style>