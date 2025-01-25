

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


