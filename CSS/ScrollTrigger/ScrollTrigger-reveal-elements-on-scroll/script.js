const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%",
        // markers: true
    })
})

const image = gsap.utils.toArray('img');
image.forEach((img, i) => {
    ScrollTrigger.create({
        trigger: img,
        toggleClass: 'active',
        start: "top 90%",
        end: "top 20%",
        // markers: true
    })
})