<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <FooterIcons/>
                </div>
                <div class="col-md-3">
                    <FooterNavigation :footerMenu="footerMenu"/>
                </div>
                <div class="col-md-3">
                    <FooterClient :footerMenuClient="footerMenuClient"/>
                </div>
                <div class="col-md-3">
                    <FooterContacts />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

import FooterIcons from '@/components/Footer/FooterIcons';
import FooterNavigation from '@/components/Footer/FooterNavigation';
import FooterClient from '@/components/Footer/FooterClient';
import FooterContacts from '@/components/Footer/FooterContacts';
import {menuList, menuClient} from '@/constants/menuLinks';

export default {
    name: 'Footer',
    components: {
        FooterIcons,
        FooterNavigation,
        FooterClient,
        FooterContacts
    },
    data() {
        return {
            footerMenu: menuList,
            footerMenuClient: menuClient
        }
    }
}
</script>

<style lang="scss">
    @use '@/assets/layouts/fonts' as f;
    @use '@/assets/layouts/colors' as c;

    .footer {
        background: c.$primary;
        color: c.$white;
        font-family: f.$font-secondary;
        padding-bottom: 80px;
        padding-top: 80px;

        &__logo {
            padding-bottom: 20px;
        }

        &__socials {
            align-items: center;
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0 0 20px;
        }

        &__social {
            background: c.$white;
            border-radius: 50%;
            height: 30px;
            margin-right: 15px;
            text-align: center;
            width: 30px;

            &:last-child {
                margin-right: 0;
            }
        }

        &__link {
            color: c.$white;
            text-decoration: none;

            &:hover {
                color: c.$white;
                text-decoration: underline;
            }
        }

        &__title {
            font-family: f.$font-primary;
            font-size: 28px;
            font-weight: 300;
            padding-bottom: 32px;
        }

        &__list {
            list-style: none;
            padding-left: 0;
        }

        &__item {
            padding-bottom: 20px;
        }

        &__red {
            color: c.$red;
        }
    }
</style>