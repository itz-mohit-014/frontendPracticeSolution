const videoOverlay = document.querySelector('#video-overlay');
const videoOverlayCover = document.querySelector('.video-overlay-cover > img');
const videoOverlayClose = document.querySelector('.video-overlay-close-btn');
const hamburger = document.getElementById('hamburger');
const showMobileMenu = document.querySelector('.header-right');

// for hamburger menu

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    showMobileMenu.classList.toggle("open") 
    
});


videoOverlayCover.addEventListener('click', ()=>{
    videoOverlay.classList.toggle('open');
    
});

videoOverlayClose.addEventListener('click', ()=>{
    videoOverlay.classList.remove('open');
});