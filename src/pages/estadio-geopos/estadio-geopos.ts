import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  GoogleMap,
  GoogleMaps,
  GoogleMapsEvent,
  GoogleMapOptions,
  LatLng,
  MarkerOptions
} from "@ionic-native/google-maps";
import { Venues } from "../../app/config/venues";

@Component({
  selector: 'page-estadio-geopos',
  templateUrl: 'estadio-geopos.html',
})
export class EstadioGeoposPage {
  public estadiums = Venues;
  public map: GoogleMap;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(this.loadMap.bind(this), 1000);
    // this.loadMap();
    console.log('ionViewDidLoad EstadioGeoposPage');
  }

  loadMap() {
    console.log('Ingresando en loadMap');
    // create a new map by passing HTMLElement
    // let element: HTMLElement = document.getElementById('map_canvas');
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 55.715765,
          lng: 37.5515217
        },
        zoom: 5,
        tilt: 30
      }
    };

    // Creacopn de Mapa
    this.map = GoogleMaps.create('map_canvas', mapOptions);
    console.log('Respuesta de Event', GoogleMapsEvent.MAP_READY);
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then( () => {
        this.cargarMarks();
        console.log('Google Map esta listo', mapOptions);
      })
      .catch( error => {
        console.log('Google Map no se cargo', error);
      });
  }

  cargarMarks() {
    this.estadiums.forEach(estadium => {
      let position = new LatLng(estadium.lat, estadium.lng);
      let options: MarkerOptions = {
        icon: '#32db64',
        title: estadium.name,
        position: position
      };
      // let icon = rutaBase + this.estadiums[0].icon;
      this.map.addMarker(options)
        .catch(error => {
          console.log('Error en markers', error)
        });
    });
  }
}
