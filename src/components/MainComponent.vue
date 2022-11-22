<template>
    <div class="wrapper">
        <ServiceComponent/>
    </div>
    <div class="bg-yellow">
        <CarouselComponent/>
    </div>
    <div class="wrapper">
        <CardComponent/>
    </div>
    <div class="bg-white-chess mt-5">
        <div class="wrapper">
            <div class="row text-white">
                <div class="col d-flex align-items-center justify-content-between">
                    <div><h1 class="text-uppercase">Take the <span>first step</span></h1><p class="font-size-small">The fascinating world of chess has its doors open for anyone</p></div>
                    <div><button class="enroll">View More</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceComponent from './ServiceComponent.vue';
import CarouselComponent from './CarouselComponent.vue';
import CardComponent from './CardComponent.vue';

    export default {
    name: "MainComponent",
    components: { ServiceComponent, CarouselComponent, CardComponent }
}
</script>

<style lang="scss" scoped>

    .bg-yellow{
        background-color: #fdca27;
    }

    .bg-white-chess{
        background-image: url(../assets/img/mt-2236-home-bg2.jpg);
        background-size: cover;
        height: 200px;
        display: flex;
        align-items: center;
    }

    span{
        color: #fdca27;
    }

</style>