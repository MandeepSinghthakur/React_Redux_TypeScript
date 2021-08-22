import { combineReducers } from 'redux';
import  desertsReducer from './desertsReducer';

const reducers = combineReducers({
  desserts: desertsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
