import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoogleMaps } from "@ionic-native/google-maps";

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PartidosPage } from "../pages/partidos/partidos";
import { EstadiosPage } from "../pages/estadios/estadios";
import { EstadioGeoposPage } from "../pages/estadio-geopos/estadio-geopos";
import { ListaPartidosPage } from "../pages/lista-partidos/lista-partidos";
import { GruposPage } from "../pages/grupos/grupos";
import { EquipoPage } from "../pages/equipo/equipo";
import { JugadoresPage } from "../pages/jugadores/jugadores";

import { RestServiceProvider } from '../providers/rest-service/rest-service';
import { HttpClientModule } from "@angular/common/http";
import { EstadisticasPage } from "../pages/estadisticas/estadisticas";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PartidosPage,
    EstadiosPage,
    EstadioGeoposPage,
    ListaPartidosPage,
    GruposPage,
    EquipoPage,
    JugadoresPage,
    EstadisticasPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PartidosPage,
    EstadiosPage,
    EstadioGeoposPage,
    ListaPartidosPage,
    GruposPage,
    EquipoPage,
    JugadoresPage,
    EstadisticasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestServiceProvider
  ]
})
export class AppModule {}
