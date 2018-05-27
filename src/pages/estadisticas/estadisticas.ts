import { Component } from '@angular/core';
import { NavController,
          NavParams, ViewController }
                          from 'ionic-angular';

// @IonicPage()
@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class EstadisticasPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadisticasPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
