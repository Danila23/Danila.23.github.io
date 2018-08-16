$(document).ready(function() {
    $('.js-popup-link').on('click', function (e) {
        e.preventDefault();
        var self = this;

        if($(this).data('href') == '.popup-videos') {
            $('.popup-videos').append('<iframe src="' + $(this).data('iframe') + '" frameborder="0" allowfullscreen></iframe>');
        }

        $('html').height($(window).height()).css('overflow', 'hidden');
        $('.page-wrap').css('overflow', 'scroll');

        $('.overlay').fadeIn(400,
            function () {
                $($(self).data('href'))
                    .css('display', 'block')
                    .stop().animate({opacity: 1}, 300);
            });
        return false;
    });

    $('.popup').on('click', function(e){
        e.stopPropagation();
    });

    $('.popup__close, .overlay').click(function () {
        $('.popup')
            .stop().animate({opacity: 0}, 300,
            function () {
                $('.popup-videos iframe').detach();
                $('.page-wrap').css('overflow', 'hidden');
                $('html').css('overflow', 'auto');
                $(this).css('display', 'none');
                $('.overlay').stop().fadeOut(400);
            }
        );
    });

    $('.js-scroll-link').click(function(){
        var index = $(this).data('href');
        $('html,body').stop().animate({ scrollTop: $(index).offset().top }, 1000);
    });

    $('form').submit(function(e){
        e.preventDefault();

        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: $(this).serialize(),
            success: function (data, textStatus, jqXHR) {
                $('.popup')
                    .stop().animate({opacity: 0}, 300,
                    function () {
                        $('.page-wrap').css('overflow', 'hidden');
                        $('html').css('overflow', 'auto');
                        $(this).css('display', 'none');
                        $('.overlay').stop().fadeOut(400);
                    }
                );
            }
        });
    });
});