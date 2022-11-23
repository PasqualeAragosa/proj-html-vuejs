<script>

export default {
    name: 'JumboTron',
}
</script>

<template>
    <div class="jumbotron text-center position-relative">
        <div class="top_jumbo mt-5">
            <h1 class="text-white fw-bold">Learn At Your Own Pace!</h1>
            <p class="text-light my-4">Get teamed up with people of the same will.</p>
            <button class="text-white fw-bold  py-3 px-5 border-0 rounded-2 bg_green">Get started for free</button>
        </div>
        <!-- /.top_jumbo -->


        <div class="bottom_jumbo position-absolute overflow-hidden w-100 d-flex justify-content-center">
            <div class="images_jumbo">

                <div class="center_img position-relative">
                    <img src="../../assets/images/jumbotron/home-6-hero-poster-final.jpg" alt=""
                        class="bg-white p-3 rounded-4">
                </div>
                <!-- /.center_img -->

                <img src="../../assets/images/jumbotron/icon-youtube-play.png" alt=""
                    class="youtube position-absolute bg-transparent">
                <img src="../../assets/images/jumbotron/home-6-hero-left-person.png" alt=""
                    class="left_img h-100 position-absolute bg-transparent">
                <img src="../../assets/images/jumbotron/home-6-hero-right-person-195x300.png" alt=""
                    class="right_img position-absolute bg-transparent">
            </div>
            <!-- /.images_jumbo -->
        </div>
        <!-- /.bottom_jumbo -->
    </div>
    <!-- /.jumbotron -->
</template>

<style lang="scss">
@use '../../assets/scss/variables.scss' as *;

.jumbotron {

    .top_jumbo {
        height: 600px;
    }

    .bottom_jumbo {
        top: 40%;
        z-index: 1;

        .images_jumbo {

            .center_img {
                img {
                    width: 92%;
                }
            }

            .youtube {
                top: 50%;
                left: 50%;
                translate: -50% -50%;
            }

            .left_img {
                left: -0%;
                bottom: 0;
                z-index: -1;
            }

            .right_img {
                right: 7%;
                bottom: -33%;
                z-index: -1;
            }
        }
    }
}
</style>