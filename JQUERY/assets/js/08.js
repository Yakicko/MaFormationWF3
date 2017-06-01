$(function(){

    // déclaration de variable
    var contacts = [];

    // DECLARATION DES FONCTION
    // ajouter un contact dans le tableau de contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification
    function addContact(contact){
        

        contacts.push(contact);
        
            $("<tr><td>"+ contact.nom +"</td><td>"+ contact.prenom +"</td><td>"+ contact.email +"</td><td>"+ contact.tel +"</td></tr>").appendTo($('tbody'));
            $('.aucuncontact').hide();
       
        
        
    }

    function resetForm(){
        $("#contact")[0].reset();

    }

    function afficheUneNotification(){

    }

    function isContact(Contact){
        // -- Vérification de la présence d'un contact dans contacts
        var estPresent = false;

        // --on parcourt le tableau a la recherche d'une correspondance
        for(var i = 0;i<contacts.length;i++){
            // -- vérification pour chaque contact du tableau, s'il y a une correspondance avec mon objet Contact
            if(Contact.email === contacts[i].email){
                
                estPresent = true;

                break;
            }
        }

        return estPresent;

    }

    function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);

        if(!valid) {
            return false;
        } else {
            return true;
        }
    }

    /*
        --------------------------
         TRAITEMENT DU FORMULAIRE
        --------------------------
     */

$('#contact').on('submit', function(event){
    // -- bloquer le comportement de base (envoi du formulaire)
    event.preventDefault();

    $('#contact .has-error').removeClass('has-error');
    $('#contact .text-danger').remove();
    $('#contact .alert-danger').remove();
    $('#contact .alert-success').remove();

    
    var nom = $('#nom');
    var prenom = $('#prenom');
    var email = $('#email');
    var tel = $('#tel');

    if(nom.val() == ""){
        nom.parent().addClass('has-error');

        $("<p class='text-danger'>N'oubliez pas votre nom !</p>").appendTo(nom.parent());
    }
    else if(nom.val().length<=3){
        nom.parent().addClass('has-error');

        $("<p class='text-danger'>4 charactère minimum !</p>").appendTo(nom.parent());
    }

    if(prenom.val() == ""){
        prenom.parent().addClass('has-error');

        $("<p class='text-danger'>N'oubliez pas votre prénom !</p>").appendTo(prenom.parent());
    }
    else if(prenom.val().length<=3){
        prenom.parent().addClass('has-error');

        $("<p class='text-danger'>4 charactère minimum !</p>").appendTo(prenom.parent());
    }

    if(!validateEmail(email.val())){
         email.parent().addClass('has-error');

        $("<p class='text-danger'>Vérifiez votre adresse mail !</p>").appendTo(email.parent());
    }

    if(tel.val() == "" || $.isNumeric(tel.val()) == false){
        tel.parent().addClass('has-error');

        $("<p class='text-danger'>Vérifiez votre numéro !</p>").appendTo(tel.parent());
    }
    if($(this).find('.has-error').length == 0){
        
        var objContact = {
            "nom"    : nom.val(),
            "prenom" : prenom.val(),
            "email"  : email.val(),
            "tel"    : tel.val()
        }
        
        if(!isContact(objContact)){
            $(this).prepend("<div class='alert alert-success'>Contact enregistré avec succès.</div>");
            addContact(objContact);
            resetForm();
        }
        else{
            email.parent().addClass('has-error');
             $(this).prepend("<div class='alert alert-danger'>Erreur ! vérifiez les champs concernés.</div>");
            $("<p class='text-danger'>email déjà utilisé !</p>").appendTo(email.parent());
        }

       
        console.log(contacts);
    }
    else{
        $(this).prepend("<div class='alert alert-danger'>Erreur ! vérifiez les champs concernés.</div>");
    }



});






























});