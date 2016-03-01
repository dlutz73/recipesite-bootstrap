$(document).ready(function() {
    $("img.thumbnail").mouseenter(function () {
        $(this).fadeTo("fast", 0.3);
    });
   $("img.thumbnail").mouseleave(function () {
       $(this).fadeTo("fast", 1);
    });
});



$(document).ready(function() {
    // Tooltip only Text
    $('.masterTooltip').hover(
        function () {
            // Hover over code
            var title = $(this).attr('title');
            $(this).data('tipText', title).removeAttr('title');
            $('<p class="tooltip"></p>').text(title).appendTo('body').fadeIn('slow');
        }, function() {
            // Hover out code
            $(this).attr('title', $(this).data('tipText'));
            $('.tooltip').remove();
        }).mousemove(function(e) {
            var mousex = e.pageX + 20; //Get X coordinates
            var mousey = e.pageY + 10; //Get Y coordinates
            $('.tooltip')
            .css({ top: mousey, left: mousex })
        });
});


//$(document).ready(function () {
//    $('#whole30').click(function( {
//        $(this).show(".whole30").removeClass(".sad");
//    }));
//});