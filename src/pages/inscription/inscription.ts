import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import {ConnexionPage} from "../connexion/connexion"
import {HomePage} from "../home/home"

@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})
export class InscriptionPage {

  Username: String;
  Mdp: String;
  MdpC: String;
  Nom: String;
  Prenom: String;
  Adresse: String;
  CodePostal: String;
  Email: String;
  NumPhone: String;
  NumPortable: String;



  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }



  showDetails() {
    let toast = this.toastCtrl.create({
      message: 'Vous êtes bien inscrit.',
      duration: 3000
    });
    toast.present();
    this.navCtrl.push(HomePage);
  }

  // showPageConnexion(){
  //   console.log("A");
  //   this.navCtrl.push(ConnexionPage);

  // }

  
  }

