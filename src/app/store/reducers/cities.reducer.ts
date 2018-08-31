import { WcityModel } from '../../utils/models/Wcity.model';
import * as fromCities from '../actions/cities.actions';
export const citiesInitState: WcityModel[] = [];

export function citiesReducer(state: WcityModel[] , action: fromCities.CitiesActions): WcityModel[] {

    switch (action.type) {
        case fromCities.GET_ALL_CITIES:
            return [...action.payload];
        default:
            return state;
    }
}
