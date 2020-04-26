import { TodoItemModel } from '../../models/TodoItemModel';
import { Dispatch } from 'redux';
import { AppState } from '../../store/configureStore';

export enum TodoActions {
  AddTodo = 'Add Todo',
  RemoveTodo = 'Remove Todo',
}

export interface AddTodoAction {
  type: TodoActions.AddTodo;
  item: TodoItemModel;
}

export interface RemoveTodoAction {
  type: TodoActions.RemoveTodo;
  index: number;
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction;

export const actionCreators = {
  addItem: (text: string) => (
    dispatch: Dispatch<AddTodoAction>,
    getState: () => AppState
  ) => dispatch({ type: TodoActions.AddTodo, item: { text } }),
  removeItem: (index: number) => (
    dispatch: Dispatch<RemoveTodoAction>,
    getState: () => AppState
  ) => dispatch({ type: TodoActions.RemoveTodo, index }),
};
