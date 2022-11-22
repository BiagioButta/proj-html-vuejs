<template>
    <div class="row">
        <div class="col text-center"><h1>Courses</h1><p>To keep up with the constantly rising standards of play</p></div>
    </div>
    <div class="row">
        <div class="col" v-for="(card,index) in arrayCard" :key="index">
            <div class="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title">{{card.title}}</h5>
                  <p class="card-text">{{card.text}}</p>
                  <p>{{card.price}}</p>
                  <button class="enroll">View More</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col text-center"><button>View Other Courses</button></div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        data() {
            return {
                arraycard: [
                    {
                        img: '../assets/img/mt-2236-home-img1.jpg',
                        title: 'Garry Kasparov’s Masterclass',
                        text: 'Learn the tips, tricks, and strategies from one of the best masters',
                        price: '456'
                    },
                    {
                        icon: '../assets/img/mt-2236-home-img2.jpg',
                        title: 'Online Chess Lessons for Beginners',
                        text: 'Catered to adult beginners who have a few hours a week to practice',
                        price: '456'
                    },
                    {
                        icon: '../assets/img/mt-2236-home-img3.jpg',
                        title: 'International Chess School Online',
                        text: 'Chess lessons for children and adults held completely online',
                        price: '456'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

    button{
        background-color: transparent;
    }

    button:hover{
        background-color: #514f51;
        color: #ffffff;
        transition: 0.5s;
    }

</style>