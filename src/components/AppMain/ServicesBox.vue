<script>

export default {
    name: 'ServicesBox',
}
</script>

<template>
    <div class="services my-5">
        <div class="container">
            <div class="row">
                <div class="col-6 d-flex left">
                    <div class="design">
                        <div class="my_card shadow m-3">
                            <div class="top_text p-4">
                                <h5>Graphic Design</h5>
                                <p>
                                    Have a passion for graphics and arts? Show your talent with confidence and
                                    self-assertiveness.
                                </p>
                            </div>
                            <!-- /.top_text -->
                            <img src="../../assets/images/services/home-6-service-image-01.png" alt="">
                        </div>
                        <!-- /.my_card -->
                        <div class="my_card shadow m-3">
                            <img src="../../assets/images/services/home-6-service-image-03.png" alt="">
                            <div class="top_text p-4">
                                <h5>Idea Discussion</h5>
                                <p>
                                    Get teamed up with the specialists who work and teach coding for years at famous
                                    universities.
                                </p>
                            </div>
                        </div>
                        <!-- /.my_card -->
                    </div>
                    <!-- /.design -->
                    <div class="business">
                        <div class="my_card shadow m-3">
                            <div class="top_text p-4">
                                <h5>Business Administration</h5>
                                <p>
                                    Learners are encouraged to study the mechanism and structure of system
                                    administration.
                                </p>
                            </div>
                            <img src="../../assets/images/services/home-6-service-image-02.png" alt="">
                        </div>
                        <!-- /.my_card -->
                        <div class="my_card shadow m-3">
                            <img src="../../assets/images/services/home-6-service-image-04.png" alt="">
                            <div class="top_text p-4">
                                <h5>Web Development</h5>
                                <p>
                                    Learn to start building a webpage from scratch. You decide your own pace, course and
                                    speed.
                                </p>
                            </div>
                        </div>
                        <!-- /.my_card -->
                    </div>
                    <!-- /.business -->
                </div>
                <!-- /.col-6 -->
                <div class="col-6 right">
                    <p class="grey">Togheter we can create</p>
                    <h2>Services We <span class="green">Can Provide</span> For My Clients.</h2>
                    <ul class="p-0">
                        <li class="grey">
                            <span class="green">
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </span>Select & customize courses to your
                            preferences
                        </li>
                        <li class="grey">
                            <span class="green">
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </span>Cange the tutor and make arrangements
                        </li>
                        <li class="grey">
                            <span class="green">
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </span>Participate in events to join others
                        </li>
                        <li class="grey">
                            <span class="green">
                                <font-awesome-icon icon="fa-solid fa-check" />
                            </span>Get the desired certificate delivered at house
                        </li>
                    </ul>
                    <button>Get started for free</button>
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
    width: 70%;
    margin: auto;

    .row {
        .left {
            .my_card {
                height: 370px;
            }

            .business {
                margin-top: 60px;

                .my_card:first-child {
                    position: relative;

                    img {
                        position: absolute;
                        bottom: 0%;
                        left: 50%;
                        translate: -50%;
                    }
                }

                .my_card:last-child {
                    position: relative;

                    img {
                        position: absolute;
                        top: 10%;
                        left: 50%;
                        translate: -50%;
                    }

                    .top_text {
                        position: absolute;
                        bottom: 0%;
                    }
                }

            }

            p {
                font-size: 0.75rem;
                line-height: 1.5rem;
                color: $mt_corduroy;
            }

            h5 {
                font-size: 1rem;
            }
        }

        .right {
            margin: auto;
            width: 450px;

            p {
                text-transform: uppercase;
            }

            h2 {
                font-size: 2.5rem;
            }

            ul {
                margin-top: 2rem;
            }

            li {
                line-height: 2.5rem;
            }

            span {
                margin-right: 0.5rem;
            }

            button {
                background-color: $cb_mountain;
                color: $cb_light;
                padding: 0.5rem 2rem;
                border: 0;
                border-radius: 5px;
            }
        }
    }

    .green {
        color: $cb_mountain;
    }

    .grey {
        color: $cb_gray;
    }
}
</style>