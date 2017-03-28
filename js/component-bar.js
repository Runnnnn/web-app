var componentBar = function(name, config){
    var component = componentBase(name, config);
    // console.log(component.height())
    if(config.data!==undefined){
        config.data.forEach(function(d){
            var barWrap = $('<div class="bar-wrap"></div>')
            var barName = $('<div class="bar-name">'+d[0]+'</div>');
            var bar = $('<div class="bar"></div>');
            var barRate = $('<div class="bar-rate">'+d[1]*100+'%</div>');
            d[2] && bar.css('backgroundColor', d[2]);
            if(config.vertical){
                component.css({
                    display:'flex',
                    flexWrap:'nowrap'
                })
                barWrap.css({
                    display:'flex',
                    flexDirection:'column-reverse',
                    height: component.height(),
                    flexGrow:'1',
                    flexShrink:'1',
                    flexBasis:component.width()/config.data.length,
                    textAlign:'center',
                })
                var dataCount = config.data.length;
                barName.width(component.width()/dataCount);
                barRate.width(component.width()/dataCount);
                bar.css({
                    height:0,
                    width:component.width()/(dataCount*3),
                    marginLeft: (component.width()/config.data.length-component.width()/(dataCount*3))/2
                })
                bar.on('onLoad', function(e){
                    if(config.defaultAnimate){//默认动画
                        barRate.hide();
                        bar.animate({
                            height: d[1]*(component.height()-barName.outerHeight()-barRate.outerHeight()-1)//bar 100%的长度为组件的长度减去1,barName和barRate
                        },function(){
                            bar.next().fadeIn();
                        });//回调函数，载入bar后，显示百分比
                    }else{
                        bar.height(d[1]*(component.height()-barName.outerHeight()-barRate.outerHeight()-1));
                    }
                    e.stopPropagation();
                });
                bar.on('onLeave', function(e){
                    if(config.defaultAnimate){
                        bar.animate({
                            height: 0
                        }).next().fadeOut();
                    }else{
                        bar.height(0);
                    }
                    e.stopPropagation();
                });
                barWrap.append(barName);
                barWrap.append(bar);
                barWrap.append(barRate);
                component.append(barWrap);
            }
            if(!config.vertical || config.vertical===undefined){
                bar.width(0);
                bar.height(20);
                bar.on('onLoad', function(e){
                    // if(barWrap.height()===0){//如果css样式里没有设置bar的高度，默认bar高度是组件高度的十分之一
                        barWrap.height(component.height()/10);
                    // }
                    if(config.defaultAnimate){//默认动画
                        barRate.hide();
                        bar.delay(700).animate({
                            width: d[1]*(component.width()-barName.outerWidth()-barRate.outerWidth()-1)//bar 100%的长度为组件的长度减去1,barName和barRate
                        },"slow",function(){
                            bar.next().fadeIn();
                        });//回调函数，载入bar后，显示百分比
                    }else{
                        bar.width(d[1]*(component.width()-barName.outerWidth()-barRate.outerWidth()-1));
                    }
                    e.stopPropagation();
                });
                bar.on('onLeave', function(e){
                    if(config.defaultAnimate){
                        bar.animate({
                            width: 0
                        }).next().fadeOut();
                    }else{
                        bar.width(0);
                    }
                    e.stopPropagation();
                });
                barWrap.append(barName);
                barWrap.append(bar);
                barWrap.append(barRate);
                component.append(barWrap);
            }
        })
    }
    return component;
}