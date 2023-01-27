$(function(){
    $('input').click(function(){
        let a = 0;
        $('input').each(function(){
            if(this.checked) a++;
        })
        switch(a){
            case 0: $('p').text(""); break;
            case 1: $('p').text("Zaznaczono 1 pole"); break;
            default: $('p').text("Zaznaczono " + a + " pól"); break;
        }
    })
})