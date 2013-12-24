(function($){

    $(".dropdown").on({
        mouseenter: function(){
            $(this).addClass("open");
        },
        mouseleave: function(){
            $(this).removeClass("open");
        }
    });

    $('.tips').tooltip();

    // GoToTop
    $('#gototop').hide();

    $("#gototop a[href^='#']").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo' );
        return false;
    });

    $('#gototop').on({
        mouseenter: function(){
            $(this).stop().animate({'bottom':'15px'}, 500, 'easeOutElastic' );
        },
        mouseleave: function(){
            $(this).stop().animate({'bottom':'5px'}, 500, 'easeOutElastic' );
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#gototop').fadeIn(600);
        }
        else {
            $('#gototop').fadeOut(600);
        }
    });
    // GoToTop

})(jQuery);