let video = document.querySelector('video');
window.addEventListener('scroll', () => {
    let value = 1 + window.scrollY/-600;
    video.style.opacity = value;
})