import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dessert } from '../dessert';

interface DessertsState {
  loading: boolean;
  error: string | null;
  data: Dessert[];
  firstItem: Dessert | null
}

const initialState: DessertsState = {
  loading: false,
  error: null,
  data: [],
  firstItem:null
};

const reducer = produce((state: DessertsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_DESSERTS:
      state.loading = action.payload;
      state.error = null;
      return state;
    case ActionType.FETCH_DESSERTS_COMPLETE:
      state.data = action.payload.slice(1)
      state.firstItem = action.payload[0]
      state.loading = false;
      return state;
    case ActionType.FETCH_DESSERTS_ERROR:
      state.loading = false;
      state.error = action.payload;
      return state;
    case ActionType.ADD_DESSERT:
      state.loading = true;
      state.error = null;
      return state;
    case ActionType.ADD_DESSERT_COMPLETE:
      state.data = [...state.data,action.payload]
      return state;
    case ActionType.ADD_DESSERT_ERROR:
      state.loading = false;
      state.error = action.payload;
      return state;
    default:
      return state;
  }
});

export default reducer;
