var componentBar = function(name, config){
    var component = componentBase(name, config);
    console.log(component.height())
    if(config.data!==undefined){
        config.data.forEach(function(d){
            var barWrap = $('<div class="bar-wrap"></div>')
            var barName = $('<div class="bar-name">'+d[0]+'</div>');
            var bar = $('<div class="bar"></div>');
            var barRate = $('<div class="bar-rate">'+d[1]*100+'%</div>');
            barRate.hide();
            d[2] && bar.css('backgroundColor', d[2]);
            bar.width(0);
            bar.on('onLoad', function(e){
                if(bar.height()===0){//如果css样式里没有设置bar的高度，默认bar高度是组件高度的十分之一
                    bar.height(component.height()/10);
                }
                bar.delay(500).animate({
                    width: d[1]*(component.width()-barName.width()-barRate.width()-1)//bar 100%的长度为组件的长度减去1,barName和barRate
                },function(){
                    bar.next().fadeIn();
                });//回调函数，载入bar后，显示百分比
                e.stopPropagation();
            });
            bar.on('onLeave', function(e){
                bar.animate({
                    width: 0
                }).next().fadeOut();
                e.stopPropagation();
            });
            barWrap.append(barName);
            barWrap.append(bar);
            barWrap.append(barRate);
            component.append(barWrap);
        })
    }
    return component;
}