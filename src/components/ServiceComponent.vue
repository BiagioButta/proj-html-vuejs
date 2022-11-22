<template>
    <div class="row mt-5">
        <div class="col text-center">
            <h1 class="text-uppercase">Our services</h1>
            <h6>We make your child happy day after day</h6>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col-4">
                    <h5>Chess Education</h5>
                    <p>Popular education for your child and you</p>
                    <p class="font-size-small">Teachers and parents around the wrld know that chess is not a simple game. It is a great learning tool that will help build your child's executive function skills</p>
                    <ul v-for="(link,index) in chessEducationList" :ey="index">
                        <li class="font-size-xsmall">{{link}}</li>
                    </ul>
                </div>
                <div class="col">
                    <div class="row row-cols-2">
                        <div class="col" v-for="(item,index) in arrayServicesList" :key="index">
                            <div>
                                <img src="../assets/img/mt-2236-home-icon1.png" alt="">
                                <h5>{{item.title}}</h5>
                                <p class="font-size-small">{{item.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col"> <div class="col"><button class="enroll">Learn More</button></div></div>
    </div>
</template>

<script>
    export default {
        name: 'ServiceComponent',
        data() {
            return {
                chessEducationList: ['Build self-regulation and motivation', 'Help with concernation issues', 'Learn to plan, organize, and prioritize', 'Regulate emotions', 'Learn to pay attentios to detail'],
                arrayServicesList: [
                    {
                        icon: '../assets/img/mt-2236-home-icon1.png1.png',
                        title: 'Various Age Groups',
                        text: 'We provide chess classes to both children from 5 years old and adults.'
                    },
                    {
                        icon: '../assets/img/mt-2236-home-icon1.png2.png',
                        title: 'Top Chess Variants',
                        text: 'We don’t only teach classical chess but also other top variants of this game.'
                    },
                    {
                        icon: '../assets/img/mt-2236-home-icon1.png3.png',
                        title: 'Best Chess Players',
                        text: 'Our alumni have won many prestigious chess tournaments in the country.'
                    },
                    {
                        icon: '../assets/img/mt-2236-home-icon1.png4.png',
                        title: 'Best Chess Openings',
                        text: 'Our students know all the best chess openings and how to use them.'
                    }
                ]
            }     
        },
    }
</script>

<style lang="scss" scoped>

.enroll{
        background-color: #fdca27;
        color: #0d1219;
        border: none;
        margin-right: 20px;
        font-size: small;
        border-radius: 5px;
        padding: 5px 20px;
    }

    .enroll:hover{
        background-color: #514f51;
        color: #ffffff;
        transition: 0.5s;
    }

    img{
        width: 20%;
    }

    li{
        list-style-image: url(../assets/img/mt-2236-home-icon-bullet.png);
        line-height: 0;
    }
</style>