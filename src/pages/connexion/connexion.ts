import { Component } from '@angular/core';


import { NavController, NavParams, MenuController, App } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { ListPage } from '../list/list';
import { TestPage } from '../pagetest/pagetest'



@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'


})

/*export class ConnexionPage {
  pseudo: String;
  mdp: String;

  constructor(public navCtrl: NavController, private navParams: NavParams, public menu: MenuController,) {
    this.pseudo= navParams.get('pseudo');
    this.mdp= navParams.get('mdp');

    console.log(this.pseudo);
    console.log(this.mdp);
  }
  
}*/

 export class ConnexionPage {
pseudo: String;
  mdp: String;

  constructor(app: App, menu: MenuController,public navCtrl: NavController, private navParams: NavParams) {
     this.pseudo= navParams.get('pseudo');
    this.mdp= navParams.get('mdp');
    menu.enable(true);
  }
}

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Menus
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageOne { }

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Friends
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageTwo { }

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Events
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageThree { }




