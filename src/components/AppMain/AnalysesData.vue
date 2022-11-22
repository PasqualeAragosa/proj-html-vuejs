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
    <div class="content">
        <ul class="d-flex justify-content-evenly">
            <li v-for="stat in statistics">
                <h2 class="num">
                    {{ stat.num }}
                    <span v-if="stat.text === 'Enrolled Learns'">&plus;</span>
                    <span v-if="stat.text === 'Satisfaction Rate'">&percnt;</span>
                </h2>
                <!-- /.num -->
                <span class="details">{{ stat.text }}</span>
                <!-- /.details -->
            </li>
        </ul>
    </div>
    <!-- /.content -->
</template>

<style lang="scss">
@use '../../assets/scss/variables.scss' as *;

.content {
    margin: 120px 0;

    .num {
        text-align: center;
        font-size: 2.5rem;
        color: $mt_jungle;
        font-weight: 600;

        span {
            margin-left: -10px;
        }
    }

    .details {
        display: block;
        text-align: center;
        text-transform: uppercase;
    }
}
</style>