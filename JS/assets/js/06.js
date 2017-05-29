// LES FONCTIONS

// Declarer une fonction

// cette fonction ne retourne aucune valeurs
var name="chris ";
var prenom="Christopher";
var nom="Longfort";

function DitBonjour(prenom){
    console.log(prenom + "bonjour !");
}

DitBonjour(name);

// Declarer une fonction qui prend une variable en parametre


function Bonjour(prenom,nom){
    document.write("<p>Soit le Bienvenu <strong>" + nom + " " + prenom +"</strong> !</p>")
}

Bonjour(prenom,nom);
Bonjour("pas frais","Jambon");

// exo
// creer une fonction capable d'additionner deux nombre passer en parametre


function addition(nb1, nb2){
    var resultat=nb1+nb2;
    return (resultat) ;
}

var resultats=addition(1,3);

console.log(resultats);