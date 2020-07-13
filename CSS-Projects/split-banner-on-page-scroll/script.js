var side1 = document.getElementById('side1');
window.addEventListener("scroll", () => {
    side1.style.left = -window.pageYOffset + "px";
})

var side2 = document.getElementById('side2');
window.addEventListener("scroll", () => {
    side2.style.left = window.pageYOffset + "px";
})