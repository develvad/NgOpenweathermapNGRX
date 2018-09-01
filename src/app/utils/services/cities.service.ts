import { WhistoricalModel } from './../models/Whistorical.model';
import { WeatherModel, MainCityModel } from './../models/Wcity.model';
import { AppState } from './../../store/index';
import { environment } from './../../../environments/environment';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { GetAllCitiesAction } from '../../store/actions/cities.actions';
import { WcityModel } from '../models/Wcity.model';
import { CitiesApiModel } from '../models/core.model';
import { AddHistoricalElementAction } from '../../store/actions/historical.actions';
import { Subscription, timer, pipe, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CitiesService implements OnDestroy {
  private subscription: Subscription;
  constructor(private _http: HttpClient, private _store: Store<AppState>) { }

  /**
   * Initializate the cities at Init the app
   */
  initApp() {
    console.warn('tirori');
      this.subscription = timer(0, 10000).pipe(
         // tslint:disable-next-line:max-line-length
         map( () => this._http.get('http://api.openweathermap.org/data/2.5/group?id=3871336,3435910,3936456,3448439&units=metric&lang=es&APPID=' + environment.weathermap.APPID))
      ).subscribe((citiesObserver: Observable<any>) => {
        citiesObserver.subscribe((cities: CitiesApiModel) => {
          this._store.dispatch(new GetAllCitiesAction(cities.list));
          // send Array for complete historical of all city;
          cities.list.forEach((city: WcityModel) => {
           this.addtoHistorical(city.main, city.id);
        });
      });
    });
  }
    /**
   * Initializate the cities at Init the app
   */
  addtoHistorical(weatherElement: MainCityModel, id: Number) {

       const weatherHistoricalElement: WhistoricalModel = { id: id, history: weatherElement};
       this._store.dispatch(new AddHistoricalElementAction(weatherHistoricalElement));

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

/**
 * 3871336 = santiago
 * 3435910 = Buenos Aires
 * 3936456 = Lima
 * 3448439 = Sao Paulo
 */
