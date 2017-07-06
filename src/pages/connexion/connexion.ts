import { Component } from '@angular/core';

import { NavController, NavParams, MenuController } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { ListPage } from '../list/list';
import { TestPage } from '../pagetest/pagetest'


@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {
  pseudo: String;
  mdp: String;

  constructor(public navCtrl: NavController, private navParams: NavParams, public menu: MenuController,) {
    this.pseudo= navParams.get('pseudo');
    this.mdp= navParams.get('mdp');

    console.log(this.pseudo);
    console.log(this.mdp);
  }
  
  }

