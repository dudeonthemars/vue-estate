<template>
    <header class="header">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand logo" href="/"><img src="@/assets/images/icons/logo.png" alt="logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-for="(menu, index) in headerMenuList" :key="index">
                            <router-link class="nav-link active" aria-current="page" :to="menu.path">{{menu.name}}</router-link>
                        </li>
                    </ul>
                    <div class="icons">
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/icons/f.png" alt="Facebook">
                        </a>
                        <a href="http://pinterest.com" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/icons/p.png" alt="Pinterest">
                        </a>
                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/icons/insta.png" alt="Insta">
                        </a>
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/icons/g+.png" alt="Google">
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import {menuList} from '@/constants/menuLinks'
export default {
    name: 'Header',
    props: {
        msg: String
    },
    data() {
        return {
            headerMenuList: menuList,
        }
    }
}
</script>

<style lang="scss">
    @use '@/assets/layouts/fonts' as f;
    @use '@/assets/layouts/colors' as c;

    .header {
        margin-bottom: 90px;

        @media screen and (max-width: 768px) {
            margin-bottom: 95px;
        }
    }

    .logo {
        margin-right: 180px;

        @media screen and (max-width: 768px) {
            margin-right: 50px;
        }
    }

    .navbar {
        background: c.$white;
        padding-bottom: 0;
        padding-top: 0;

        @media screen and (max-width: 768px) {
            padding-bottom: 20px;
            padding-top: 20px;
        }
    }

    .nav-item {
        align-items: center;
        display: flex;
        font-family: f.$font-secondary;
        font-size: 18px;
        height: 90px;
        padding: 0 22px;

        &:hover {
            background: c.$grey;
        }
    }

    .icons {
        a {
            border-radius: 50%;
            border: 1px solid c.$grey;
            display: inline-block;
            height: 30px;
            line-height: 30px;
            margin-right: 10px;
            text-align: center;
            width: 30px;
        }
    }
</style>
