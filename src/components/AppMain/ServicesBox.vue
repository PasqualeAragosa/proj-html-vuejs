<script>

export default {
    name: 'ServicesBox',
    // data() {
    //     return {
    //         cards: [
    //             {
    //                 img: '../../assets/images/services/home-6-service-image-01.png',
    //                 job: 'Graphic Design',
    //                 text: 'Have a passion for graphics and arts? Show your talent with confidence and self-assertiveness.'
    //             },
    //             {
    //                 img: '../../assets/images/services/home-6-service-image-02.png',
    //                 job: 'Graphic Design',
    //                 text: 'Have a passion for graphics and arts? Show your talent with confidence and self-assertiveness.'
    //             }
    //         ]
    //     }
    // }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-6 d-flex left">
                <div class="design">
                    <div class="my_card shadow m-3">
                        <div class="top_text p-4">
                            <h4>Graphic Design</h4>
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
                            <h4>Graphic Design</h4>
                            <p>
                                Have a passion for graphics and arts? Show your talent with confidence and
                                self-assertiveness.
                            </p>
                        </div>
                    </div>
                    <!-- /.my_card -->
                </div>
                <!-- /.design -->
                <div class="business">
                    <div class="my_card shadow m-3">
                        <div class="top_text p-4">
                            <h4>Graphic Design</h4>
                            <p>
                                Have a passion for graphics and arts? Show your talent with confidence and
                                self-assertiveness.
                            </p>
                        </div>
                        <img src="../../assets/images/services/home-6-service-image-02.png" alt="">
                    </div>
                    <!-- /.my_card -->
                    <div class="my_card shadow m-3">
                        <img src="../../assets/images/services/home-6-service-image-04.png" alt="">
                        <div class="top_text p-4">
                            <h4>Graphic Design</h4>
                            <p>
                                Have a passion for graphics and arts? Show your talent with confidence and
                                self-assertiveness.
                            </p>
                        </div>
                    </div>
                    <!-- /.my_card -->
                </div>
                <!-- /.business -->
            </div>
            <!-- /.col-6 -->
            <div class="col-6 right"></div>
            <!-- /.col-6 -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</template>

<style lang="scss">
.container {
    width: 70%;
    margin: auto;

    .row {
        .left {
            .design {}

            .business {
                margin-top: 60px;
            }
        }
    }
}
</style>