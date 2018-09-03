import { Store } from '@ngrx/store';
import { CitiesApiModel } from './../../utils/models/core.model';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as citiesActions from '../actions/cities.actions';
import { map, switchMap, catchError  } from 'rxjs/operators';
import { CitiesService } from '../../utils/services/cities.service';
import { AppState } from '..';
import { WcityModel } from '../../utils/models/Wcity.model';
import { of } from 'rxjs';


@Injectable()
export class CitiesEffects {

    constructor(private citiesActs$: Actions, private _cities: CitiesService, private _store: Store<AppState>) {}

    @Effect({dispatch: false})
    private loadCities$ = this.citiesActs$.ofType(citiesActions.GET_ALL_CITIES)
    .pipe(
        switchMap( () => {
            return this._cities.initApp().pipe(
                map((citiesAPI: CitiesApiModel) => {
                    this._store.dispatch(new citiesActions.GetAllCitiesActionSuccess(citiesAPI.list));
                    citiesAPI.list.forEach((city: WcityModel) => {
                        this._cities.addtoHistorical(city.main, city.id);
                   });
                }),
                catchError((err) => of(this._store.dispatch(new citiesActions.GetAllCitiesActionError())))
            );
        })
    );
}
