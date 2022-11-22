<template>
    <div class="wrapper">
        <div class="row">
            <div class="col">
                <div><h2>Latest News</h2></div>
                <div class="hr"></div>
                <button>View Other Post</button>
            </div>
            <div class="col"><img src="../assets/img/mt-2236-blog-img1.jpg" alt=""><p class="fs-12">The most common mistakes when managing personal finances</p></div>
            <div class="col"><img src="../assets/img/mt-2236-blog-img2.jpg" alt=""><p class="fs-12">Methods of the recruitment</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewaComponent'
    }
</script>

<style lang="scss" scoped>

    img{
        width: 100%;
    }

    button{
        background-color: transparent;
    }

    button:hover{
        background-color: #514f51;
        color: #ffffff;
        transition: 0.5s;
    }

   .hr{
    width: 60px;
    height: 3px;
    background-color: #fdca27;
    margin: 20px 0;
   }
</style>