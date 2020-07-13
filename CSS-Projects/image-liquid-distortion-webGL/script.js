Array.from(document.querySelectorAll('.img-box'))
    .forEach((e) => {
        const images = Array.from(e.querySelectorAll('img'));
        new hoverEffect({
            parent: e,
            intensity: 0.3,
            image1: images[0].getAttribute('src'),
            image2: images[1].getAttribute('src'),
            displacementImage: 'assets/displacement/13.jpg'
        });
})