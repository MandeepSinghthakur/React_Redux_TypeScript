import { Dispatch } from 'redux';
import { Action } from '../actions';
import { RootState } from '../reducers';

export const persistMiddlware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<Action>;
  getState: () => RootState;
}) => {
  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);
    };
  };
};
