const primaryNav =  document.querySelector(".primary-navigation");
const menuButton = document.querySelector(".hamburger");

menuButton.addEventListener("click", () => {
    const showMenuStatus = primaryNav.getAttribute("showMenu");
    if (showMenuStatus==="false"){
        primaryNav.setAttribute("showMenu", true);
        menuButton.setAttribute("aria-expanded", true);
    }else{
        primaryNav.setAttribute("showMenu", false);
        menuButton.setAttribute("aria-expanded", false);
    }
   //console.log(showMenuStatus);
});

//Scroll Event
// window.sr = ScrollReveal();

// sr.reveal('.animate-left',{
//   origin:'left',
//   duration:1000,
//   distance:'25rem',
//   delay: 300  
// });

// sr.reveal('.animate-right',{
//     origin:'right',
//     duration:1000,
//     distance:'25rem',
//     delay: 600  
//   });


//   sr.reveal('.animate-up',{
//     origin:'top',
//     duration:1000,
//     distance:'25rem',
//     delay: 600  
//   });