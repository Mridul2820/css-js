let bg = document.querySelector('#bg');
window.addEventListener('scroll', () => {
    var value = window.scrollY;
    bg.style.backgroundSize = 100 + value*2 + "px";
})