import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';

import { ListPage } from '../pages/list/list';
import { TestPage } from '../pages/pagetest/pagetest';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InscriptionPage } from '../pages/inscription/inscription';
import { InscriptionPage2 } from '../pages/inscription2/inscription2';
import { InscriptionPage3 } from '../pages/inscription3/inscription3';
import { ConnexionPage } from '../pages/connexion/connexion';
import { ModifProfil } from '../pages/modifProfil/modifProfil';
import { GeestionVoiture } from '../pages/gestionVoiture/gestionVoiture';
import { HistoriqueLavage } from '../pages/historiqueLavage/historiqueLavage';
import { PrendreRDV } from '../pages/prendreRDV/prendreRDV';
import { MapPage } from '../pages/map/map';



import { requestOptionsProvider }   from '../services/default-request-options.service';
import { HttpService }   from '../services/http-request.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TestPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InscriptionPage,
    InscriptionPage2,
    InscriptionPage3,
    ConnexionPage,
    ModifProfil,
    GeestionVoiture,
    HistoriqueLavage,
    PrendreRDV,
    MapPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    InscriptionPage,
    InscriptionPage2,
    InscriptionPage3,
    ConnexionPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TestPage,
    ModifProfil,
    GeestionVoiture,
    HistoriqueLavage,
    PrendreRDV,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    HttpService,
    requestOptionsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
