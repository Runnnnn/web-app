var componentRadar = function(name, config){
    var component = componentBase(name, config);
    var myCanvas = document.createElement('canvas');
    var ctx = myCanvas.getContext('2d');
    var _width = config.width;
    var _height = config.height;
    var _r = _width/2;
    var _steps = config.data.length;
    var _rad = (2*Math.PI/_steps);
    myCanvas.width = ctx.width = _width;//规定画布宽高
    myCanvas.height = ctx.height = _height;
    myCanvas.style.width = '100%';//压缩画布的分辨率，和父元素的宽度一样。为了在retina屏幕上显示更细腻
    
    for(var t=10;t>=1;t--){
        ctx.beginPath();
        ctx.strokeStyle = '#000';
        ctx.fillStyle = (t%2===1?'#00f':'#0f0');
        // ctx.moveTo( (Math.sin(_rad)*_r+_r)*(t/10), (Math.cos(_rad)*_r+_r)*(t/10) )
        for(var i=1;i<=_steps;i++){
            var x = Math.sin(_rad*i)*_r+_r;
            var y = Math.cos(_rad*i)*_r+_r;
            ctx.lineTo( x*(t/10)+_r*(1-t/10),y*(t/10)+_r*(1-t/10) );
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
    // ctx.beginPath();
    // ctx.strokeStyle = '#000';
    // ctx.fillStyle = '#00f';
    // // ctx.moveTo( (Math.sin(_rad)*_r+_r)*(t/10), (Math.cos(_rad)*_r+_r)*(t/10) )
    // for(var i=1;i<=_steps;i++){
    //     var x = Math.sin(_rad*i)*_r*0.4+_r*0.4;
    //     var y = Math.cos(_rad*i)*_r*0.4+_r*0.4;
    //     ctx.lineTo(x+_r*0.6,y+_r*0.6);
    // }
    // ctx.closePath();
    // ctx.stroke();
    // ctx.fill();

    component.append(myCanvas);

    function animateCanvas( per ){

    }
    // component.append();
    // animateCanvas(1)
    // setTimeout(function(){animateCanvas(1)},2000);
    // setTimeout(function(){animateCanvas(0.5)},2200);
    // setTimeout(function(){animateCanvas(0.2)},2400);
    // component.on('onLoad', function(){
    //     var per = 1
    //     for(var i=0;i<100;i++){
    //         setTimeout(function(){
    //             per = per - 0.01
    //             animateCanvas(per)
    //         },i*10+1000);
    //     }
    // })
    // component.on('onLeave', function(){
    //     var per = 0
    //     for(var i=0;i<100;i++){
    //         setTimeout(function(){
    //             per = per + 0.01
    //             animateCanvas(per)
    //         },i*1);
    //     }
    // })
    return component;
}