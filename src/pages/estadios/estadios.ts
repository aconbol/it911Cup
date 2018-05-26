import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Venues } from "../../app/config/venues";

import { EstadioGeoposPage } from "../estadio-geopos/estadio-geopos";

@Component({
  selector: 'page-estadios',
  templateUrl: 'estadios.html'
})
export class EstadiosPage {
  public estadiums = Venues;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadiosPage');
  }

  /**
   * Funcion para poner en PUSH las ubicaciones
   */
  pushUbicaciones() {
    this.navCtrl.push(EstadioGeoposPage);
  }
}
