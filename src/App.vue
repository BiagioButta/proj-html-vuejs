<template>
  <div class="container-fluid bg-img">
    <HeaderComponent/>
  </div>
  <div class="container-fuild">
    <MainComponent/>
    <FooterComponent/>
  </div>


  <div>
    <CallFixedComponent/>
  </div>
  
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
import CallFixedComponent from './components/CallFixedComponent.vue';
  

  export default {
    components: { HeaderComponent, MainComponent, FooterComponent, CallFixedComponent }
  }
</script>

<style lang="scss" scoped>

  .bg-img{
      background-image: url(./assets/img/mt-2236-home-bg1.jpg);
      background-size: cover;
      height: 530px;
  }

</style>