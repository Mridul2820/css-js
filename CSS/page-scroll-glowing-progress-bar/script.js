$(window).scroll( () => {
    var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();

    scrollPercent = (scroll / (dh - wh)) * 100;
    $('#progressbar').css('height', scrollPercent + '%')
})