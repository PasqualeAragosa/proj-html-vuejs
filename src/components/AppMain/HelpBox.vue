<script>

export default {
    name: 'HelpBox',
}
</script>

<template>
    <div class="help text-center">
        <div class="wrapper">
            <p class="text-uppercase text-secondary">Wanna trasform your life?</p>
            <h2 class="fs-1 fw-bold">Glad to <span class="green fw-lighter">Help You</span> Learn</h2>
            <ul class="d-flex justify-content-center my-4">
                <li class="text-start">
                    <font-awesome-icon icon="fa-solid fa-flag" class="help_icon my-3" />
                    <h5 class="fw-bold">Idea Discussion</h5>
                    <p class="text-secondary">Get teamed up with the specialists who work and teach coding for years at
                        famous universities.</p>
                </li>
                <li class="text-start">
                    <font-awesome-icon icon="fa-solid fa-gear" class="help_icon my-3" />
                    <h5 class="fw-bold">Web Development</h5>
                    <p class="text-secondary">Learn to start building a webpage from scratch. You decide your own pace,
                        course and speed.</p>
                </li>
                <li class="text-start">
                    <font-awesome-icon icon="fa-solid fa-life-ring" class="help_icon my-3" />
                    <h5 class="fw-bold">System Administration</h5>
                    <p class="text-secondary">Learners are encouraged to study the mechanism and structure of system
                        administration.</p>
                </li>
                <li class="text-start">
                    <font-awesome-icon icon="fa-solid fa-display" class="help_icon my-3" />
                    <h5 class="fw-bold">Graphic Design</h5>
                    <p class="text-secondary">Have a passion for graphics and arts? Show your talent with confidence and
                        self-assertiveness.</p>
                </li>
            </ul>
        </div>
        <!-- /.wrapper -->
        <img src="../../assets/images/help/home-6-services-image-1024x411.png" alt="" srcset="">
    </div>
    <!-- /.blog -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

.help {
    padding: 4rem 0;
    height: 950px;
    background-image: linear-gradient(to bottom, white, #EFF1F4);
    position: relative;

    li {
        margin: 2rem;
        width: 270px;

        p {
            font-size: small;
        }

        .help_icon {
            font-size: 2.5rem;
        }
    }

    img {
        position: absolute;
        bottom: -3%;
        left: 50%;
        translate: -50%;
    }
}
</style>