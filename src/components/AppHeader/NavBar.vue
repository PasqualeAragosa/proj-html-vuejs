<script>

export default {
    name: 'NavBar',
}
</script>

<template>
    <div class="my_row d-flex justify-content-between">
        <div class="logo">
            <img src="../../assets/images/navbar/light-logo.png" alt="" srcset="">
        </div>
        <!-- /.logo -->
        <nav class="navbar">
            <ul class="d-flex m-0">
                <li>
                    <div class="dropdown">
                        <button class="btn  light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Home
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="btn  light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Pages
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="btn  light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Courses
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="btn  light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Features
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="btn  light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Blog
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="dropdown">
                        <button class="btn light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Shop
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    </div>
                    <!-- /.basket -->
                </li>
                <li>
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-circle-user" />
                    </div>
                </li>
                <li>
                    <div class="input-group flex-nowrap">
                        <input type="search" class="form-control" placeholder="Search..."
                            aria-describedby="addon-wrapping">
                        <span class="input-group-text" id="addon-wrapping">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="magnifying_glass" />
                        </span>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->
    </div>
    <!-- /.my_row -->
</template>

<style lang="scss">
.my_row {
    .logo {
        margin: auto 0;

        img {
            width: 150px;
        }
    }

    .navbar {
        li {
            padding: 0.5rem;
            margin: auto;

            button {
                font-size: 0.9rem;
            }

            input {
                border-radius: 10px;
                padding: 0.5rem;
                border-right: 0px;
            }

            span {
                background-color: white;
                border-radius: 10px;
            }

            .icon {
                font-size: 20px;
                color: white;
            }

            .light {
                color: white;
            }

            .magnifying_glass {
                color: #27ab94;
            }
        }

    }
}
</style>