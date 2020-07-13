$(window).scroll( () => {
    var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
        value = (scroll / (dh-wh)) * 100;
    $('#container').css('left', - value * 4 + '%');
})