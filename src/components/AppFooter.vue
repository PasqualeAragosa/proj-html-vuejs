<script>

export default {
    name: 'AppFooter',
}
</script>

<template>
    <footer id="site_footer">
        <div class="wrapper py-5">
            <div class="container">
                <div class="row">
                    <div class="col-6 address">
                        <h5>Address</h5>
                        <ul>
                            <li>382 NE 191st St # 87394 Miami, Fl 33179-3899</li>
                            <li>+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
                            <li>support@maxcoach.com</li>
                        </ul>
                        <div class="web d-flex">
                            <font-awesome-icon icon="fa-brands fa-square-facebook" class="social" />
                            <font-awesome-icon icon="fa-brands fa-twitter" class="social" />
                            <font-awesome-icon icon="fa-brands fa-instagram" class="social" />
                            <font-awesome-icon icon="fa-brands fa-linkedin" class="social" />
                        </div>
                        <!-- /.social -->
                    </div>
                    <!-- /.col-6 -->
                    <div class="col-6 info d-flex">
                        <div class="explore flex-grow-1">
                            <h5>Explore</h5>
                            <ul class="mt-3">
                                <li>Start here</li>
                                <li>Blog</li>
                                <li>About us</li>
                            </ul>
                        </div>
                        <!-- /.explore -->
                        <div class="other flex-grow-1 align-self-center">
                            <ul>
                                <li>Success story</li>
                                <li>Courses</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <!-- /.other -->
                        <div class="information flex-grow-1">
                            <h5>Information</h5>
                            <ul class="mt-3">
                                <li>Membership</li>
                                <li>Purchase guide</li>
                                <li>Privacy policy</li>
                                <li>Terms of services</li>
                            </ul>
                        </div>
                        <!-- /.information -->
                    </div>
                    <!-- /.col-6 -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container -->
            <div class="copyright my-5 text-center">
                &copy; 2020 Maxcoach. All Right Reserved
            </div>
            <!-- /.copyright -->
        </div>
        <!-- /.wrapper -->
    </footer>
    <!-- /#site_footer -->
</template>

<style lang="scss">
@use '../assets/scss/variables.scss' as *;

#site_footer {
    background-color: $bg_grey;

    h5 {
        color: black;
    }

    ul {
        padding: 0;
        margin: 0;
        line-height: 2.5rem;
    }

    .web {
        .social {
            font-size: 2rem;
            margin-right: 1.5rem;
            color: grey;
            margin-top: 1.2rem;
        }
    }
}
</style>