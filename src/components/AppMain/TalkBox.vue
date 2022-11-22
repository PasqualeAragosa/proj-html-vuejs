<script>

export default {
    name: 'TalkBox',
}
</script>

<template>
    <div class="talk my-5 text-center">
        <h2>Why People Talk About MaxCoach?</h2>
        <div class="details d-flex justify-content-center my-5 align-items-center">
            <div class="images">
                <img src="../../assets/images/testimonial/testimonial-avata-02.jpg" alt="" srcset="">
                <img src="../../assets/images/maxcoach-shape-05.png" alt="" class="shape">
                <span class="circle"></span>
                <!-- /.circle -->
            </div>
            <!-- /.images -->
            <div class="text">
                <h3>
                    I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study
                    portal for people like me.
                </h3>
                <span class="name">Mina Hollace</span>
                <!-- /.name -->
                <span class="description"> <i>/Freelancer</i></span>
                <!-- /.description -->
            </div>
            <!-- /.text -->
        </div>
        <!-- /.details -->
        <div class="sponsor">
            <img src="../../assets/images/talk/client-logo-colored-01.png" alt="">
            <img src="../../assets/images/talk/client-logo-colored-02.png" alt="">
            <img src="../../assets/images/talk/client-logo-colored-03.png" alt="">
            <img src="../../assets/images/talk/client-logo-colored-04.png" alt="">
            <img src="../../assets/images/talk/client-logo-colored-05.png" alt="">
            <img src="../../assets/images/talk/client-logo-colored-06.png" alt="">
        </div>
        <!-- /.sponsor -->
    </div>
    <!-- /.talk -->
</template>

<style lang="scss">
@use '../../assets/scss/variables.scss' as *;

.images {
    position: relative;

    img {
        width: 200px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 50%;
    }

    img.shape {
        width: 130px;
        position: absolute;
        left: 30%;
        bottom: -15%;
        z-index: -1;
    }

    span.circle {
        background-color: saddlebrown;
        width: 70px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        position: absolute;
        left: 10%;
        top: -5%;
        z-index: -1;
    }
}

.text {
    width: 600px;
    margin-left: 4rem;

    h3 {
        text-align: start;
        line-height: 2.5rem;
    }

    span {
        display: block;
        text-align: start;
        margin-top: 2rem;
        text-transform: uppercase;

        &:last-child {
            color: $cb_silver;
            margin-top: 0.5rem;
            text-transform: capitalize;
        }
    }
}

.sponsor {
    img {
        margin: 3rem;
    }
}
</style>