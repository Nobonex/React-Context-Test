import { TodoItemModel } from '../../models/TodoItemModel';
import { TodoActionTypes, TodoActions } from './actions';

type TodoState = {
  list: TodoItemModel[];
};

export const initialState: TodoState = {
  list: [],
};

export const reducer = (
  state: TodoState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case TodoActions.AddItem:
      return state;
    case TodoActions.RemoveItem:
      return state;
    default:
      return state;
  }
};
