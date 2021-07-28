<template>
    <div class="home">
        <Carousel class="carousel-home" />
        <div class="container">
            <div class="offering">
                <div class="row">
                    <div class="col-md-4">
                        <h3 class="offering__title">
                            We are Offering the <br>
                            Best Estate Deals
                        </h3>
                        <span class="offering__title-div"></span>
                    </div>
                    <div class="col-md-8">
                        <p class="offering__text">
                            Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Features :data="featuresData" />
        <Properties :propertiesData="propertiesData" />
        <div class="team">
            <CarouselTeam />
        </div>
    </div>
</template>

<script>
import {featuresData, propertiesData} from '@/data/data.dummy';

import Carousel from '@/components/Carousel';
import Features from '@/components/Features';
import Properties from '@/components/Properties';
import CarouselTeam from '@/components/CarouselTeam';

export default {
    name: 'Home',
    components: {
        Carousel,
        Features,
        Properties,
        CarouselTeam
    },
    data() {
        return {
            featuresData: featuresData,
            propertiesData: propertiesData
        }
    }
}
</script>
<style lang="scss">
    @use '../assets/layouts/colors' as c;
    @use '../assets/layouts/fonts' as f;

    .offering {
        padding: 120px 0;

        &__title {
            text-align: right;
        }

        &__title-div {
            width: 38px;
            height: 3px;
            background: c.$primary;
            display: block;
            margin-left: auto;
            margin-top: 30px;
        }

        &__text {
            padding-left: 20px;
        }
    }
</style>
