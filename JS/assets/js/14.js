/*                                 --------------------
                                   |  LES EVENEMENTS  |
                                   --------------------

    Les Evenement vont me permmettre de Déclencher une fonction, c'est a dire : une serie d'instruction, suite à une action de mon utilisateur.

    OBJECTIF : Etre en mesure de capture ces évènement, afin d'executer une fonction.

    Les Evenements : Mouse (souris)

    click : au click sur un élément,
    mouseenter : la souris passe au dessus de la zone qu'occupe un élément
    mouseleave : la souris sort de cette zone

    Les Evenement : KEYBORD (Clavier)

    keydown : une touche du clavier est enfoncée
    keyup   : une touche a été relachée

    Les Evenements : WINDOW (Fenetre)

    sscroll : defilement de la fenetre
    resize  : redimensionnement de la fenetre

    Les Evenements : FORM (Formulaire)

    Change : pour les éléments <input>, <select> et <textarea>
    submit : à l'envoi (soumission) d'un formulaire

    Les Evènements : DOCUMENT

    DOMContentLoaded : Executé lorsque le document HTML est complètement chargé, sans attendre le CSS et les images.

    

                            ----------------------------
                            | LES ECOUTEURS D'EVENEMENT|
                            ----------------------------

    pour attacher un évènement à un élément, ou autrement dit, pour déclarer un écouteur d'évènement qui se chargera de lancer une action, c'est à dire une fonction pour un évènement donné,je vais utiliser la syntaxe suivante : 


 */

var p = document.getElementById("MonParagraphe");
console.log(p);

// -- je souhaite que mon paragraphe soit rouge au click de la souris.

// --1 : je défini une fonction chargé d'éxécuter cette action.
function changeColorToRed(){
    p.style.color = "red";
}

// -- 2 :je déclare un écouteur qui se chargera d'appeller la fonction au déclenchement de l'évènement

p.addEventListener("click",changeColorToRed);


/*
    EXERCICE PRATIQUE

    A l'aide de javascript, créez un champ "input" type text avec un ID unique.
    Afficher ensuite dans une alerte, la saisie de l'utilisateur
 */

var input = document.createElement("input");
input.type="text";
input.id="monInput";

var submit = document.createElement("input");
submit.type="submit"
submit.id="monSubmit"
submit.value="jabs";


document.body.appendChild(input);
document.body.appendChild(submit);

function surface()
    {    
       
        if(input.value == ""){
            alert("veuillez retaper");
        } 
        else
        {
            alert(input.value);
        } 
    }    

submit.addEventListener("click",surface); 
