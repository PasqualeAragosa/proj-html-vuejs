<script>

export default {
    name: 'CoursesBox',
    data() {
        return {
            courses: [
                {
                    img: "src/assets/images/courses/course-02-480x298.jpg",
                    price: '$40',
                    text: 'Learning to Write as a Professional Author',
                    lessons: '20 Lessons',
                    students: '50 Students'
                },
                {
                    img: "src/assets/images/courses/stock-full-hd-03-480x298.jpg",
                    price: 'Free',
                    text: 'Customer-centric Info-Tech Strategies',
                    lessons: '24 Lessons',
                    students: '769 Students'
                },
                {
                    img: "src/assets/images/courses/stock-full-hd-04-480x298.jpg",
                    price: '$19',
                    text: 'Open Programming Courses for Everyone: Python',
                    lessons: '17 Lessons',
                    students: '62 Students'
                },
                {
                    img: "src/assets/images/courses/stock-full-hd-06-480x298.jpg",
                    price: '$26',
                    text: 'Academic Listening and Note-taking',
                    lessons: '14 Lessons',
                    students: '67 Students'
                },
                {
                    img: "src/assets/images/courses/course-featured-image-01-480x298.jpg",
                    price: '$39',
                    text: 'Master jQuery in a Short Period of Time',
                    lessons: '6 Lessons',
                    students: '51 Students'
                },
                {
                    img: "src/assets/images/courses/stock-full-hd-05-480x298.jpg",
                    price: '$59',
                    text: 'Introduction to Javascript for Beginners',
                    lessons: '14 Lessons',
                    students: '76 Students'
                },
            ]
        }
    }
}
</script>

<template>
    <div class="courses text-center bg_grey">
        <div class="wrapper">
            <p class="text-uppercase text-secondary">Choose a course to get started</p>
            <h2 class="fs-1 fw-bold">Latest Featured <span class="green fw-lighter">Can Provide</span></h2>
            <div class="container">
                <div class="row">
                    <div class="col-6 d-flex align-items-center flex-wrap text-start my-4" v-for="course in courses">
                        <div class="images">
                            <img :src="course.img" alt="">
                        </div>
                        <!-- /.images -->
                        <div class="details p-4">
                            <span class="price green fw-bold">
                                {{ course.price }}<span v-if="course.price !== 'Free'" class="decimals">.00</span>
                            </span>
                            <!-- /.price -->
                            <div class="text ms-0">
                                <h6 class="fw-bold my-3">
                                    {{ course.text }}
                                </h6>
                            </div>
                            <!-- /.text -->
                            <div class="data text-secondary">
                                <span class="lessons">
                                    <font-awesome-icon icon="fa-regular fa-file" /> {{ course.lessons }}
                                </span>
                                <span class="students mx-3">
                                    <font-awesome-icon icon="fa-regular fa-user" /> {{ course.students }}
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
            <button class="text-white fw-bold  py-3 px-5 border-0 rounded-2 bg_green mt-4">View all courses
                &rarr;</button>
        </div>
        <!-- /.wrapper -->
    </div>
    <!-- /.courses -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables.scss' as *;

.courses {
    padding: 4rem 0;

    .images {
        img {
            width: 200px;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .details {
        width: 280px;
    }

    .price {
        font-size: 1.25rem;

        .decimals {
            font-size: 80%;
        }
    }

    .data span {
        font-size: 0.85rem;
    }
}
</style>