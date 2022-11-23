<script>

export default {
    name: 'ServicesBox',
}
</script>

<template>
    <div class="services mb-5">
        <div class="container">
            <div class="row">
                <div class="col-6 d-flex">
                    <div class="box_left">
                        <div class="my_card shadow m-3 position-relative">
                            <div class="p-4">
                                <h5 class="fs-6 fw-bold">Graphic Design</h5>
                                <p class="lh-lg text-secondary">
                                    Have a passion for graphics and arts? Show your talent with confidence and
                                    self-assertiveness.
                                </p>
                            </div>
                            <img src="../../assets/images/services/home-6-service-image-01.png" alt="">
                        </div>
                        <!-- /.my_card -->
                        <div class="my_card shadow m-3">
                            <img src="../../assets/images/services/home-6-service-image-03.png" alt="">
                            <div class="p-4">
                                <h5 class="fs-6 fw-bold">Idea Discussion</h5>
                                <p class="lh-lg text-secondary">
                                    Get teamed up with the specialists who work and teach coding for years at famous
                                    universities.
                                </p>
                            </div>
                        </div>
                        <!-- /.my_card -->
                    </div>
                    <!-- /.cards_left -->
                    <div class="box_right">
                        <div class="my_card shadow m-3 position-relative">
                            <div class="p-4">
                                <h5 class="fs-6 fw-bold">Business Administration</h5>
                                <p class="lh-lg text-secondary">
                                    Learners are encouraged to study the mechanism and structure of system
                                    administration.
                                </p>
                            </div>
                            <img src="../../assets/images/services/home-6-service-image-02.png" alt="">
                        </div>
                        <!-- /.my_card -->
                        <div class="my_card shadow m-3 position-relative">
                            <img src="../../assets/images/services/home-6-service-image-04.png" alt="">
                            <div class="p-4">
                                <h5 class="fs-6 fw-bold">Web Development</h5>
                                <p class="lh-lg text-secondary">
                                    Learn to start building a webpage from scratch. You decide your own pace, course and
                                    speed.
                                </p>
                            </div>
                        </div>
                        <!-- /.my_card -->
                    </div>
                    <!-- /.cards_right -->
                </div>
                <!-- /.col-6 -->
                <div class="col-6 slogan m-auto">
                    <p class="text-uppercase text-secondary">Togheter we can create</p>
                    <h2 class="fs-1 fw-bold">Services We <span class="green fw-lighter">Can Provide</span> For My
                        Clients.
                    </h2>
                    <ul class="mt-4 p-0">
                        <li class="text-secondary lh-lg">
                            <span class="green d-inline-block me-3">
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </span>Select & customize courses to your
                            preferences
                        </li>
                        <li class="text-secondary lh-lg">
                            <span class="green me-3">
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </span>Change the tutor and make arrangements
                        </li>
                        <li class="text-secondary lh-lg">
                            <span class="green me-3">
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </span>Participate in events to join others
                        </li>
                        <li class="text-secondary lh-lg">
                            <span class="green me-3">
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </span>Get the desired certificate delivered at house
                        </li>
                    </ul>
                    <button class="text-white fw-bold  py-3 px-5 border-0 rounded-2 bg_green mt-4">Get started for
                        free</button>
                </div>
                <!-- /.col-6 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </div>
    <!-- /.services -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;


.container {
    .row {
        .my_card {
            height: 370px;

            p {
                font-size: 0.75rem;
            }
        }

        .box_left {

            .my_card:first-child {

                img {
                    position: absolute;
                    bottom: 0;
                }
            }
        }

        .box_right {
            margin-top: 60px;

            img {
                position: absolute;
                bottom: 0%;
                left: 50%;
                translate: -50%;
            }

            .my_card:last-child {

                img {
                    position: absolute;
                    top: 10%;
                    left: 50%;
                    translate: -50%;
                }

                div {
                    position: absolute;
                    bottom: 0%;
                }
            }
        }

        .slogan {
            width: 450px;
        }
    }
}
</style>