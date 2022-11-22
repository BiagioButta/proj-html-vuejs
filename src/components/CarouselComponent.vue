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

    img{
        width: 100%;
        height: 100px;
    }

</style>