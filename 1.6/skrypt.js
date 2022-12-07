$(function(){
    $('#start').click(function(){
        $('p').animate({'width':'1000px', 'border-width':'20px', 'font-size':'100px'}, 'slow');
    })
    $('#przywroc').click(function(){
        $('p').css({'width':'400px', 'border-width':'3px', 'font-size':'unset'});
    })
})