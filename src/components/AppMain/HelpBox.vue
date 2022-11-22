<script>

export default {
    name: 'HelpBox',
}
</script>

<template>
    <div class="blog">
        <p>Enjoy Reading On MaxCoach</p>
        <h2 class="my-2">Latest on <span>Our Blogs</span></h2>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <!-- /.blog -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

.blog {
    text-align: center;
    background-color: $bg_grey;
    padding: 4rem 0;

    p {
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

    .images_blogs {
        img {
            width: 200px;
            aspect-ratio: 3 / 2;
        }
    }

    .details {
        width: 350px
    }

    .job {
        color: $cb_mountain;
        font-size: 1.25rem;
        font-weight: 600;

    }

    h6 {
        font-weight: 600;
        line-height: 1.75rem;
    }

    .data span {
        font-size: 0.85rem;
        color: $cb_gray;
    }
}
</style>