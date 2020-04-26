export enum AuthActions {
  Logout = 'AUTH_LOGOUT',
}

interface LogoutAction {
  type: 'AUTH_LOGOUT';
  data: null;
}

export type AuthActionTypes = LogoutAction;
