let box = document.querySelector('.box');
window.onmousemove = function(e) {
    let r = e.clientY / 5;
    box.style.transform = "perspective(1000px) rotateY(35deg) rotateX(" + r + "deg)";
}