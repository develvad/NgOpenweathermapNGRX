import * as fromHistorical from './../actions/historical.actions';
import { WhistoricalModel } from './../../utils/models/Whistorical.model';


export const historiaInitlState: WhistoricalModel[] = [];

export function HistoricalReducer(  state: WhistoricalModel[] = historiaInitlState,
                                    action: fromHistorical.HistoricalActions): WhistoricalModel[] {
    switch (action.type) {
        case fromHistorical.ADD_HISTORICAL_ELEMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}
