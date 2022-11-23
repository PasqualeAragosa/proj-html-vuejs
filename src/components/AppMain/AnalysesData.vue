<script>

export default {
    name: 'AnalysesData',
    data() {
        return {
            statistics: [
                {
                    num: 1926,
                    text: 'Finished Session',
                },
                {
                    num: 3092,
                    text: 'Enrolled Learns',
                },
                {
                    num: 200,
                    text: 'Online Instructors',
                },
                {
                    num: 100,
                    text: 'Satisfaction Rate',
                },
            ]
        }
    },
    mounted() {
        console.log(this.statistics);
    }
}
</script>

<template>
    <div class="analyses_data">
        <ul class="d-flex justify-content-evenly">
            <li v-for="stat in statistics">
                <h2 class="green text-center fs-1 fw-bold">
                    {{ stat.num }}
                    <span v-if="stat.text === 'Enrolled Learns'">&plus;</span>
                    <span v-if="stat.text === 'Satisfaction Rate'">&percnt;</span>
                </h2>
                <span class="text-center text-uppercase d-block">{{ stat.text }}</span>
            </li>
        </ul>
    </div>
    <!-- /.analyses_data -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

.analyses_data {
    margin: 120px 0;

    span {
        margin-left: -10px;
    }
}
</style>