<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators carousel-indicators__home">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="@/assets/images/slide.jpg" class="d-block w-100 carousel__img" alt="slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="carousel__title">120 Anastasia Avenue, Coral Gables</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/slide.jpg" class="d-block w-100 carousel__img" alt="slide">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class="carousel__title">120 Anastasia Avenue, Coral Gables</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style lang="scss">
    .carousel {
        &__title {
            font-size: 48px;
            font-weight: bold;
        }

        &__img {
            max-height: 860px;
            object-fit: cover;
        }
    }

    .carousel-caption {
        padding-bottom: 100px;
    }

    .carousel-indicators__home {
        bottom: 285px;

        button[data-bs-target] {
            background: transparent;
            border-radius: 50%;
            border: 1px solid #fff;
            height: 15px;
            width: 15px;

            &.active {
                background: #fff;
            }
        }
    }
</style>