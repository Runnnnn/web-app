window.onload = function() {
    $('.page').eq(0).fadeIn();
    $('#H5').fullpage({
        onLeave: function(index, nextIndex, direction) {
            $('#H5').find('.page').eq(index - 1).trigger('onLeave');
        },
        afterLoad: function(anchorLink, index) {
            $('#H5').find('.page').eq(index - 1).trigger('onLoad');
        }
    });
    $('.page').on('onLeave', function() {
        $(this).fadeOut();
    })
    $('.page').on('onLoad', function() {
        $(this).fadeIn();
    })
}