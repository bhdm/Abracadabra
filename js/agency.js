    $(document).ready(function () {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });

        $('#langadd').click(function () {

            $('.lang-box').append($('.lang-box-hidden').html());
        });
    });


    // Highlight the top nav as scrolling occurs
    // $('body').scrollspy({
    //     target: '.navbar-fixed-top',
    //     offset: 51
    // });

    // // Closes the Responsive Menu on Menu Item Click
    // $('.navbar-collapse ul li a').click(function(){
    //         $('.navbar-toggle:visible').click();
    // });

    // Offset for Main Navigation
    // $('#mainNav').affix({
    //     offset: {
    //         top: 100
    //     }
    // })

