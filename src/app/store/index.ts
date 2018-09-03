import { WhistoricalModel } from './../utils/models/Whistorical.model';
// APP Dependencies
import { citiesReducer, CitiesState } from './reducers/cities.reducer';
import { WcityModel } from './../utils/models/Wcity.model';
// Utils
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';

import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { HistoricalReducer } from './reducers/historical.reducer';

export interface AppState {
    cities: CitiesState;
    historical: WhistoricalModel[];
}

export const reducers: ActionReducerMap<AppState> = {
    cities: citiesReducer,
    historical: HistoricalReducer
};

// Utils for NGRX

export function logger(reducer: ActionReducer<AppState>): any {
    return storeLogger({collapsed: true})(reducer);
  }

export const metaReducers: MetaReducer<AppState>[] = environment.production ? [] : [logger, storeFreeze];

// http://api.openweathermap.org/data/2.5/weather?q=madrid,es&APPID=466efae121c85b3954c5b6a551ec7233
