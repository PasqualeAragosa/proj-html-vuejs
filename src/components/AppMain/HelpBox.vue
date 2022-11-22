<script>

export default {
    name: 'HelpBox',
}
</script>

<template>
    <div class="blog text-center">
        <p>Enjoy Reading On MaxCoach</p>
        <h2 class="my-2">Latest on <span>Our Blogs</span></h2>
        <ul class="d-flex justify-content-center my-4">
            <li class="text-start">
                <font-awesome-icon icon="fa-solid fa-flag" class="help_icon my-3" />
                <h5>Idea Discussion</h5>
                <p>Get teamed up with the specialists who work and teach coding for years at famous universities.</p>
            </li>
            <li class="text-start">
                <font-awesome-icon icon="fa-solid fa-gear" class="help_icon my-3" />
                <h5>Web Development</h5>
                <p>Learn to start building a webpage from scratch. You decide your own pace, course and speed.</p>
            </li>
            <li class="text-start">
                <font-awesome-icon icon="fa-solid fa-life-ring" class="help_icon my-3" />
                <h5>System Administration</h5>
                <p>Learners are encouraged to study the mechanism and structure of system administration.</p>
            </li>
            <li class="text-start">
                <font-awesome-icon icon="fa-solid fa-display" class="help_icon my-3" />
                <h5>Graphic Design</h5>
                <p>Have a passion for graphics and arts? Show your talent with confidence and self-assertiveness.</p>
            </li>
        </ul>
        <img src="../../assets/images/help/home-6-services-image-1024x411.png" alt="" srcset="">
    </div>
    <!-- /.blog -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

.blog {
    padding: 4rem 0;

    p:first-child {
        color: grey;
        text-transform: uppercase;
        font-size: 0.8rem;
    }

    h2 {
        font-weight: 600;

        span {
            color: $cb_mountain;
            font-weight: 100;
        }
    }

    li {
        margin: 2rem;
        width: 270px;

        p {
            color: grey;
            font-size: small;
        }

        .help_icon {
            font-size: 2.5rem;
        }
    }
}
</style>