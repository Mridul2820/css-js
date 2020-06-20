gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        // Animation starts at this point
        start: "center center",  
        // Animation ends at this point
        end: "bottom top", 
        markers: false,
        scrub:  true,
        pin:  true
    }
})
.from(".text1", { x : innerWidth * 1})
.from(".text2", { x : innerWidth * -1})
.from(".text3", { x : innerWidth * 1})
.from(".logo", { 
    y : innerHeight * 1,
    rotate : 360
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".box2",
        // Animation starts at this point
        start: "center center",  
        // Animation ends at this point
        end: "bottom top", 
        markers: false,
        scrub:  true,
        pin:  true
    }
})
.from(".box2", { opacity : 0 })
.from(".text4", { y : innerHeight * 1})
.from(".text5", { y : innerHeight * -1})
.from(".text6", { y : innerHeight * 1})