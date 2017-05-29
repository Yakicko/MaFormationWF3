/*
    LE DOM
    Le DOM, est une interface de développement en JS pour HTML. Grâce au DOM, je vais être en mesure d'accéder / modifier mon HTML.

    L'objet "document" : c'est le point d'entrée vers mon contenu HTML !

    Chaque page chargée dans mon navigateur à un objet "document".
 */

// -- Comment faire pour récuperer les différentes informations de ma page HTML?

/*
    document.getElementById()

    document.getElementById(): c'est une fonction qui va permettre de récupérer un élément HTML à partir de son identifiant unique : ID.
 */

var bonjour = document.getElementById("bonjour");
console.log(bonjour);


/*
    document.getElelementByClassName(): c'est une fonction qui va permettre de récuperer un ou plusieur éléments (une liste) HTML àp partir de leur classe.
 */

var contenu = document.getElementsByClassName("contenu");
console.log(contenu);

/*
    document.getElelementByTagName(): c'est une fonction qui va permettre de récuperer un ou plusieur éléments (une liste) HTML à partir de leur nom de balise.
 */


var span = document.getElementsByTagName("span");
console.log(span);