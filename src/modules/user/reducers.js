import { handleAction, combineActions } from 'redux-actions';
import {
  receiveAuth,
  receiveLogout,
} from './actions';

// eslint-disable-next-line
export const user = handleAction(combineActions(receiveAuth, receiveLogout), {
  next(state, action) {
    return action.payload;
  },
}, {});
