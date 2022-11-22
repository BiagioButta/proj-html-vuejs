<template>
    <div class="circle">
        <i class="fa-solid fa-phone"></i>
    </div>
</template>

<script>
    export default {
        name: 'CallFixedComponent'
    }
</script>

<style lang="scss" scoped>
    .circle{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        box-shadow: 5px 5px 5px 0 #888888;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 10px;
        top: 450px;
        cursor: pointer;
        background-color: white;
        i{
            color: #fdca27;
            font-size: 30px;
        }
    }
</style>