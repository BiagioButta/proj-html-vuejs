<template>
    <div class="row" >
        <div class="col" v-for="(image,index) in store.arrayImg" :key="index">
            
            <img class="lumonosità" id="myImg" :src="image" alt="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content border-0 bg-grey">
        
                        <div class="modal-body d-flex justify-content-center position-relative">
                            <img :src="image" alt="">
                            <i class="fa-solid fa-xmark x" data-bs-dismiss="modal" aria-label="Close"></i>
                        </div>

                    </div>
                </div>
            </div>
           
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
    }

    .col{
        padding: 0;
    }

    .lumonosità:hover {
       filter: brightness(110%);
       cursor: pointer;
    }

    .x{
        position: absolute;
        top: 1px;
        right: 3px;
        color: white;
        cursor: pointer;
    }

    .bg-grey{
        background-color: #514f51;
    }

</style>