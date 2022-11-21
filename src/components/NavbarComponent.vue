<template> 
    <div class="row h-50px align-items-center">
        <div class="col">
            <img src="../assets/img/mt-2236-home-logo.png" alt="">
        </div>
        
        <div class="col d-flex justify-content-end">
            <ul v-for="(link,index) in linksMenu" :key="index" class="font-size-xsmall">
                <li>
                    <a href="#">{{link}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavbarComponent',
        data() {
            return {
                linksMenu: ['Menù', 'Services', 'Courses', 'About', 'FAQ', 'Blog', 'Contact']
            }
        },
    }
</script>

<style lang="scss" scoped>

.font-size-xsmall{
        font-size: x-small;
}

.h-50px{
        height: 50px;
}

li{
    list-style: none;
    margin-left: -15px;
    a{
        text-decoration: none;
        color: #ffffff;
    }

    a:hover{
        color: #fdca27;
    }
}

img{
    width: 100px;
}

</style>