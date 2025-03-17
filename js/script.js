(function($){
    $(function(){});
})(jQuery);

/*mobile navigation*/
(function ($) {
    $(function () {

        $(".jq--nav-icon").click(function () {
            $(".nav-background").slideToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle(); // Přidáme/odebereme třídu
        });

    });
})(jQuery);




