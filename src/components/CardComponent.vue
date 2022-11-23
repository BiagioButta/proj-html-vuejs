<template>
    <div class="row">
        <div class="col text-center"><h2>Courses</h2><p>To keep up with the constantly rising standards of play</p></div>
    </div>
    <div class="row row-cols-3">
        <div class="col" v-for="(card,index) in store.arraycard" :key="index">
            <div class="card shadow zoom">
                <img :src="card.img" class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title">{{card.title}}</h5>
                  <p class="card-text fs-12">{{card.text}}</p>
                  <p><b>{{card.price}}</b></p>
                  <button class="yellow-button">View More</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col text-center"><button class="button-card">View Other Courses</button></div>
    </div>
</template>

<script>
    import{ store } from '../store';

    export default {
        name: 'CardComponent',
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

    .button-card{
        background-color: transparent;
    }

    .button-card:hover{
        background-color: #514f51;
        color: #ffffff;
        transition: 0.5s;
    }

    .zoom:hover{
        width: 235px;
        height: 350px;
    }

  

</style>