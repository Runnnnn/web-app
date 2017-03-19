var componentBase = function(name, config) {
    var config = config || {};
    var id = 'base-' + Math.random();
    var cls = 'component-base-' + config.type + ' component-base-name-' + name;
    var component = $('<div class="component-base ' + cls + '" id="' + id.replace('0.', '') + '"></div>');
    config.text && component.text(config.text);
    config.width && component.width(config.width / 2);
    config.height && component.height(config.height / 2);
    config.css && component.css(config.css);
    config.background && component.css('backgroundImage', 'url(' + config.background + ')');
    config.center && component.css({
        'left': '50%',
        'marginLeft': '-' + config.width / 4 + 'px',
    });
    component.on('onLoad', function(){
        config.relativeTo && component.css({
            top:config.css.top+$('.component-base-name-'+config.relativeTo).offset().top,
            left:config.center ===undefined?config.css.left+$('.component-base-name-'+config.relativeTo).offset().left : null,
        });
        component.addClass('component-'+name+'-onLoad');
        component.removeClass('component-'+name+'-onLeave');
        config.animateLoad && component.animate( config.animateLoad, 500 );
    });
    component.on('onLeave', function(){
        component.addClass('component-'+name+'-onLeave');
        component.removeClass('component-'+name+'-onLoad');
        config.animateLeave && component.animate( config.animateLeave, 500 );
    });
    component.on('click', function(e) {
        console.log(123123)
        return false
        // e.stopPropagation();
    });
    return component;
}