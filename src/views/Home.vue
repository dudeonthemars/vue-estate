<template>
    <div class="home">
        <Carousel class="carousel-home" />
        <MainContainer>
        </MainContainer>
    </div>
</template>

<script>
import MainContainer from '@/components/MainContainer';
import Carousel from '@/components/Carousel';

export default {
    name: 'Home',
    components: {
         MainContainer,
         Carousel,
    }
}
</script>
