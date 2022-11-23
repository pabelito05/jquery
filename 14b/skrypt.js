$(function(){
    let a = 20;
    $('#button1').click(function(){
        a+=5;
        $('p').css('margin', a+"px");
    })
    $('#button2').click(function(){
        if(a>=5){
            a-=5;
            $('p').css('margin', a+"px");
        }
        
    })
})
