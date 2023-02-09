$(function(){
    $('input').click(function(){
        $('p').text($('#l'+$(this).attr('id')).text());
    })
})