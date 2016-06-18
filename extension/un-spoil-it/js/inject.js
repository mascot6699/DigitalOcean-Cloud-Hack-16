arr = ["safer", "the"];


$.each( arr, function( index, word ){
    $('*:contains('+word+'):not(:has(*:contains('+word+')))').addClass('possible-spolier');
});
 