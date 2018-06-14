import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EquiposMonks } from "../../app/config/equiposMonks";

import { RestServiceProvider } from "../../providers/rest-service/rest-service";

@Component({
  selector: 'page-partidos',
  templateUrl: 'partidos.html',
})
export class PartidosPage {

  public diaSemana = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  public fixtures: any;
  public fixturesLoaded: Promise<boolean>;
  private equipos = EquiposMonks;
  public dias: Date[]  = this.getDatesBetween();
  private obsFix;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restService: RestServiceProvider) {
  }

  ionViewDidLoad() {
    this.obsFix = this.getFixturesFromTo();
    console.log('ionViewDidLoad PartidosPage');
  }

  ionViewWillLeave() {
    this.obsFix.unsubscribe();
  }

  getFixturesFromTo() {
    return this.restService.getFixturesFromTo('2018-06-14', '2018-07-15')
      .subscribe(programacion => {
        this.fixtures = programacion['data'];
        // console.log('JSON FIXTURES en subscribe - fixtures.ts',
        //   this.fixtures);
        this.fixturesLoaded = Promise.resolve(true);
      });
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
