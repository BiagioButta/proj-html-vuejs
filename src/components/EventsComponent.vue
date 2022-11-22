<template>
    <div class="row">
        <div class="col text-center"><h2>Our Events</h2><p>Chess is fun and we are happy to prove it at our events!</p></div>
    </div>
    <div class="row row-cols-1" v-for="(card,index) in store.arrayCardEvents" :key="index">
        <div class="col d-flex">
            <div><img :src="card.img" alt=""></div><div><h6><b>{{card.title}}</b></h6><p class="fs-12">{{card.text}}</p></div><div><button class="yellow-button">Register</button></div>
        </div>
    </div>
</template>

<script>

    import { store } from '../store';
    export default {
        name: 'EventsComponent',
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>

    img{
        width: 100%;
        height: 100px;
    }

</style>