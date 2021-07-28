<template>
    <div class="features">
        <div class="container">
            <div class="row">
                <div class="col-md-3" v-for="item in data" :key="item.id">
                    <div class="feature">
                        <img :src="require(`../assets/images/icons/${item.icon}.png`)" :alt="item.title">
                        <h4 class="feature__title">{{item.title}}</h4>
                        <p class="feature__text">{{item.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Features",
    props: {
        data: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped lang="scss">
    @use '../assets/layouts/colors' as c;
    @use '../assets/layouts/fonts' as f;

    .features {
        padding: 100px 0;
        background: c.$light;
    }

    .feature {
        text-align: center;

        @media screen and (max-width: 767px) {
            margin-bottom: 24px;
        }

        &__title {
            font-size: 20px;
            padding-top: 28px;
        }

        &__text {
            color: c.$text;
            font-family: f.$font-secondary;
            font-size: 14px;
            padding-top: 18px;
        }
    }
</style>
