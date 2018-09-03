import { Action } from '@ngrx/store';

/**
 * Actions for Initial content Effect.
 */

export const GET_ALL_CITIES = '[WXA] Get Citites';
export const GET_ALL_CITIES_ERROR  = '[WXA] Get Cities All ERROR';
export const GET_ALL_CITIES_SUCCESS = '[WXA] Get Cities All SUCCESS';


export class  GetAllCitiesAction implements Action {
    readonly type = GET_ALL_CITIES;
}

export class  GetAllCitiesActionSuccess implements Action {
    readonly type = GET_ALL_CITIES_SUCCESS;
    constructor(public payload) {}
}
export class  GetAllCitiesActionError implements Action {
    readonly type = GET_ALL_CITIES_ERROR;
}

export type CitiesActions = GetAllCitiesAction | GetAllCitiesActionSuccess | GetAllCitiesActionError;
