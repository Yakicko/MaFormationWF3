// --Declaration de fonction
function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}
// -- initialisation jquery
$(function(){

    // --ecouiter a quel moment est soumis le formulaire
    // -- a la soumission de mon formulaire je vais executer une fonction anonyme
    // --EN JS : document.getElementById('contact').addEventListener('submit', MaFonctionAExecuter);

    $('#contact').on('submit', function(event){
        //--event correspond ici à notre évènement "submit"

        // --aretter la redirection html5
        event.preventDefault();

        // -- je cible tout les elements qui contiennent "has-error", puis je supprime ".has-error" pour ces éléments (reset)
        $('#contact .has-error').removeClass('has-error');
        // -- pareil ici
        $('#contact .text-danger').remove();
        $('#contact .alert-danger').remove();

        // -- Déclaration des Variables (champs à vérifier)
        var nom     = $('#nom');
        var prenom  = $('#prenom');
        var email   = $('#email');
        var tel     = $('#tel');

        
        //-- je passe à la verification de chaque champs...

        //-- 1.verification du nom
        // --if(nom.val().length == 0)
        if(nom.val() == ""){
            nom.parent().addClass('has-error');
            // -- Je rajoute une indication texte
            $("<p class='text-danger'>N'oubliez pas de saisir votre nom</p>").appendTo(nom.parent());
        }

         //-- 2.verification du prenom
        if(prenom.val().length == 0){
            prenom.parent().addClass('has-error');
            // -- Je rajoute une indication texte
            $("<p class='text-danger'>N'oubliez pas de saisir votre prenom</p>").appendTo(prenom.parent());
        }

         //-- 3.verification du email
        if(!validateEmail(email.val())){
            email.parent().addClass('has-error');
            // -- Je rajoute une indication texte
            $("<p class='text-danger'>Vérifiez votre adresse email</p>").appendTo(email.parent());
        }

         //-- 4.verification du tel
        if(tel.val() == "" || $.isNumeric(tel.val()) == false){
            tel.parent().addClass('has-error');
            // -- Je rajoute une indication texte
            $("<p class='text-danger'>Vérifiez votre téléphone</p>").appendTo(tel.parent());
        }

        if($(this).find('.has-error').length == 0){
            $(this).replaceWith("<div class='alert alert-success'>Votre Demande a bien été envoyée ! Nous vous répondrons dans les meilleurs délais.</div>")
        }
        else{
            $(this).prepend("<div class='alert alert-danger'>Nous n'avons pas été en mesure de valider votre demande.</div>")
        }

    });


});