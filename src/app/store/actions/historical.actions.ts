import { Action } from '@ngrx/store';

export const ADD_HISTORICAL_ELEMENT = '[WXA] ADD_HISTORICAL_ELEMENT';


export class AddHistoricalElementAction implements Action {
    readonly type = ADD_HISTORICAL_ELEMENT;
    constructor(public payload) {}
}

export type HistoricalActions = AddHistoricalElementAction;
