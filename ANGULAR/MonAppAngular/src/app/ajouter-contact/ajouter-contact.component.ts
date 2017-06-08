import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from '../shared/models/contact';

@Component({
  selector: 'app-ajouter-contact',
  templateUrl: './ajouter-contact.component.html',
  styleUrls: ['./ajouter-contact.component.css']
})
export class AjouterContactComponent {

   nouveauContact:Contact = new Contact();
   active:boolean = true;

   @Output() createContact = new EventEmitter();

  submitContact(){

    
    this.createContact.emit({contact: this.nouveauContact});
    
    this.nouveauContact = new Contact();

    this.active = false;
    setTimeout(()=> this.active = true);

     
    


  }
  

}
