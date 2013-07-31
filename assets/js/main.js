(function($){

    $(".dropdown").on({
        mouseenter: function(){
            $(this).addClass("open");
        },
        mouseleave: function(){
            $(this).removeClass("open");
        }
    });

})(jQuery);