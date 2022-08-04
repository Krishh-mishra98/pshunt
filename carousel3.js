$(document).ready(function () {
    $('#prev').on('click', function () {
var last = $('.mySlides2').last().css({opacity: '0', width: '0px'});
last.prependTo('.showrooms');
last.animate({opacity: '1', width: '440px'});// IMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
});
$('#next').on('click', function () {
var first = $('.mySlides2').first();
first.animate({opacity: '0', width: '0px'}, function() {
    first.appendTo('.showrooms').css({opacity: '1', width: '440px'});//IMPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
});
});
});