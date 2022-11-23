<template>
    <div class="bg-bunker">
        <div class="wrapper text-white">
            <div class="row align-items-center h-50px">
                <div class="col font-size-xsmall"><a href="https://www.google.it/maps/place/Santa+Monica+Blvd,+Los+Angeles,+CA,+Stati+Uniti/@34.0907154,-118.3396473,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bebb074ab833:0x3003ecc0a07f08fe!8m2!3d34.090711!4d-118.3374586" target="_blank"><i class="fa-solid fa-location-dot"></i></a>6767 Santa Monica Blvd, Los Angeles, CA 900038</div>
                <div class="col d-flex justify-content-between align-items-center">
                    <div class="font-size-xsmall"><i class="fa-solid fa-phone"></i>Call Now 123-456-7890</div>
                    <div class="font-size-xsmall"><button class="donate">Donate</button></div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-bunker fixed-navbar">
        <div class="wrapper">
            <div class="row h-50px align-content-center">
            <div class="col">
                <img src="../assets/img/mt-2236-home-logo.png" alt="">
            </div>

            <div class="col d-flex justify-content-end">
                <ul v-for="(link,index) in store.linksMenu" :key="index" class="font-size-xsmall mt-2">
                    <li>
                        <a href="#">{{link}}</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>

    <div class="wrapper">
    
        <div class="row row-cols-1 text-white">
            <div class="col">
                <JumboComponent/>
            </div>
            
        </div>
    
    </div>
</template>

<script>
import { store } from '../store';
    import JumboComponent from './JumboComponent.vue';
    

    export default {
        name: "HeaderComponent",
        components: { JumboComponent },
        data() {
            return {
                store,

            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" scoped>

   
    .bg-bunker{
        background-color: #12222f96;
    }

i{
    color: #fdca27;
}


li{
    list-style: none;
    margin-left: -15px;
    a{
        text-decoration: none;
        color: #ffffff;
    }

    a:hover{
        color: #e8b604;
    }
}

img{
    width: 100px;
}
.donate{
        border: none;
        font-weight: bold;
        color: #0d1219;
    }

    .donate:hover{
        background-color: #e8b604;
        transition: 0.5s;
    }

    i{
        color: #e8b604;
    }

    .h-50px{
        height: 50px;
    }

</style>