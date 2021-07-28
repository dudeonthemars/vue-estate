<template>
    <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-md-4 align-self-end">
                            <img src="@/assets/images/pic.jpg" class="team__image" alt="SLide 1">
                        </div>
                        <div class="col-md-8">
                            <h3 class="title">
                                Our <span>Agents</span>
                            </h3>
                            <div class="divider"></div>
                            <div class="team__name">
                                Jane Doe
                            </div>
                            <div class="team__text">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, raesent luptatum zzril delenit augue duis dolore te feugait nulla nonummy nibh euismod tincidunt facilisi. </p>

                                <div class="team__contacts">
                                    <a href="callto:+71234567899" class="team__phone"><i class="fas fa-phone-alt"></i> + 7 (123) 456-78-99</a>
                                    <a href="mailto:jane.doe@realhome.com" target="_blank" rel="noopener noreferrer" class="team__email"><i class="fas fa-envelope"></i> jane.doe@realhome.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-md-4 align-self-end">
                            <img src="@/assets/images/pic2.jpg" class="team__image" alt="Slide 2">
                        </div>
                        <div class="col-md-8">
                            <h3 class="title">
                                Our <span>Agents</span>
                            </h3>
                            <div class="divider"></div>
                            <div class="team__name">
                                John Doe
                            </div>
                            <div class="team__text">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, raesent luptatum zzril delenit augue duis dolore te feugait nulla nonummy nibh euismod tincidunt facilisi. </p>

                                <div class="team__contacts">
                                    <a href="callto:+71234567899" class="team__phone"><i class="fas fa-phone-alt"></i> + 7 (123) 456-78-99</a>
                                    <a href="mailto:john.doe@realhome.com" target="_blank" rel="noopener noreferrer" class="team__email"><i class="fas fa-envelope"></i> john.doe@realhome.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @use '../assets/layouts/colors' as c;
    @use '../assets/layouts/fonts' as f;

    .team {
        padding-top: 90px;
        overflow-x: hidden;

        .carousel-indicators {
            right: -150px;
            top: 20px;
            bottom: unset;

            @media screen and (max-width: 1280px) {
                right: 0;
                top: -60px;
            }
        }

        &__image {
            max-width: 100%;
            height: 402px;
            margin: auto;
            display: block;
            object-fit: cover;
        }

        &__name {
            font-size: 25px;
            font-weight: bold;
            font-family: f.$font-secondary;
        }

        &__text {
            margin-top: 30px;
            font-family: f.$font-secondary;
            color: c.$text;
            padding-bottom: 60px;
        }

        &__contacts {
            margin-top: 30px;
        }

        &__phone {
            color: c.$primary;
            text-decoration: none;
        }

        &__email {
            padding-left: 30px;
            color: c.$red;
        }

        button[data-bs-target] {
            background: transparent;
            border-radius: 50%;
            border: 1px solid c.$text;
            height: 15px;
            width: 15px;

            &.active {
                background: c.$red;
                border: 1px solid c.$red;
            }
        }
    }
</style>