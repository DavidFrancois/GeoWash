import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-modifProfil',
  templateUrl: 'modifProfil.html'
})
export class ModifProfil {

  Username: String;
  Nom: String;
  Prenom: String;
  Adresse: String;
  CodePostal: String;
  Email: String;
  NumPhone: String;
  NumPortable: String;



  constructor(public navCtrl: NavController) {

  }

  showDetails(){
    console.log(this.Username);
    console.log(this.Nom);
    console.log(this.CodePostal);


  }
  
  }

