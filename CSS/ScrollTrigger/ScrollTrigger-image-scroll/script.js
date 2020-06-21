gsap.timeline({
    scrollTrigger: {
        trigger: ".section-1",
        // Animation starts at this point
        start: "center center",  
        // Animation ends at this point
        end: "bottom top", 
        markers: false,
        scrub:  true,
        pin:  true
    }
})
.to(".text-1", { scale : 0})
.from(".box1", { x : innerWidth * -1})
.from(".box2", { x : innerWidth * 1})
.from(".box3", { x : innerWidth * -1})
.from(".box4", { x : innerWidth * 1})
.from(".box5", { x : innerWidth * -1})
.from(".box6", { x : innerWidth * 1})
.from(".box7", { x : innerWidth * -1})
.from(".box8", { x : innerWidth * 1})
.from(".text-2", { scale : 0})


gsap.timeline({
    scrollTrigger: {
        trigger: ".section-2",
        // Animation starts at this point
        start: "center center",  
        // Animation ends at this point
        end: "bottom top", 
        markers: false,
        scrub:  true,
        pin:  true
    }
})
.from(".section-2", { opacity : 0 })
.from(".heading", { y : innerHeight * 1})
.from(".paragraph", { y : innerHeight * -1})