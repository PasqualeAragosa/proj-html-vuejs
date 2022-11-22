<script>

export default {
    name: 'BlogsBox',
    data() {
        return {
            artists: [
                {
                    img: "src/assets/images/blogs/artist-blog-03-480x325.jpeg",
                    job: 'Artist',
                    text: 'Brush Strokes Energize Trees in Paintings',
                    date: 'May 15, 2020',
                    views: '688 views'
                },
                {
                    img: "src/assets/images/blogs/artist-blog-01-480x325.jpg",
                    job: 'Artist',
                    text: 'Pocket-Sized Notebooks Hold Miniature Paintings',
                    date: 'May 15, 2020',
                    views: '603 views'
                },
                {
                    img: "src/assets/images/blogs/artist-blog-02-480x325.jpg",
                    job: 'Artist',
                    text: 'Connection Between Self-Portraits and Identity',
                    date: 'May 15, 2020',
                    views: '397 views'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="blog">
        <p>Enjoy Reading On MaxCoach</p>
        <h2 class="my-2">Latest on <span>Our Blogs</span></h2>
        <div class="container">
            <div class="row">
                <div class="col-4 d-flex align-items-center flex-wrap text-start my-4" v-for="artist in artists">
                    <div class="images_blogs">
                        <img :src="artist.img" alt="">
                    </div>
                    <!-- /.images -->
                    <div class="details py-4">
                        <span class="job">
                            {{ artist.job }}
                        </span>
                        <!-- /.job -->
                        <div class="text_blog">
                            <h6>
                                {{ artist.text }}
                            </h6>
                        </div>
                        <!-- /.text -->
                        <div class="data">
                            <span class="date">
                                <font-awesome-icon icon="fa-solid fa-file" /> {{ artist.date }}
                            </span>
                            <span class="views mx-3">
                                <font-awesome-icon icon="fa-solid fa-user" /> {{ artist.views }}
                            </span>
                        </div>
                        <!-- /.data -->
                    </div>
                    <!-- /.details -->
                </div>
                <!-- /.col-6 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
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
            width: 380px;
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
        font-size: 1.2rem;
    }

    .data span {
        font-size: 0.85rem;
        color: $cb_gray;
    }
}
</style>