import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Fixtures } from "../../app/config/fixtures";
import { EquiposMonks } from "../../app/config/equiposMonks";
import { Venues } from "../../app/config/venues";


@Component({
  selector: 'page-partidos',
  templateUrl: 'partidos.html',
})
export class PartidosPage {

  public diaSemana = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  public fixtures = Fixtures;
  private equipos = EquiposMonks;
  private stadiums = Venues;
  public dias: Date[]  = this.getDatesBetween();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidosPage');
  }

  navigateTo1(){
    this.navCtrl.push('SegmentPage', {param1: '1'});
  }

  navigateTo2(){
    this.navCtrl.push('SegmentPage', {param1: '2'});
  }

  getDatesBetween(): Date[] {
    let from = new Date('2018/06/14');
    let to = new Date('2018/07/15');
    let year = from.getFullYear();
    let month = from.getMonth();
    let day = from.getDate();
    let dates = [from];
    while(dates[dates.length-1] < to) {
      let dia = new Date(year, month, ++day);
      dates.push(dia);
    }
    return dates;
  }

  getSrcBanderaEquipo(id: number): string {
    let srcB = null;
    this.equipos.forEach( equipo => {
      if (equipo.id === id) srcB = equipo.logo_path;
    });
    return srcB;
  }

  getNombreEquipo(id: number): string {
    let nomEq = null;
    this.equipos.forEach( equipo => {
      if (equipo.id === id) nomEq = equipo.name;
    });
    return nomEq;
  }

  cargarCiudad(id: number): string {
    let ciudad = null;
    this.stadiums.forEach( campo => {
      if (campo.id === id) {
        ciudad = campo.city;
      }
    });
    return ciudad;
  }

  getDia(fixture: any): string {
    let fechaDia: string;
    let diaArray = fixture.time.starting_at.date.split('-');
    let dia = new Date(diaArray[0], diaArray[1], diaArray[2]);
    fechaDia = 'fe' + dia.getMonth() + dia.getDate();
    return fechaDia;
  }

  getDiaD(dia: Date): string {
    let fechaDia: string;
    let fechaDiaDate = new Date(dia.getFullYear() ,dia.getMonth(), dia.getDate());
    fechaDia = 'fe' + (fechaDiaDate.getMonth() + 1) + fechaDiaDate.getDate();
    return fechaDia;
  }

  getHoraLocal(hora: string): string {
    let diaTmp =  new Date();
    let horaArray = hora.split(':');
    diaTmp.setHours(parseInt(horaArray[0]), parseInt(horaArray[1]), parseInt(horaArray[2]), 0);
    const options = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    diaTmp.toLocaleTimeString('es-BO', options);
    let horaLocal = ("0" + (diaTmp.getHours() - 7)).slice(-2) + ':' + ("0" + diaTmp.getMinutes()).slice(-2);
    return horaLocal;
  }

}
