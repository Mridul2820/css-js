let skewed = document.querySelector('.skewed');
window.addEventListener('scroll', () => {
    let value = -10 + window.scrollY/60;
    skewed.style.transform = "skewY(" + value + "deg)";
})