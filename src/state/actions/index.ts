import { ActionType } from '../action-types';
import { Dessert } from '../dessert'

export interface FetchDessert {
  type: ActionType.FETCH_DESSERTS;
}

export interface FetchDessertsCompleteAction {
  type: ActionType.FETCH_DESSERTS_COMPLETE;
  payload: Dessert[];
}

export interface FetchDessertsErrorAction {
  type: ActionType.FETCH_DESSERTS_ERROR;
  payload: string;
}

export interface AddDessert {
  type: ActionType.ADD_DESSERT
}

export interface AddDessertCompleteAction {
  type:ActionType.ADD_DESSERT_COMPLETE
  payload: Dessert
}
export interface AddDessertErrorAction {
  type:ActionType.ADD_DESSERT_ERROR;
  payload: string;
}



export type Action =
  | FetchDessert
  | FetchDessertsCompleteAction
  | FetchDessertsErrorAction
  | AddDessert
  | AddDessertCompleteAction
  | AddDessertErrorAction;
