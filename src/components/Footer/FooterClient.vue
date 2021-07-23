<template>
    <div>
        <h3 class="footer__title">
            For clients
        </h3>
        <ul class="footer__list">
            <li class="footer__item" v-for="({name, path}, index) in footerMenuClient" :key="index">
                <router-link class="footer__link" :to="path">{{name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        footerMenuClient: {
            type: Array,
            required: true
        }
    }
}
</script>
