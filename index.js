// Buttery Smooth Scrolling Action
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Progress bar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// GSAP Animation Land 
// var tlPage = gsap.timeline();
// tlPage.from("body", {opacity: 0 , duration: 3});


// GSAP mobile nav

// set initial menu state
let menuState = "closed";

// When the burger menu is clicked
document.querySelector(".burg").addEventListener("click", function(){
    if(menuState == "closed") {
        openMenu();
        console.log(menuState);
    } else if (menuState == "open") {
        closeMenu();
        console.log(menuState);
    }
});

// When the overlay is clicked
document.querySelector(".mobile-overlay").addEventListener("click", function(){
    if (menuState == "open") {
        closeMenu();
        console.log(menuState);
    }
});

// When the links are clicked


// const links = Array.from(document.querySelectorAll('.nav-links a'));
// for (let  i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function() {
//         closeMenu();
//     });
// }





// Open menu animation
function openMenu() {
    let tl = gsap.timeline();
    tl.to(".mobile-overlay", {display: "block", duration: 0});
    tl.to("#nav-menu", {maxHeight: 400, duration: .5});
    
    tl.to(".mobile-overlay", {opacity: 1, duration: .5}, "-=.5");
    menuState = "open";
}

// Close menu animation
function closeMenu() {
    let tl = gsap.timeline();
    tl.to(".mobile-overlay", {opacity: 0, duration: .5});
    tl.to(".mobile-overlay", {display: "none", duration: 0});
    tl.to("#nav-menu", {maxHeight: 0}, "-=.5");
    
    
    menuState = "closed";
}



// ///////////////////////////////////////////////////// Vanilla solution
// /////////////////////////////////////////////////////
// Mobile Menu - someone working vanilla solution 

// let burger = document.querySelector(".burg");
// burger.addEventListener("click", toggleMenu);

// function toggleMenu() {
//     var x = document.getElementById("nav-menu");
//     // if menu is open
//     if (x.style.maxHeight === "400px") { 
//       // close it
//       x.style.maxHeight = "0";
//       document.querySelector(".mobile-overlay").style.opacity = "0"
//       document.querySelector(".mobile-overlay").style.display = "none"
//       menuStatus = "closed"
//       console.log(menuStatus);
    
//     } else {
//       // if it's not open
//       x.style.maxHeight = "400px";
//       document.querySelector(".mobile-overlay").style.display = "block"
//       document.querySelector(".mobile-overlay").style.opacity = "1"
//       menuStatus = "open"
//       console.log(menuStatus);
//         if(menuStatus == "open") {
//             let overlay = document.querySelector(".mobile-overlay");
//             overlay.addEventListener("click", toggleMenu);

//             let links = document.querySelectorAll("nav a");
            
//             for (i = 0; i < links.length; i ++) {
//                 console.log(links[i]);
//                 links[i].addEventListener("click", toggleMenu);
//             }
//         }
//       }
//     }

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////