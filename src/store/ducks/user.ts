/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { ActionType, action as ActionCreator } from "typesafe-actions";
import SimpleCrypto from "simple-crypto-js";
import { defaultUser } from "../../constants/defaultUser";

export enum Types {
  SET_USER = "@user/SET_USER",
  REMOVE_USER = "@user/REMOVE_USER",
}

const { REACT_APP_LOCAL_STORAGE_CRYPTO_KEY, REACT_APP_LOCAL_STORAGE_USER } =
  process.env;

export interface IUser {
  birthdate: string;
  email: string;
  gender: string;
  id: string;
  name: string;
}

export interface IUserState {
  user?: IUser;
}

export const simpleCrypto = new SimpleCrypto(
  String(REACT_APP_LOCAL_STORAGE_CRYPTO_KEY)
);

const userLogin: IUser = localStorage.getItem(
  String(REACT_APP_LOCAL_STORAGE_USER) || "{}"
)
  ? (simpleCrypto.decrypt(
      localStorage.getItem(String(REACT_APP_LOCAL_STORAGE_USER) || "{}") || "{}"
    ) as IUser)
  : defaultUser;

const INITIAL_STATE: IUserState = {
  user: userLogin,
};

interface ISetUserParams {
  user: IUser;
}

export const Creators = {
  setUser({ user }: ISetUserParams) {
    return ActionCreator(Types.SET_USER, { user });
  },
  removerUser() {
    return ActionCreator(Types.REMOVE_USER, null);
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
        localStorage.setItem(
          String(REACT_APP_LOCAL_STORAGE_USER),
          simpleCrypto.encrypt(user)
        );

        break;
      }

      case Types.REMOVE_USER: {
        // remover dados do usuario e token do localstorage
        localStorage.removeItem(String(REACT_APP_LOCAL_STORAGE_USER));
        // resetar estado do usario
        draft.user = defaultUser;

        break;
      }

      default:
    }
  });
};

export default reducer;
