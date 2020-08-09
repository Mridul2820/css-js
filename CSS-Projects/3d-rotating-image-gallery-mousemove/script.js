let box = document.querySelector('.box');
window.onmousemove = function(e) {
    let r = e.clientX / 5;
    box.style.transform = "perspective(1000px) rotateY(" + r + "deg)";
}