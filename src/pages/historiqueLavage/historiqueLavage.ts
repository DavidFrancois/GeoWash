import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-historiqueLavage',
  templateUrl: 'historiqueLavage.html'
})
export class HistoriqueLavage {

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

