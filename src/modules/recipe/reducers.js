import { handleAction, combineActions } from 'redux-actions';
import {
  authGood,
  logoutDone,
  loginSucceeded,
} from './actions';

export const user = handleAction(combineActions(authGood, logoutDone, loginSucceeded), {
  next(state, action) {
    return action.payload;
  },
}, {});
