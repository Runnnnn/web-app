var Basic = function(){
    var id = ('page-wrap-' + Math.random()).replace('.','');
    this.pageWrap = $('<div class="page-wrap" id="'+id+'"></div>');
    this.pageWrap.hide();
    this.page = '';
    $('body').append(this.pageWrap);
}
Basic.prototype.addPage = function(name, text){
    var id = ('page-' + Math.random()).replace('.','');
    this.page = $('<div class="component-page section" id="'+id+'"></div>')
    text && this.page.text(text);
    name && this.page.addClass('component-page-' + name);
    this.pageWrap.append(this.page);
    return this;
}
Basic.prototype.addComponent = function(name, config){
    var config = config || {};
    config.type !==undefined? null : config.type = 'base';
    switch(config.type){
        case 'base':
            var component = componentBase(name, config);
            break;
        default:
            console.log('no');
            break;
    }

    this.page.append(component);
    return this;
}
Basic.prototype.loadPage = function(){
    this.pageWrap.show();
    this.pageWrap.fullpage({
        onLeave: function(index, nextIndex, direction) {
            console.log(this);
            $(this).find('.component-base').trigger('onLeave');
        },
        afterLoad: function(anchorLink, index) {
            $(this).find('.component-base').trigger('onLoad');
        }
    });
    console.log(this.pageWrap.children().eq(0))//找到第一页中的所有component-base组件
    this.pageWrap.children().eq(0).find('.component-base').trigger('onLoad');
    return this;
}