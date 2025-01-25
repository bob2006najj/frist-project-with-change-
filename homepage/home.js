
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const menuText = document.querySelectorAll('.menuText');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuText.forEach(function (text, index) {
        setTimeout(() => {
            text.classList.toggle('open2');
        }, index * 50);
    })
})

$(document).on('click', function (e) {
    if ($(e.target).closest('#menu').length === 0) {
        menu.classList.toggle('open');
        menuText.forEach(function (text, index) {
            setTimeout(() => {
                text.classList.toggle('open2');
            }, index * 50);
        })
    }
})



const dayNight = document.querySelector('#themeChangeBtn');

dayNight.addEventListener('click', () => {

  document.body.classList.toggle('dark');


  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  updateIcon();
});

function themeMode() {
 
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }


  updateIcon();
}

function updateIcon() {
  
  const icon = dayNight.querySelector('i');
  if (document.body.classList.contains('dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}


themeMode();



const video = document.getElementById('scroll-video');


const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                video.play();
            } else {
                
                video.pause();
            }
        });
    },
    { threshold: 0.5 } 
);


observer.observe(video);












