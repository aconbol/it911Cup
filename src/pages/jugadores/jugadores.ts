import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Countries } from "../../app/config/countries";

import { RestServiceProvider } from "../../providers/rest-service/rest-service";
import { Equipo } from "../../app/model/equipoModel";
import { EstadisticasPage } from "../estadisticas/estadisticas";

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
  public datosJugadoresEq: any[];
  private paises = Countries;
  private eq_jug_name: string;
  private eq_img_path: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restService: RestServiceProvider) {
    this.eq_id = this.navParams.get('equipo_id');
    this.eq_name = this.navParams.get('equipo_name');
    this.getSquad(this.eq_id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

  getSquad(id_eq: number) {
    this.restService.getSquad(id_eq)
      .subscribe(plantel => {
        this.squadJson = plantel['data'];
        this.getJugadoresEq(plantel['data']);
        this.datosJugadoresEq = plantel['data'];
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

  getJugadoresEq(squad) {
    squad.forEach( player => {
      let datosPlayer: any[];
      this.restService.getJugador(player['player_id'])
        .subscribe( juRest => {
          datosPlayer = juRest['data'];
          // player['datoActual'] = datosPlayer;
          //   player.datoActual = datosPlayer;
          Object.assign(player, datosPlayer);
          this.getTeam(datosPlayer['player_id'], player);
        },
        error => {
          console.log('error al encontrar jugadores por equipo');
        });
    });
  }

  getTeam(id_team: number, player) {
    this.restService.getEquipo(id_team)
      .subscribe( teamRest => {
        // console.log('JSON dentro de subscribe - jugador.ts',
        //   JSON.stringify(juRest['data']));
        let dato: Equipo = teamRest['data'];
        this.eq_jug_name = dato.name;
        this.eq_img_path = dato.logo_path;
        player.equipo_origen = this.eq_jug_name;
        player.equipo_logo_path = this.eq_img_path;
        this.paises.forEach( pais => {
          if (pais.id === dato.country_id)
                player.equipo_pais_name = pais.name;
        });
        this.jugadorLoaded = Promise.resolve(true);
      },
      error => {
        this.eq_jug_name = null;
        this.eq_img_path = null;
        console.log('error al encontrar equipo');
      });
  }

  openEstadisticas(jugador) {
    this.navCtrl.push(EstadisticasPage, {
      datos_jugador: jugador,
      eq_name: this.eq_name
    })
  }

}
