function counter() {
    var count = setInterval(() => {
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if(c == 100){
            clearInterval(count);
            $('.counter').addClass('hide');
            $('.preloader').addClass('active');
        }
    },30)
}

counter()