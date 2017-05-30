/*
    ----------------------
    LES SELECTEURS JQUERY
    ----------------------

    // -- Format : $('selecteur')
    // -- En jQuerry, tous les sélecteurs CSS sont disponibles...

 */
// -- DOM READY!
$(function(){
    // les flemards.js
    function l(e){
        console.log(e);
    }

    // -- sélectionner les balise SPAN:

    // --version javascript
    l('SPAN en JS :');
    l(document.getElementsByTagName('span'));

    // --version jquery
    l('SPAN en JQ :');
    l($("span"));

    // -- Sélectionner mon Menu

    // -- version javascript : 
    l("ID via JS:");
    l(document.getElementById("menu"));

    // -- version jquery
    l('ID via jquery :');
    l($("#menu"));

    // --Sélectionner une classe

    // -- Version Javascript
    l('classe via JS:');
    l(document.getElementsByClassName('MaClasse'));

    // -- version jquery
    l('classe via JQuery:');
    l($('.MaClasse'));
    // -- Selectionner par attribut
    l('Par attribut :');
    l($("[href='http://www.google.fr']"));









});

