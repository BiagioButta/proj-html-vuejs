<template>
    <div class="row align-items-center h-50px">
        <div class="col font-size-xsmall"><i class="fa-solid fa-location-dot"></i>6767 Santa Monica Blvd, Los Angeles, CA 900038</div>
        <div class="col d-flex justify-content-between align-items-center">
            <div class="font-size-xsmall"><i class="fa-solid fa-phone"></i>Call Now 123-456-7890</div>
            <div class="font-size-xsmall"><button class="donate">Donate</button></div>
        </div>
    </div>
    <div class="row flex-column m-top">
        <div class="col-6  welcome"><a href="#">Welcome</a></div>
        <div class="col-6 "><h1>Academic chess for <em>everyone</em></h1></div>
        <div class="col-6 font-size-small mb-3">We are dedicated to broadening and developing chess as art, recreation, and as a significant element of culture in Northern California.</div>
        <div class="col-6 "><button class="enroll">Enroll Now</button><button class="learn">Learn More</button></div>
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

    button{
        border-radius: 5px;
        padding: 5px 20px;
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

    .enroll{
        background-color: #fdca27;
        color: #0d1219;
        border: none;
        margin-right: 20px;
        font-size: small;
    }

    .enroll:hover{
        background-color: #514f51;
        color: #ffffff;
        transition: 0.5s;
    }

    .learn{
        background-color: transparent;
        border: 1px solid #ffffff;
        color: #ffffff;
        font-size: small;
    }

    .learn:hover{
        background-color: #fdca27;
        color: #0d1219;
        border: 1px solid #fdca27;
        transition: 0.5s;
    }

    .font-size-xsmall{
        font-size: x-small;
    }

    .font-size-small{
        font-size: small;
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
        text-transform: uppercase;
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