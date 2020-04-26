import { AuthActionTypes } from './auth.actions';
import { TodoActionTypes } from '../containers/TodoListContainer/actions';

export type AppActionTypes = AuthActionTypes | TodoActionTypes;
