import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {TEMPORADA, TOKEN, URL_PLAYERS, URL_SQUAD, URL_TEAMS} from "../../app/config/config";

@Injectable()
export class RestServiceProvider {

  constructor(public http: HttpClient) {
    console.log('RestServiceProvider Provider');
  }

  getSquad(team: number) {
    let url = URL_SQUAD + TEMPORADA + '/team/' + team + '?api_token=' + TOKEN;
    console.log('Ver SQUAD Url Rest', url);
    return this.http.get(url);
  }

  getJugador(id_jug: number) {
    let url = URL_PLAYERS + id_jug + '?api_token=' + TOKEN;
    console.log('Ver Jugador Url Rest', url);
    return this.http.get(url);
  }

  getEquipo(id_equipo: number) {
    let url = URL_TEAMS + id_equipo + '?api_token=' + TOKEN;
    console.log('Ver TEAM Url Rest', url);
    return this.http.get(url);
  }

}
