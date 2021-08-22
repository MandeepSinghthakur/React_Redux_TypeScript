import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import {
  Action
} from '../actions';
import { Dessert } from '../dessert';

export const fetchDesserts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_DESSERTS });
    try {
      const response = await fetch('desserts.json');
      const data: Dessert[] = await  response.json()
      dispatch({
        type: ActionType.FETCH_DESSERTS_COMPLETE,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_DESSERTS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const addDessert = (newData:Dessert) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.ADD_DESSERT, });
    try {
      // TO DO SAVE IT TO DB INSTEAD OF RETURNING IT
      dispatch({
        type: ActionType.ADD_DESSERT_COMPLETE,
        payload: newData,
      });
    } catch (err) {
      dispatch({
        type: ActionType.ADD_DESSERT_ERROR,
        payload: err.message,
      });
    }
  };
};
