/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { ActionType, action as ActionCreator } from "typesafe-actions";

export enum Types {
  SET_USER = "@user/SET_USER",
}

export interface IUser {
  birthdate: string;
  email: string;
  gender: string;
  id: string;
  name: string;
}

export interface IUserState {
  user?: IUser;
  loading: boolean;
}

const INITIAL_STATE: IUserState = {
  user: {} as IUser,
  loading: true,
};

interface ISetUserParams {
  user: IUser;
}

export const Creators = {
  setUser({ user }: ISetUserParams) {
    return ActionCreator(Types.SET_USER, { user });
  },
};

export type ActionTypes = ActionType<typeof Creators>;

const reducer: Reducer<IUserState, ActionTypes> = (
  state = INITIAL_STATE,
  action: ActionTypes
) => {
  const { type, payload } = action;

  return produce(state, (draft: Draft<IUserState>) => {
    switch (type) {
      case Types.SET_USER: {
        const { user } = payload as ISetUserParams;
        draft.user = user;
        draft.loading = false;

        break;
      }

      default:
    }
  });
};

export default reducer;
