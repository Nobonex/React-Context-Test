import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AuthActions } from './auth.actions';
import { authReducer } from './auth.reducer';
import { todoReducer } from '../containers/TodoListContainer/todo.reducer';
import { AppActionTypes } from './actions';

export const appReducer = combineReducers({
  todos: todoReducer,
  auth: authReducer,
});

export type AppState = ReturnType<typeof appReducer>;

export const rootReducer = (
  state: AppState | undefined,
  action: AppActionTypes
) => {
  if (action.type === AuthActions.Logout) {
    state = undefined;
  }

  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
