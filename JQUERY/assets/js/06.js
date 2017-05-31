/*
    ------------------------------
    LES SELECTEURS D'ENFANT JQUERY
    ------------------------------

 */


// -- initialisation jquery

$(function(){
// -- ici comment mon code jquery
// -- Les flemmard.js
function l(e){
    console.log(e);
}

// --je souhaite selectionner toutes mes div

l($('div'));

// --je souhaite selectionner le header

l($('header'));
// -- je souhaite tous les éléments (descendant direct cad les enfant qui sont dans le header)

l($('header').children());

// -- je souhaite parmis mes decendant direct uniquement les element ul

l($('header').children('ul'));

// -- je souhaite récuperer tout les éléments "li" de mon ul

l($('header').children('ul').find('li'));

// -- je souhaite uniquement le 2eme éléments de mes "li"

l($('header').find('li').eq(1));

// -- je souhaite connaitre le voisin immediat de mon header
l($('header').next());
l($('header').next().next());//--le voisin du voisin...
l($('header').prev())//-- Le voisin d'avant

// --LES PARENT
l($('header').parent());

});