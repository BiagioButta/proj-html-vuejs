<template>
    <div class="row row-cols-1">
        <div class="col">
            <h1>Our services</h1>
            <h6>We make your child happy day after day</h6>
        </div>
        <div class="col"></div>
        <div class="col"><button class="enroll">Learn More</button></div>
    </div>
</template>

<script>
    export default {
        name: 'ServiceComponent'
    }
</script>

<style lang="scss" scoped>

.enroll{
        background-color: #fdca27;
        color: #0d1219;
        border: none;
        margin-right: 20px;
        font-size: small;
        border-radius: 5px;
        padding: 5px 20px;
    }

    .enroll:hover{
        background-color: #514f51;
        color: #ffffff;
        transition: 0.5s;
    }

</style>