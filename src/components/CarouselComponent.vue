<template>
    <div class="row">
        <div class="col" v-for="(image,index) in store.arrayImg" :key="index">
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
    import { store } from '../store'
    export default {
        name: 'CarouselComponent',
        data() {
            return {
                store

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