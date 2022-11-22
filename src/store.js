import { reactive } from "vue";

export const store = reactive ({

    // array utilizzati
    linksMenu: ['Menù', 'Services', 'Courses', 'About', 'FAQ', 'Blog', 'Contact'],
    chessEducationList: ['Build self-regulation and motivation', 'Help with concernation issues', 'Learn to plan, organize, and prioritize', 'Regulate emotions', 'Learn to pay attentios to detail'],
    arrayServicesList: [
        {
            icon: '../src/assets/img/mt-2236-home-icon1.png',
            title: 'Various Age Groups',
            text: 'We provide chess classes to both children from 5 years old and adults.'
        },
        {
            icon: '../src/assets/img/mt-2236-home-icon2.png',
            title: 'Top Chess Variants',
            text: 'We don’t only teach classical chess but also other top variants of this game.'
        },
        {
            icon: '../src/assets/img/mt-2236-home-icon3.png',
            title: 'Best Chess Players',
            text: 'Our alumni have won many prestigious chess tournaments in the country.'
        },
        {
            icon: '../src/assets/img/mt-2236-home-icon4.png',
            title: 'Best Chess Openings',
            text: 'Our students know all the best chess openings and how to use them.'
        }
    ],
    arrayImg: ['../src/assets/img/mt-2236-home-gallery1.jpg', '../src/assets/img/mt-2236-home-gallery2.jpg', '../src/assets/img/mt-2236-home-gallery3.jpg', '../src/assets/img/mt-2236-home-gallery4.jpg'],
    arraycard: [
        {
            img: '../src/assets/img/mt-2236-home-img1.jpg',
            title: 'Garry Kasparov’s Masterclass',
            text: 'Learn the tips, tricks, and strategies from one of the best masters',
            price: '$456'
        },
        {
            img: '../src/assets/img/mt-2236-home-img2.jpg',
            title: 'Online Chess Lessons for Beginners',
            text: 'Catered to adult beginners who have a few hours a week to practice',
            price: '$205'
        },
        {
            img: '../src/assets/img/mt-2236-home-img3.jpg',
            title: 'International Chess School Online',
            text: 'Chess lessons for children and adults held completely online',
            price: '$356'
        }
    ],
    arrayCardEvents: [
        {
            img: '../src/assets/img/mt-2236-home-img4.jpg',
            title: 'Grand Summer Tournament of  2021',
            text: 'Join us for the Grand Summer Tournament 2021. Held every year on the first Sunday of summer, our Grand Summer Tournament chess masters and beginners from North California.We have competitions for different levels of chess mastery with amazing prizes awarded at each level.'
        },
        {
            img: '../src/assets/img/mt-2236-home-img5.jpg',
            title: 'World Chess Day',
            text: 'Celebrated on July 20 every year, World Chess Day is one of the biggest events at our school. Be ready for fun tournaments and big prizes. Registration is obligatory!'
        }
    ],
    // Titoli e sottotitoli
    
        

})   