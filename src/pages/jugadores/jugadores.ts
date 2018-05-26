import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestServiceProvider } from "../../providers/rest-service/rest-service";

@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {
  public squadJson: any;
  public squadLoaded: Promise<boolean>;
  public jugadorLoaded: Promise<boolean>;
  public datosJugador: any;
  public eq_id: number;
  public eq_name: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restService: RestServiceProvider) {
    this.eq_id = this.navParams.get('equipo_id');
    this.eq_name = this.navParams.get('equipo_name');

  }

  ionViewDidLoad() {
    this.getSquad(this.eq_id);
    console.log('ionViewDidLoad JugadoresPage');
  }

  getSquad(id_eq: number) {
    this.restService.getSquad(id_eq)
      .subscribe(equipo => {
        // console.log('JSON dentro de subscribe - jugador.ts',
        //   JSON.stringify(equipo['data']));
        this.squadJson = equipo['data'];
        this.squadLoaded = Promise.resolve(true);
      });
  }

  getJugador(id_jug: number) {
    this.restService.getJugador(id_jug)
      .subscribe( juRest => {
        // console.log('JSON dentro de subscribe - jugador.ts',
        //   JSON.stringify(juRest['data']));
        this.datosJugador = juRest['data'];
        this.jugadorLoaded = Promise.resolve(true);
      });
  }

}
