<template>
    <div class="wrapper">
    
        <div class="row row-cols-1 text-white">
            <div class="col">
                <JumboComponent/>
            </div>
            <div class="col">
                <NavbarComponent/>
            </div>
        </div>
    
    </div>
</template>

<script>
    import JumboComponent from './JumboComponent.vue';
    import NavbarComponent from './NavbarComponent.vue';

    export default {
        name: "HeaderComponent",
        components: { JumboComponent, NavbarComponent }
    }
</script>

<style lang="scss" scoped>

   

</style>