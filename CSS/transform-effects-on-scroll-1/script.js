let scroll = document.querySelector('.curve');
window.addEventListener('scroll', () => {
    let value = 1 + window.scrollY/-500;
    scroll.style.transform = `scaleY(${value})`;
})