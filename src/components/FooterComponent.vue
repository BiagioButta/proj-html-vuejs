<template>
    <div class="bg-grey">
        <div class="wrapper">
            <div class="row">
                <div class="col d-flex flex-column justify-content-between">
                    <div><img src="../assets/img/mt-2236-home-logo.png" alt=""></div>
                    <div class="fs-12 text-white">Copyright © 2021. All Rights Reserved.</div>
                </div>
                <div class="col">
                    <div class="text-white mb-4">Follow Us</div>
                    <div class="d-flex">
                        <div class="square-social"><i class="fa-brands fa-facebook-f"></i></div>
                        <div class="square-social"><i class="fa-brands fa-telegram"></i></div>
                        <div class="square-social"><i class="fa-brands fa-instagram"></i></div>
                    </div>
                </div>
                <div class="col">
                    <p class="text-white fs-12">Subscribe to get the latest news, course updates, discounts, events</p>
                    
                        <input class="fs-12" type="text" name="" id="" placeholder="Enter your email here">
                        <button @click="adderror" class="yellow-button mt-4">Subscribe</button>
                        <div v-if="error" class="text-white">You were not subscribed. Please try again</div>
                   
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { PatchFlagNames } from '@vue/shared';

    export default {
    name: "FooterComponent",
    components: { PatchFlagNames },
    data() {
        return {
            data() {
                return {
                    error: false
                }
            },
            methods: {
                adderror(){
                    this.error = true;
                }
            },
        }
    }
}
</script>

<style lang="scss" scoped>

    .bg-grey{
        background-color: #272727;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    img{
        width: 120px;
    }

    .square-social{
        border: 1px solid white;
        width: 30px;
        height: 30px;
        text-align: center;
        margin-right: 5px;
        i{
            color: white;
        }
    }

</style>