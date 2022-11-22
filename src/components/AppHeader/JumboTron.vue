<script>

export default {
    name: 'JumboTron',
}
</script>

<template>
    <div class="jumbotron">
        <div class="top">
            <h1>Learn At Your Own Pace!</h1>
            <p>Get teamed up with people of the same will.</p>
            <button>Get started for free</button>
        </div>
        <!-- /.top -->
        <img src="../../assets/images/jumbotron/home-6-hero-left-person.png" alt="" class="left_person">
        <div class="bottom">
            <div class="video">
                <img src="../../assets/images/jumbotron/icon-youtube-play.png" alt="" class="youtube">
                <img src="../../assets/images/jumbotron/home-6-hero-poster-final.jpg" alt="">
                <img src="../../assets/images/jumbotron/home-6-hero-right-person-195x300.png" alt=""
                    class="right_person">
            </div>
            <!-- /.video -->
        </div>
        <!-- /.bottom -->
    </div>
    <!-- /.jumbotron -->
</template>

<style lang="scss">
@use '../../assets/scss/variables.scss' as *;

.jumbotron {
    text-align: center;
    position: relative;

    .top {
        color: white;
        margin-top: 3rem;
        height: 600px;

        h1 {
            font-weight: bold;
        }

        p {
            font-size: 0.90rem;
            margin: 1.25rem;
        }

        button {
            background-color: $cb_mountain;
            color: $cb_light;
            padding: 0.5rem 2rem;
            border: 0;
            border-radius: 5px;
        }
    }

    .left_person {
        background-color: transparent;
        height: 70%;
        position: absolute;
        left: -6%;
        bottom: -14%;
        z-index: 1;
    }

    .bottom {
        width: 100%;
        position: absolute;
        top: 40%;
        left: 50%;
        translate: -50%;
        overflow-y: hidden;
        z-index: 1;

        .video {
            width: 100%;

            .youtube {
                background-color: transparent;
                position: absolute;
                top: 40%;
                left: 50%;
                translate: -50%;
            }

            img {
                background-color: white;
                border-radius: 20px;
                padding: 1rem;
            }

            .right_person {
                background-color: transparent;
                position: absolute;
                right: 0;
                bottom: -35%;
                z-index: -1;
            }
        }
    }
}
</style>