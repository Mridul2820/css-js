function createBubble() {
    const section = document.querySelector('section');
    const createElememt = document.createElement('span');

    let size = Math.random() * 60;

    createElememt.style.width = 20 + size + 'px';
    createElememt.style.height = 20 + size + 'px';
    createElememt.style.left = Math.random() * innerWidth +'px';
    section.appendChild(createElememt);

    setTimeout(() => {
        createElememt.remove();
    }, 4000);
}

setInterval(createBubble, 50);
