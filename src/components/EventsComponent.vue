<template>
    <div class="row">
        <div class="col text-center"><h2>Our Events</h2><p>Chess is fun and we are happy to prove it at our events!</p></div>
    </div>
    <div class="row mb-4" v-for="(card,index) in store.arrayCardEvents" :key="index">
        <div class="col">
            <div>
                <img :src="card.img" alt="">
            </div>  
        </div>
        <div class="col-6 d-flex align-items-center">
            <div>
                <h6><b>{{card.title}}</b></h6>
                <p class="fs-12">{{card.text}}</p>
            </div>
        </div>
        <div class="col d-flex align-items-center">
            <div><button class="yellow-button">Register</button></div>
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
        width: 250px;
    }

</style>