$(document).ready( function () {

    console.log('js accept')

    $('#burger').click( function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(' nav').slideUp(400);
        } else {
            $(this).addClass('active');
            $(' nav').slideDown(400).css('display', 'flex')
        }
    });



    $('#aboutShow').on('click', function () {
        $('.popUp').fadeIn(500).css('display', 'block');
        $('.absoluteBlackOut').fadeIn(500).css('display', 'flex');
    })
    $('#back').on('click', function () {
        $('.popUp').fadeOut(500);
        $('.absoluteBlackOut').fadeOut(500);
    });

    function myFunc () {
        if ($(this).hasClass('activeArrowDown')) {
            $(this).removeClass('activeArrowDown');
            $('.howPageToogle').slideUp(400);
        } else {
            $(this).addClass('activeArrowDown');
            $('.howPageToogle').slideDown(400);
        }
    }

    $('#arrowOne').click(myFunc);

});
