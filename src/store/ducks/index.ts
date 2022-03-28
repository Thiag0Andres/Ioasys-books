import { combineReducers, CombinedState } from 'redux';

import auth, { IAuthState } from './auth';
import user, { IUserState } from './user';

const reducers = combineReducers({
  auth,
  user,
});

const rootReducer = (
  state: any,
  action: any,
): CombinedState<{
  auth: IAuthState;
  user: IUserState;
}> => {
  return reducers(state, action);
};

export default rootReducer;
