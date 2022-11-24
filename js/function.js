

// function sleep(x,y){


//     addition = x - y;
//     console.log(addition);
// }

// sleep(20,15);




// function time(x,y,z){

//     addiSum = x - y + z;
//     console.log(addiSum);
    

// }
// time(20,10,5);

// const information = {
    
//     firstName : "Atikul" ,
//     lastName : "Islam",
//     fullNane : function(){
//         // x = firstName + lastName
//         console.log(this.firstName + this.lastName);
//     }
// };


// console.log(information.firstName)


$('.owl-carousel').owlCarousel({
    margin: 15,
    nav: true,
    dots: false,
    navText: [
        "<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

