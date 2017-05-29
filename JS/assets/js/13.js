function l(e){
    console.log(e);
}

function w(a){
    document.write(a);
}

var google = document.getElementById("google");
l(google);


l("le lien vers lequel pointe la balise : ");
l(google.href);

l("L'ID de la balise :");
l(google.id);

l("la classe de la balise :");
l(google.className);

l('le texte de la balise');
l(google.textContent);


google.textContent = "Mon lien vers Google!";


// AJOUTER UN ELEMENT DANS MA PAGE

// Nous allons ajouter deux element dans la page

/*
1: la fonction document.createElement() va permettre de générer un nouvel élément dnas le DOM; que je pourrais par la suite modifier avec les méthodes que nous venons de voir.

// PS : ce nouvel élément est placé en mémoire.
 */

var span = document.createElement("span");

span.id="MonSpan";

span.textContent="Mon Beau Tetxe en JS";

google.appendChild(span);

/*
    EXERCICE
    En partant du travail déjà réalisé sur la page.
    Créez directment dnas la page une balise <h1></h1> ayant comme contenu : "titre de mon article".

    Dans cette balise, vous creerez un lien vers une url de votre choix.

    Bonus: ce lien sera de couleur Rouge et non souligné
 */


var h1 = document.createElement("h1");

var a = document.createElement("a");
a.textContent ="titre de mon article";

a.href="#";

h1.appendChild(a);
document.body.appendChild(h1);

a.style.color="red";
a.style.textDecoration="none";
// jabs

