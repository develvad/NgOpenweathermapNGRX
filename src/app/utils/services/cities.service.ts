import { AppState } from './../../store/index';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GetAllCitiesAction } from '../../store/actions/cities.actions';
import { WcityModel } from '../models/Wcity.model';
import { CitiesApiModel } from '../models/core.model';
@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private _http: HttpClient, private _store: Store<AppState>) { }
  /**
   * Initializate the cities at Init the app
   */
  getCitiesFromService() {
    // console.log('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=' + environment.weathermap.APPID);
    // tslint:disable-next-line:max-line-length
    this._http.get('http://api.openweathermap.org/data/2.5/group?id=3871336,3435910,3936456,3448439&APPID=' + environment.weathermap.APPID).subscribe((cities: CitiesApiModel) => {
     this._store.dispatch(new GetAllCitiesAction(cities.list));
    });
  }
}

/**
 * 3871336 = santiago
 * 3435910 = Buenos Aires
 * 3936456 = Lima
 * 3448439 = Sao Paulo
 */
