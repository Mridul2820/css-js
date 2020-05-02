// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene = new ScrollMagic.Scene({
    offset: 200,
    triggerElememt: '.red-cube'
})
.setClassToggle('.red-cube', 'show')
.addTo(controller);