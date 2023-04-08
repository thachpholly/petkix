$(document).ready(function () {
    $('#pholly-select li').click(function () {
        $('#pholly-select li').removeClass('selected')
        $(this).addClass("selected")
        console.log('#pholly-clone li[data-glide-index="' + $(this).attr('tabindex') + '"]');
        $('#pholly-clone li').removeClass('glide__slide--active')
        $('#pholly-clone li[data-glide-index="' + $(this).attr('tabindex') + '"]').addClass("glide__slide--active")
        $('#pholly-clone li').eq(0).before($('#pholly-clone li[data-glide-index="' + $(this).attr('tabindex') + '"]'))

    });
    $("#pholly-clone li").on("swipeleft", function (event) {
        var element = $(event.target);
        if ("LI" != event.target.tagName) element = $(event.target).parents("li");
        debugger
        $('#pholly-select li').removeClass('selected')
        $('#pholly-select li[tabindex="' + (Number(element.attr('data-glide-index')) + 1) + '"]').addClass("selected")
        console.log(element)

        $('#pholly-clone li').removeClass('glide__slide--active')
        $('#pholly-clone li').eq(element.index() + 1).addClass("glide__slide--active")
        $('#pholly-clone li').eq($('#pholly-clone li').size() - 1).after($('#pholly-clone li').eq(0))
    });

    $("#pholly-clone li").on("swiperight", function (event) {
        var element = $(event.target);
        if ("LI" != event.target.tagName) element = $(event.target).parents("li");
        debugger
        var index = Number(element.attr('data-glide-index'));
        if(index  == 0) index = $('#pholly-select li').size();
        $('#pholly-select li').removeClass('selected')
        $('#pholly-select li[tabindex="' + (index - 1) + '"]').addClass("selected")
        console.log(element)

        $('#pholly-clone li').removeClass('glide__slide--active')
        $('#pholly-clone li').eq(index - 1).addClass("glide__slide--active")
        $('#pholly-clone li').eq(0).before($('#pholly-clone li').eq($('#pholly-clone li').size() - 1))
    });
    setTimeout(function(){
        $('*[data-src]').each(function( index ) {
            console.log( index + ": " + $( this ).attr('data-src') );
            $( this ).attr('src', $( this ).attr('data-src'));
          });
    }, 700)
});