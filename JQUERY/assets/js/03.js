/*
    -----------------------
    LE CAHINAGE DE MTEHODE
    -----------------------

 */

$(function(){

    // --je souhaite cacher toute les div de ma page HTML
    $('div').hide('slow',function(){

        // -- une fois que la méthode hide() est terminée, mon alerte peut s'executer.
        alert('fin du Hide');

        // -- NOTA BENE : La fonction s'executera pour l'ensemble des éléments du sélecteur.

        // -- CSS
        $('div').css("background","yellow");
        $('div').css("color","red");

        // --je fais réapparaitre mes DIVs
        $('div').show();

    });// fonction anonyme

    // --En utilisant le chainage de methode, vous pouvez enchainer plusieur fonction les unes apres les autres...

    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);

    // -- Mais c'est encore trop long!

    $('p').hide().css({'color':'blue','font-size':'20px'}).delay(2000).show();
    

});