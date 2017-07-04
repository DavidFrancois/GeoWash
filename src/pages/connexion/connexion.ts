import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {
  pseudo: String;
  mdp: String;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.pseudo= navParams.get('pseudo');
    this.mdp= navParams.get('mdp');

    console.log(this.pseudo);
    console.log(this.mdp);
  }
  
  }

