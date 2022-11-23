<template>
    <div class="wrapper mb-5">
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
                    <div><h2>Play &amp; Learn</h2><p>Take a look into our day to day life here at Chess School</p></div>
                    <div><button class="yellow-button">Learn More</button></div>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper mt-5">
        <CardComponent/>
    </div>
    <div class="bg-white-chess mt-5">
        <div class="wrapper">
            <div class="row text-white">
                <div class="col d-flex align-items-center justify-content-between">
                    <div><h1>Take the <span>first step</span></h1><p class="font-size-small">The fascinating world of chess has its doors open for anyone</p></div>
                    <div><button class="yellow-button">View More</button></div>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper mt-5">
        <EventsComponent/>
    </div>
    <div class="mt-5">
        <NewsComponent/>
    </div>
</template>

<script>
import ServiceComponent from './ServiceComponent.vue';
import CarouselComponent from './CarouselComponent.vue';
import CardComponent from './CardComponent.vue';
import EventsComponent from './EventsComponent.vue';
import NewsComponent from './NewsComponent.vue';

    export default {
    name: "MainComponent",
    components: { ServiceComponent, CarouselComponent, CardComponent, EventsComponent, NewsComponent }
}
</script>

<style lang="scss" scoped>

    .bg-yellow{
        background-color: #e8b604;
    }

    .yellow-button{
        border: 1px solid #0d1219;
    }

    .bg-white-chess{
        background-image: url(../assets/img/mt-2236-home-bg2.jpg);
        background-size: cover;
        height: 200px;
        display: flex;
        align-items: center;
    }

    span{
        color: #e8b604;
    }


    .img-knigt{
        width: 70px;
    }

    .h-120px{
        height: 120px;
    }

</style>