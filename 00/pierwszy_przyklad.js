$(function(){
    $('#page').css('background-color', '#00FFFF');
    $('h2').css('letter-spacing', '5px');
    $('.link').css({
        'color': 'black',
        'text-decoration': 'none',
    });
    $('[href="#"]').attr('href', 'https://pl.wikipedia.org/wiki/J%C4%99zyk_programowania');
    $('a').odd().css({
        'color': 'white',
        'text-decoration': 'none',
        'background-color': "black",
    })
    $('a').not('#pierwszy').css({
        'color': 'white',
        'text-decoration': 'none',
        'background-color': 'black',
    })

    const $lista_ul = $('ul').html();
    console.log($lista_ul);

    const $lista_li = $('li').html();
    console.log($lista_li);

    console.log($('h2').text());
});