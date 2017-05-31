$(function(){

    // déclaration de variable
    var contacts = [];

    // DECLARATION DES FONCTION
    // ajouter un contact dans le tableau de contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification
    function addContact(contact){
        contacts.push(contact);
        
    }

    function resetForm(){
        $("#contact")[0].reset();

    }

    function afficheUneNotification(){

    }

    function isContact(contact){
        if(contact.length == 0){
            return false;
        }
        else{
            return true;
        }
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

    if(prenom.val() == ""){
        prenom.parent().addClass('has-error');

        $("<p class='text-danger'>N'oubliez pas votre prénom !</p>").appendTo(prenom.parent());
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
        $(this).prepend("<div class='alert alert-success'>Votre Demande a bien été envoyée ! Nous vous répondrons dans les meilleurs délais.</div>");
        var objContact = {
            "nom"    : nom.val(),
            "prenom" : prenom.val(),
            "email"  : email.val(),
            "tel"    : tel.val()
        }
        resetForm();
        addContact(objContact);
    }
    else{
        $(this).prepend("<div class='alert alert-danger'>Nous n'avons pas été en mesure de valider votre demande.</div>");
    }



});






























});