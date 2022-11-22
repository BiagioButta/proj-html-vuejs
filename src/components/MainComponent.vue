<template>
    <div class="wrapper">
        <ServiceComponent/>
    </div>
    <div>
        <CarouselComponent/>
    </div>
    <div class="bg-yellow">
        <div class="wrapper">
            <div class="row h-120px">
                <div class="col d-flex align-items-center justify-content-between">
                    <img class="img-knigt" src="../assets/img/mt-2236-home-icon5.png" alt="">
                    <div><h1>Play &amp; Learn</h1><p>Take a look into our day to day life here at Chess School</p></div>
                    <div><button class="enroll">Learn More</button></div>
                </div>
            </div>
        </div>
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
    <div class="wrapper">
        <EventsComponent/>
    </div>
</template>

<script>
import ServiceComponent from './ServiceComponent.vue';
import CarouselComponent from './CarouselComponent.vue';
import CardComponent from './CardComponent.vue';
import EventsComponent from './EventsComponent.vue';

    export default {
    name: "MainComponent",
    components: { ServiceComponent, CarouselComponent, CardComponent, EventsComponent }
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

    .enroll{
        border: 1px solid #0d1219;
    }

    .img-knigt{
        width: 70px;
    }

    .h-120px{
        height: 120px;
    }

</style>