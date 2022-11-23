<template>
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

    

    .yellow-button{
        margin-right: 20px;
    }
    
    .welcome{
        a{
            text-decoration: none;
            color:#0d1219;
            background-color: #e8b604;
            padding: 0 10px;
            border-radius: 10px;
            font-size: x-small;
            text-transform: uppercase;
        }
    }

    h1{
        font-weight: bold;
        em{
            color: #e8b604;
        }
    }

    .m-top{
        margin-top: 5rem;
    }

    


</style>