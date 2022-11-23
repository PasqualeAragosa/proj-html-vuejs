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
    <section class="blog bg_grey text-center">
        <div class="wrapper">
            <p class="text-uppercase text-secondary">Enjoy Reading On MaxCoach</p>
            <h2 class="fs-1 fw-bold">Latest on <span class="green fw-lighter">Our Blogs</span></h2>
            <div class="container">
                <div class="row">
                    <div class="col-4 d-flex align-items-center flex-wrap text-start my-4" v-for="artist in artists">
                        <div class="images_blogs">
                            <img :src="artist.img" alt="">
                        </div>
                        <!-- /.images -->
                        <div class="details py-4">
                            <span class="job text-secondary text-uppercase fs-6">
                                {{ artist.job }}
                            </span>
                            <!-- /.job -->
                            <div class="text_blog">
                                <h6 class="fw-bold mt-2">
                                    {{ artist.text }}
                                </h6>
                            </div>
                            <!-- /.text -->
                            <div class="data text-secondary">
                                <span>
                                    <font-awesome-icon icon="fa-regular fa-file" /> {{ artist.date }}
                                </span>
                                <span class="ms-3">
                                    <font-awesome-icon icon="fa-regular fa-eye" /> {{ artist.views }}
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
        <!-- /.wrapper -->
    </section>
    <!-- /.blog -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

.blog {
    padding: 4rem 0;

    .images_blogs {
        img {
            width: 380px;
        }
    }

    .details {
        width: 350px
    }

    h6 {
        line-height: 1.75rem;
        font-size: 1.2rem;
    }

    .data span {
        font-size: 0.85rem;
    }
}
</style>