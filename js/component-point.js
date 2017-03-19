var componentPoint = function(name, config){
    var component = componentBase(name, config);
    if(config.data!==undefined){
        var base = config.data[0][1];
        config.data.forEach(function(d){
            if(base<d[1]){
                base = d[1];
            }
        })

        config.data.forEach(function(d){
            var name = d[0];
            var rate = d[1]*100 +'%';
            var point = $('<div class="point"><div class="name">'+name+'\
                <div class="rate">'+rate+'</div></div></div>');
            d[2] && point.css('backgroundColor', d[2]);
            point.width(d[1]/base*100+'%');
            point.height(d[1]/base*100+'%');
            if(d[1]/base===1){
                point.css('z-index', 1000);
            }
            if(d[3]!==undefined&&d[4]!==undefined){
                point.css('left', d[3]);
                point.css('top', d[4]);
            }
            if(d[5]!==undefined&&d[6]!==undefined){//point，散点的动画效果
                point.on('onLoad', function(e){
                    point.delay(500).animate({
                        left: d[5],
                        top: d[6]
                    })
                    e.stopPropagation();
                });
                point.on('onLeave', function(e){
                    point.animate({
                        left: d[3],
                        top: d[4]
                    })
                    e.stopPropagation();
                });
            }
            component.append(point);
        })
    }
    return component;
}