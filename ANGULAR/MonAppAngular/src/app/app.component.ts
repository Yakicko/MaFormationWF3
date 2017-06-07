// -- 1. Importation de la librairie Angular Core
import { Component } from '@angular/core';
import {Contact } from './shared/models/contact';


// -- Déclaration d'une classe Contact


// -- 2. Déclaration du composant
@Component({
  // -- 2.a Le Sélecteur pour le rendu dans l'application
  selector: 'app-root',

  // -- 2.b Le contenu HTML pour notre composant
  templateUrl : './app.component.html',

  // -- 2.c Les Styles CSS
  styleUrls:['./app.component.css'],
  
})

// -- Notre code JS
export class AppComponent {
  // -- Déclaration d'une variable title
  title:string = 'contacts';

  // -- Déclaration d'un Objet Contact
  Contact = {
    id : 1,
    fullname : 'Christopher Longfort',
    username : 'HamLord'
  }

  // -- Je travail avec des Contacts
  Contacts:Contact[] = [
    {id : 1,fullname : 'Christopher Longfort',username : 'HamLord'},
    {id : 2,fullname : 'Hugo Liegeard',username : 'Jabs'},
    {id : 3,fullname : 'Yimin Ji',username : 'JiYi'}
  ]
// -- Choix de mon utilisateur actif
  contactActif:Contact;

  choisirUnContact(contact){
    this.contactActif = contact;
    console.log(contact);
    }
    reset(){
      this.contactActif=null;
    }
}
