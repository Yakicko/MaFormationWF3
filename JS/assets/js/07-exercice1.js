/*
    Réaliser une fonction permmettant à un internaute de :
    - saisir son prénom dans un prompt
    - Retourner à l'Utilisateur: Bonjour [PRENOM], Qauel age as-tu ?
    - saisir son Age
    - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
    -Afficher ensuite un récapitulatif dans la page.
    Bonjour [PRENOM], tu as [AGE] !
 */


//  var prenom = prompt("Saisissez votre texte :", "Texte par défaut")

function identite()
{
    var prenom = prompt("entrer votre prenom" );

    if(prenom != null)
    {

        var age = prompt("Bonjour " + prenom + " Quel age as-tu ?");

        if(age != null)
        {
            var date=new Date();

            var dateDeNaissance=date.getFullYear() - age;

            alert("tu est donc née en "+ dateDeNaissance +".");
            document.write("<p>Bonjour <strong>"+ prenom +"</strong>, tu as <strong>" +age+ "</strong> ans.</p>")
        }
        
    }
    
}

identite();

