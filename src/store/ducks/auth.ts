/* eslint-disable no-param-reassign */
import produce, { Draft } from 'immer';
import { Reducer } from 'redux';
import { ActionType, action as ActionCreator } from 'typesafe-actions';

export enum Types {
  SET_AUTH = '@auth/SET_AUTH',
  LOGOUT_AUTH = '@auth/LOGOUT_AUTH',
}

const { REACT_APP_LOCAL_STORAGE_USER_AUTH } = process.env;

export interface IAuthState {
  authenticated?: string | null;
}

const token = localStorage.getItem(String(REACT_APP_LOCAL_STORAGE_USER_AUTH));

const INITIAL_STATE: IAuthState = {
  authenticated: token,
};

interface AuthParams {
  token: string;
}

export const Creators = {
  setAuthenticate({ token }: AuthParams) {
    return ActionCreator(Types.SET_AUTH, { token });
  },
  logout() {
    return ActionCreator(Types.LOGOUT_AUTH, null);
  },
};

export type ActionTypes = ActionType<typeof Creators>;

const reducer: Reducer<IAuthState, ActionTypes> = (
  state = INITIAL_STATE,
  action: ActionTypes,
) => {
  const { type, payload } = action;

  return produce(state, (draft: Draft<IAuthState>) => {
    switch (type) {
      case Types.SET_AUTH: {
        const { token } = payload as AuthParams;
        localStorage.setItem(String(REACT_APP_LOCAL_STORAGE_USER_AUTH), token);

        draft.authenticated = token;

        break;
      }

      case Types.LOGOUT_AUTH: {
        draft.authenticated = undefined;
        localStorage.removeItem(String(REACT_APP_LOCAL_STORAGE_USER_AUTH));
        break;
      }

      default:
    }
  });
};

export default reducer;
