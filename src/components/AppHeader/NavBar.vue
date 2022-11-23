<script>

export default {
    name: 'NavBar',
}
</script>

<template>
    <div class="navbar d-flex justify-content-between">
        <div class="logo">
            <img src="../../assets/images/navbar/light-logo.png" alt="" srcset="">
        </div>
        <!-- /.logo -->
        <nav class="menu">
            <ul class="d-flex m-0">
                <li class="p-2 m-auto">
                    <button class="btn text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Home
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="chevron" />
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="p-2 m-auto">
                    <button class="btn text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="chevron" />
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="p-2 m-auto">
                    <button class="btn text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Courses
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="chevron" />
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="p-2 m-auto">
                    <button class="btn text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Features
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="chevron" />
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="p-2 m-auto">
                    <button class="btn  text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="chevron" />
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="p-2 m-auto">
                    <button class="btn text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop
                        <font-awesome-icon icon="fa-solid fa-chevron-down" class="chevron" />
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="p-2 m-auto">
                    <div class="text-white fs-6">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    </div>
                    <!-- /.basket -->
                </li>
                <li class="p-2 m-auto">
                    <div class="text-white fs-6">
                        <font-awesome-icon icon="fa-regular fa-user" />
                    </div>
                </li>
                <li class="p-2 m-auto">
                    <div class="input-group flex-nowrap">
                        <input type="search" class="form-control p-2 border-end-0 rounded-start-3"
                            placeholder="Search..." aria-describedby="addon-wrapping">
                        <span class="input-group-text rounded-end-3 bg-white" id="addon-wrapping">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="magnifying_glass" />
                        </span>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- /.menu -->
    </div>
    <!-- /.navbar -->
</template>

<style lang="scss">
@use '../../assets/scss/variables.scss' as *;

.logo {
    margin: auto 0;

    img {
        width: 150px;
    }
}

.navbar .menu {
    li {

        .magnifying_glass {
            color: $cb_mountain;
        }

        .chevron {
            font-size: 10px;
        }
    }

}
</style>