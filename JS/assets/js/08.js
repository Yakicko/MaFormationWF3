/*
    LES CONDITION
 */

// EXERCIE

/*
    creer une fonction permettant de vérifier l'age d'un visiteur (prompt)
    si il est majeure, alors je lui souhaite la bienvenue, sinon, je fait une redirection sur google apres lui avoir signalé le soucis.
 */

// function legalAge()
// {
//     // var age = prompt("Quel age as-tu ?")
//     if(prompt("Quel age as-tu ?")>=18)
//     {
//         alert("Bienvenu");
//     }
//     else
//     {
//         alert("t'es mineur va jouer à pokemon");
//         document.location.href="http://lmgtfy.com/?q=pok%C3%A9mon"
//     }

// }

// legalAge();


//EXERCICE

/*
    J'arrive sur un espace sécurisé au moyen d'un email et d'un mot de passe.
    je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.
    en cas d'échec une alert m'informe de problème.
    si tous se passe bien, un message de bienvenue m'acceuil.
*/

// BASE DE DONNEES

var email, mdp;


email="wf3@hl-media.fr";
mdp="wf3";

    if(prompt("Email")!==email)
    {
        alert("email inconnu");
        iterationMail++;
        

    }
    else
    {
        if(prompt("mdp")!==mdp)
        {

            alert("mot de passe incorrect") 
            iteractionMdp++;
             
        }
        else
        {
            alert("bienvenue");
        }
        
    }   
