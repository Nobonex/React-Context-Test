import { AuthActionTypes } from './auth.actions';

export type AuthState = {
  readonly token?: string;
  readonly authError?: string;
};

const initialState: AuthState = {};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    default:
      return state;
  }
};
