import { WhistoricalModel } from './../models/Whistorical.model';
import {  MainCityModel } from './../models/Wcity.model';
import { AppState } from './../../store/index';
import { environment } from './../../../environments/environment';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AddHistoricalElementAction } from '../../store/actions/historical.actions';

@Injectable({
  providedIn: 'root'
})
export class CitiesService  {
  // tslint:disable-next-line:max-line-length
  private apiCallForInit = 'http://api.openweathermap.org/data/2.5/group?id=3871336,3435910,3936456,3448439&units=metric&lang=es&APPID='  + environment.weathermap.APPID;
  constructor(private _http: HttpClient, private _store: Store<AppState>) { }

  /**
   * Initializate the cities at Init the app ** WITH @NGRX/EFFECTS  **
   */
  initApp() {
      return  this._http.get(this.apiCallForInit);
  }
    /**
   * Initializate the cities at Init the app
   */
  addtoHistorical(weatherElement: MainCityModel, id: Number) {
       const weatherHistoricalElement: WhistoricalModel = { id: id, history: weatherElement};
       this._store.dispatch(new AddHistoricalElementAction(weatherHistoricalElement));

  }
}

