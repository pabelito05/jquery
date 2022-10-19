$(function () {
    $('input').click(function () {
        if(document.getElementById('checkbox').checked){
            $('button').prop('disabled', false);
        }else $('button').prop('disabled', true);
    })
})