$(function(){
    $('h2').each(function(nr){
        alert("Nagłówek nr " + nr + " na stronie. Treść nagłówka: " +$(this).text());
    })
});