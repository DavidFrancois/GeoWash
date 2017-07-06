import { Component } from '@angular/core';
import { NavController, AlertController, App, MenuController  } from 'ionic-angular';
import {InscriptionPage} from "../inscription/inscription"
import {ConnexionPage} from "../connexion/connexion"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pseudo: String;
  mdp: String;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  
  showDetails(){
    console.log(this.pseudo);
    console.log(this.mdp);

  }
  private showFormInscription() {
    this.navCtrl.push(InscriptionPage);
  }

   private showFormConnexion(event) {
    if (this.pseudo && this.mdp) {
      this.navCtrl.setRoot(ConnexionPage,{
        pseudo: this.pseudo, 
        mdp: this.mdp
      }, {animate: true, direction: "forward"});
    } else {
      let alert = this.alertCtrl.create({
        title: "Informations éronnées",
        subTitle: "Données manquantes",
        buttons: ['OK']
      });
      alert.present();
    }
   
  }

showAlert() {
    let alert = this.alertCtrl.create({
      title: "Informations éronnées",
      subTitle: "Votre pseudo ou mot de passe est incorrect",
      buttons: ['OK']
    });
    alert.present();
  }
   
}

export class PlaceholderPage { 
  
}

