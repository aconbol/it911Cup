import { Component } from '@angular/core';

import { RestServiceProvider } from "../../providers/rest-service/rest-service";

@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html',
})
export class GruposPage {

  public groupLoaded: Promise<boolean>;
  public puestosTodosGrupos: any;

  constructor(public restService: RestServiceProvider) {
    this.getStandingGrupos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruposPage');
  }

  getStandingGrupos() {
    this.restService.getStandingGrupos()
      .subscribe(puestosAllGroup => {
        this.puestosTodosGrupos = puestosAllGroup['data'];
        // console.log('JSON getAllGroups en subscribe - grupos.ts',
        //   this.puestosTodosGrupos);
        this.groupLoaded = Promise.resolve(true);
      });
  }

}
