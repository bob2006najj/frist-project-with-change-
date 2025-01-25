// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// /* Menu show */
// if(navToggle){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     })
// }

// /* Menu hidden */
// if(navClose){
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }


// document.addEventListener('DOMContentLoaded', () => {
//     const navMenu = document.getElementById('nav-menu');
//     const navToggle = document.getElementById('nav-toggle');
//     const navClose = document.getElementById('nav-close');

//     console.log('navMenu:', navMenu); // Should log the <div id="nav-menu"> element
//     console.log('navToggle:', navToggle); // Should log the <div id="nav-toggle"> element
//     console.log('navClose:', navClose); // Should log the <div id="nav-close"> element

//     if (navToggle) {
//         navToggle.addEventListener('click', () => {
//             navMenu.classList.add('show-menu');
//         });
//     }

//     if (navClose) {
//         navClose.addEventListener('click', () => {
//             navMenu.classList.remove('show-menu');
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM fully loaded');
//     const navMenu = document.getElementById('nav-menu');
//     console.log('navMenu:', navMenu);
// });






// const navLink = document.querySelectorAll('.nav__link')

// const linkAction = () =>{
//     const navMenu = document.getElementById('nav-menu')
    
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))


// const scrollUp = () => {
//     const scrollUpButton = document.getElementById('scroll-up');
//     // Show the button when scrolling down 200px
//     if (this.scrollY >= 200) {
//         scrollUpButton.classList.add('show-scroll');
//     } else {
//         scrollUpButton.classList.remove('show-scroll');
//     }
// };
// window.addEventListener('scroll', scrollUp);






// /*=============== CHANGE BACKGROUND HEADER ===============*/
// const shadowHeader = () =>{
//     const header = document.getElementById('header')
//     // Add a class if the bottom offset is greater than 50 of the viewport
//     this.scrollY >= 50 ? header.classList.add('shadow-header') 
//                        : header.classList.remove('shadow-header')
// }
// window.addEventListener('scroll', shadowHeader)

// //swiper popular

// const swiperPopular = new Swiper('.popular__swiper ', {
    
//     loop: true,
//     grabCursor: true,
//     slidesPerview: 'auto',
//     centeredSlides: 'auto',
  
//   })




//   /*=============== SHOW SCROLL UP ===============*/ 
// // const scrollUp = () =>{
// // 	const scrollUp = document.getElementById('scroll-up')
// //     // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
// // 	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
// // 						: scrollUp.classList.remove('show-scroll')
// // }
// // window.addEventListener('scroll', scrollUp)




// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// // const sections = document.querySelectorAll('section[id]')
    
// // const scrollActive = () =>{
// //   	const scrollDown = window.scrollY

// // 	sections.forEach(current =>{
// // 		const sectionHeight = current.offsetHeight,
// // 			  sectionTop = current.offsetTop - 58,
// // 			  sectionId = current.getAttribute('id'),
// // 			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

// // 		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
// // 			sectionsClass.classList.add('active-link')
// // 		}else{
// // 			sectionsClass.classList.remove('active-link')
// // 		}                                                    
// // 	})
// // }
// // window.addEventListener('scroll', scrollActive)

// const sr=ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 300,

// });

// sr.reveal(`.home__data, .popular__container, .footer`);
// sr.reveal(`.home__board`,{delay: 700,distance: '100px',origin:'right'});
// sr.reveal(`.home__pizza`,{delay: 1400,distance: '100px',origin:'bottom',rotate:{z:-90}});
// sr.reveal(`.home__ingredient`,{delay: 2000,interval:100});
// sr.reveal(`.about__data, .recipe__list, .contact__data`,{origin:'right'});
// sr.reveal(`.about__img, .recipe__img, .contact__image`,{origin:'left'});
// sr.reveal(`.products__card`,{interval:100});



