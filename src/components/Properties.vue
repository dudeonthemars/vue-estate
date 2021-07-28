<template>
    <div class="properties">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h2 class="title text-center">
                        Featured <span>Properties</span>
                    </h2>
                    <div class="divider divider_center"></div>
                    <p class="text-center subtitle">
                        Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar.
                    </p>
                </div>
            </div>
            <div class="properties__items">
                <div class="row">
                    <div class="col-md-4" v-for="property in propertiesData" :key="property.id">
                        <div class="properties__item">
                            <a href="#" target="_blank" class="properties__link">
                                <img :src="require(`@/assets/images/${property.image}.png`)" :alt="property.title" class="properties__img">
                                <h4 class="properties__text">{{property.title}}</h4>
                                <p class="properties__sub">{{property.subtitle}}</p>
                                <p class="properties__price">$ {{property.price}}</p>
                                <ul class="properties__desc">
                                    <li class="properties__desc-item">{{property.desc.square}} Sq Ft</li>
                                    <li class="properties__desc-item">{{property.desc.rooms}} Bedrooms</li>
                                    <li class="properties__desc-item">{{property.desc.bath}} Bathroom</li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button class="btn btn-danger text-uppercase" type="button">All Properties</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Properties",
    props: {
        propertiesData: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
    @use '../assets/layouts/colors' as c;
    @use '../assets/layouts/fonts' as f;

    .properties {
        background: c.$light2;
        padding-bottom: 95px;
        padding-top: 95px;

        &__items {
            margin-top: 60px;
            margin-bottom: 25px;
        }

        &__item {
            background: c.$white;
            text-align: center;
            margin-bottom: 25px;
            border: 1px solid c.$border;
            border-radius: 3px;
        }

        &__img {
            width: 100%;
            object-fit: cover;
        }

        &__text {
            padding-top: 30px;
        }

        &__sub {
            color: c.$text;
            font-family: f.$font-secondary;
        }

        &__price {
            padding-top: 20px;
            color: c.$red;
            font-size: 16px;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
        }

        &__link {
            color: inherit;
            text-decoration: none;
        }

        &__desc {
            align-items: center;
            border-top: 1px solid c.$border;
            display: flex;
            justify-content: space-between;
            list-style: none;
            margin: 30px 0 0;
            padding: 15px 25px;
            text-align: center;
        }

        &__desc-item {
            font-size: 13px;
            color: c.$text;
            position: relative;

            &::before{
                content: '';
                width: 5px;
                height: 5px;
                background: #c0c0c0;
                border-radius: 50%;
                display: block;
                left: calc(-50% - (-2.5px));
                position: absolute;
                top: 8px;
            }

            &:first-child {
                &::before {
                    display: none;
                }
            }
        }
    }
</style>
