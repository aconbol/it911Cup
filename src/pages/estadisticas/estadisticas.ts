import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class EstadisticasPage {

  public jugador: any;
  public seleccion: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.jugador = this.navParams.get('datos_jugador')
    this.seleccion = this.navParams.get('eq_name');
  }

  ionViewDidLoad() {
    console.log('Ver informacion recibida por parametro', this.jugador);
    console.log('ionViewDidLoad EstadisticasPage');
  }



}
