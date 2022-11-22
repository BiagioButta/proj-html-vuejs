<template>
    <div class="row">
        <div class="col text-center"><h1>Courses</h1><p>To keep up with the constantly rising standards of play</p></div>
    </div>
    <div class="row row-cols-1" v-for="(card,index) in arrayCardEvents" :key="index">
        <div class="col d-flex">
            <div><img :src="card.img" alt=""></div><div><h1>{{card.title}}</h1><p>{{card.text}}</p></div><div><button>Register</button></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EventsComponent',
        data() {
            return {
                arrayCardEvents: [
                    {
                        img: '../assets/img/mt-2236-home-img4.jpg',
                        title: 'Grand Summer Tournament of  2021',
                        text: 'Join us for the Grand Summer Tournament 2021. Held every year on the first Sunday of summer, our Grand Summer Tournament chess masters and beginners from North California.We have competitions for different levels of chess mastery with amazing prizes awarded at each level.'
                    },
                    {
                        img: '../assets/img/mt-2236-home-img5.jpg',
                        title: 'World Chess Day',
                        text: 'Celebrated on July 20 every year, World Chess Day is one of the biggest events at our school. Be ready for fun tournaments and big prizes. Registration is obligatory!'
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

    img{
        width: 100%;
        height: 100px;
    }

</style>