import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EquiposMonks } from "../../app/config/equiposMonks";
import {JugadoresPage} from "../jugadores/jugadores";

@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {

  public equipos = EquiposMonks;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.equipos = this.ordenarJson(this.equipos);
    console.log('ionViewDidLoad EquipoPage');
  }

  ordenarJson(items): any {
    items.sort( function(a, b) {
      return a.name > b.name;
    });
    return items;
  }

  getItems(ev) {

    // set val to the value of the ev target
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.equipos = this.equipos.filter((equipo) => {
        return (equipo.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  jugadores(equipo, id) {
    console.log('Equipo:', equipo, id);
    this.navCtrl.push(JugadoresPage, {
      equipo_name: equipo,
      equipo_id: id
    });
  }

}
