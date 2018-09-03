import { WcityModel } from '../../utils/models/Wcity.model';
import * as fromCities from '../actions/cities.actions';
export interface CitiesState { loading: boolean; error: boolean; payload: WcityModel[]; }
export const citiesInitState: CitiesState = {loading: false, error: false, payload: []};

export function citiesReducer(state: CitiesState = citiesInitState  , action: fromCities.CitiesActions): CitiesState {

    switch (action.type) {
        case fromCities.GET_ALL_CITIES:
            return {
                loading: true,
                error: false,
                payload: [...state.payload]
            };
        case fromCities.GET_ALL_CITIES_SUCCESS:
            return {
                loading: false,
                error: false,
                payload: [...action.payload]
            };
        case fromCities.GET_ALL_CITIES_ERROR:
            return {
                loading: false,
                error: true,
                payload: [...state.payload]
            };
        default:
            return state;
    }
}
