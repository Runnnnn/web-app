var componentLine = function(name, config){
    var component = componentBase(name, config);
    var myCanvas = document.createElement('canvas');
    var ctx = myCanvas.getContext('2d');
    var _width = config.width;
    var _height = config.height;
    myCanvas.width = ctx.width = _width;//规定画布宽高
    myCanvas.height = ctx.height = _height;
    myCanvas.style.width = '100%';//压缩画布的分辨率，和父元素的宽度一样。为了在retina屏幕上显示更细腻
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    for(var i=0;i<=10;i++){//画横线
        ctx.moveTo(0,i*(_height/10));
        ctx.lineTo(_width,i*(_height/10));
    }
    var blocks = config.data.length + 1;//列数
    for(var j=0;j<=blocks;j++){
        ctx.moveTo(j*(_width/blocks),0);
        ctx.lineTo(j*(_width/blocks),_height);
    }
    ctx.stroke();
    component.append(myCanvas);

    var myCanvasLine = document.createElement('canvas');
    var ctxLine = myCanvasLine.getContext('2d');
    myCanvasLine.width = ctxLine.width = _width;
    myCanvasLine.height = ctxLine.height = _height;
    myCanvasLine.style.width = '100%';
    ctxLine.fillStyle = '#ff7676';
    // ctxLine.strokeStyle = '#ff7676';
    for(var k=1;k<=config.data.length;k++){
        ctxLine.moveTo(k*(_width/blocks)+10,_height*(1-config.data[k-1][1]));//moveTo的起始位置是圆开始画的位置，所以要加10
        ctxLine.arc(k*(_width/blocks),_height*(1-config.data[k-1][1]),10,0,2*Math.PI);
    }
    ctxLine.fill();
    // ctxLine.stroke();
    ctxLine.moveTo((_width/blocks),_height*(1-config.data[0][1]))
    for(var l=1;l<=config.data.length;l++){
        ctxLine.lineTo(l*(_width/blocks),_height*(1-config.data[l-1][1]));
    }
    ctxLine.lineWidth = 1;
    ctxLine.strokeStyle = '#ff7676';
    ctxLine.stroke();
    ctxLine.lineTo(config.data.length*(_width/blocks),_height);
    ctxLine.lineTo((_width/blocks),_height);
    ctxLine.fillStyle='rgba(255,188,188,0.5)';
    ctxLine.fill();
    for(var m=1;m<=config.data.length;m++){
        ctxLine.moveTo(m*(_width/blocks),_height*(1-config.data[m-1][1]));
        ctxLine.fillStyle = '#505050';
        ctxLine.font="14px Verdana";
        ctxLine.fillText( (config.data[m-1][1])*100+'%', m*(_width/blocks)-12,_height*(1-config.data[m-1][1])-20);
    }
    component.append(myCanvasLine);

    return component;
}