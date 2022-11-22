<template>
    <div class="row mt-5">
        <div class="col text-center">
            <h2 class="text-uppercase">Our services</h2>
            <p>We make your child happy day after day</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col-4">
                    <h5><b>Chess Education</b></h5>
                    <p>Popular education for your child and you</p>
                    <p class="fs-12">Teachers and parents around the wrld know that chess is not a simple game. It is a great learning tool that will help build your child's executive function skills</p>
                    <ul v-for="(link,index) in store.chessEducationList" :ey="index">
                        <li class="fs-12">{{link}}</li>
                    </ul>
                </div>
                <div class="col-1"></div>
                <div class="col">
                    <div class="row row-cols-2">
                        <div class="col" v-for="(item,index) in store.arrayServicesList" :key="index">
                            <div>
                                <img :src="item.icon" alt="">
                                <p><b>{{item.title}}</b></p>
                                <p class="fs-12">{{item.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col"> <div class="col"><button class="yellow-button">Learn More</button></div></div>
    </div>
</template>

<script>
    import {store} from '../store'
    export default {
        name: 'ServiceComponent',
        data() {
            return {
                store
            }     
        },
    }
</script>

<style lang="scss" scoped>


    img{
        width: 50px;
        height: 50px;
    }

    ul{
        margin-left: -20px;
        margin-bottom: 9px;
    }

    li{
        list-style: none;
        line-height: 0;
    }

    li::before{
        content: '';
        display: inline-block;
        width: 10px;
        height: 12px;
        background-image: url(../assets/img/mt-2236-home-icon-bullet.png);
        margin-right: 5px;
    }

    
</style>