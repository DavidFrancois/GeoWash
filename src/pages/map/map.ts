import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { NavController, ToastController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ConnexionPage } from "../connexion/connexion";
import { HomePage } from "../home/home";

import { Customer } from "../../entities/customer";
declare var google, image;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
@ViewChild('map') mapElement: ElementRef;
map:any;


  constructor( public geolocation: Geolocation) { 

  
}

 ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker (position.coords.latitude, position.coords.longitude, "your location");
      this.addMarker (48.845997, 2.269348, "Laveur 1");
      this.addMarker (48.840608, 2.268337, "Laveur 2");
      
     // this.addMarker (position.coords.latitude+10, position.coords.longitude+10, "Laveur 2");

    }, (err) => {
      console
    });
  }

  addMarker(lat, long, commentaire){
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position:new google.maps.LatLng(lat,long),//this.map.getCenter()
    });
 console.log(commentaire && " comm");
  let content = commentaire ;//"<h4>"&& commentaire &&"</h4>";          
 
  this.addInfoWindow(marker, content);
 
  }
  addInfoWindow(marker, content){
  
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
  
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}