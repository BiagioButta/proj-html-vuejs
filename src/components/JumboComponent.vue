<template>
    <div class="row align-items-center h-50px">
        <div class="col font-size-xsmall"><a href="https://www.google.it/maps/place/Santa+Monica+Blvd,+Los+Angeles,+CA,+Stati+Uniti/@34.0907154,-118.3396473,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bebb074ab833:0x3003ecc0a07f08fe!8m2!3d34.090711!4d-118.3374586" target="_blank"><i class="fa-solid fa-location-dot"></i></a>6767 Santa Monica Blvd, Los Angeles, CA 900038</div>
        <div class="col d-flex justify-content-between align-items-center">
            <div class="font-size-xsmall"><i class="fa-solid fa-phone"></i>Call Now 123-456-7890</div>
            <div class="font-size-xsmall"><button class="donate">Donate</button></div>
        </div>
    </div>
    <div class="row flex-column m-top">
        <div class="col-6  welcome"><a href="#">Welcome</a></div>
        <div class="col-6 "><h1>Academic chess for <em>everyone</em></h1></div>
        <div class="col-6 fs-12 mb-3">We are dedicated to broadening and developing chess as art, recreation, and as a significant element of culture in Northern California.</div>
        <div class="col-6 "><button class="yellow-button">Enroll Now</button><button class="trasparent-button">Learn More</button></div>
    </div>

</template>

<script>
    export default {
        name: 'JumboComponent'
    }
</script>

<style lang="scss" scoped>

    i{
        color: #fdca27;
    }

    .yellow-button{
        margin-right: 20px;
    }

    .donate{
        border: none;
        font-weight: bold;
        color: #0d1219;
    }

    .donate:hover{
        background-color: #fdca27;
        transition: 0.5s;
    }
    
    .welcome{
        a{
            text-decoration: none;
            color:#0d1219;
            background-color: #fdca27;
            padding: 0 10px;
            border-radius: 10px;
            font-size: x-small;
            text-transform: uppercase;
        }
    }

    h1{
        font-weight: bold;
        em{
            color: #fdca27;
        }
    }

    .m-top{
        margin-top: 5rem;
    }

    .h-50px{
        height: 50px;
    }


</style>