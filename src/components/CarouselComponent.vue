<template>
    <div class="row">
        <div class="col" v-for="(image,index) in arrayImg" :key="index">
            <img id="myImg" :src="image" alt="">
        </div>
        <div id="myModal" class="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="img01">
            <div id="caption"></div>
        </div>
    </div>
    <div class="wrapper">
        <div class="row h-120px">
            <div class="col d-flex align-items-center justify-content-between">
                <img class="img-knigt" src="../assets/img/mt-2236-home-icon5.png" alt="">
                <div><h1>Play &amp; Learn</h1><p>Take a look into our day to day life here at Chess School</p></div>
                <div><button class="enroll">Learn More</button></div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'CarouselComponent',
        data() {
            return {
                arrayImg: ['../assets/img/mt-2236-home-gallery1.jpg', '../assets/img/mt-2236-home-gallery2.jpg', '../assets/img/mt-2236-home-gallery3.jpg', '../assets/img/mt-2236-home-gallery4.jpg'],

            }
        },
        methods: {
            imgClick(){
                
            }
        }
    }
</script>

<style lang="scss" scoped>

    .enroll{
        border: 1px solid #0d1219;
    }

    .img-knigt{
        width: 70px;
    }

    .h-120px{
        height: 120px;
    }

    img{
        width: 100%;
        height: 100px;
    }

</style>