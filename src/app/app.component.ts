import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { TestPage } from '../pages/pagetest/pagetest'
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ConnexionPage } from '../pages/connexion/connexion';
import { ModifProfil } from '../pages/modifProfil/modifProfil';
import { GeestionVoiture } from '../pages/gestionVoiture/gestionVoiture';
import { HistoriqueLavage } from '../pages/historiqueLavage/historiqueLavage';
import { PrendreRDV } from '../pages/prendreRDV/prendreRDV';
import { MapPage } from '../pages/map/map';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public geolocation: Geolocation,
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Gérer mon Profil', component: ModifProfil},
      { title: 'Gérer mes voitures', component: GeestionVoiture },
      { title: 'Historique des lavages', component: HistoriqueLavage},
      { title: 'Prendre rendez-vous', component: PrendreRDV },
      { title: 'Se déconnecter', component: HomePage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.geolocation.getCurrentPosition();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
