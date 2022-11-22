<template>
    <div class="row">
        <div class="col text-center"><h2>Courses</h2><p>To keep up with the constantly rising standards of play</p></div>
    </div>
    <div class="row">
        <div class="col" v-for="(card,index) in store.arrayCard" :key="index">
            <div class="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title">{{card.title}}</h5>
                  <p class="card-text fs-12">{{card.text}}</p>
                  <p>{{card.price}}</p>
                  <button class="enroll">View More</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col text-center"><button>View Other Courses</button></div>
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

    button{
        background-color: transparent;
    }

    button:hover{
        background-color: #514f51;
        color: #ffffff;
        transition: 0.5s;
    }

</style>