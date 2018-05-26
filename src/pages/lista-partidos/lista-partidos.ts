import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Fechas } from "../../app/config/fechas";
import { Fixtures } from "../../app/config/fixtures";
import { EquiposMonks } from "../../app/config/equiposMonks";

@Component({
  selector: 'page-lista-partidos',
  templateUrl: 'lista-partidos.html',
})
export class ListaPartidosPage {

  public junio = Fechas.Junio;
  public julio = Fechas.Julio;
  public mes = this.junio;
  public fixture = Fixtures;
  public equipos = EquiposMonks;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPartidosPage');
  }

  getDatesBetween() {
    // getDatesBetween(from: Date, to: Date) : Date[] {
    let from = new Date(2018, 6, 14);
    console.log('from', from);
    let to = new Date(2018, 7, 15);
    let year = from.getFullYear();
    let month = from.getMonth();
    let day = from.getDate();
    let dates = [from];
    while(dates[dates.length-1] < to) {
      let dia = new Date(year, month, ++day);
      console.log('Dia generado', dia);
      dates.push(dia);
    }
    // return dates;
  }
}
