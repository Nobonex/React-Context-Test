import { TodoItemModel } from '../../models/TodoItemModel';
import { TodoActionTypes, TodoActions } from './actions';

export type TodoState = {
  list: TodoItemModel[];
};

export const initialTodoState: TodoState = {
  list: [],
};

export const todoReducer = (
  state: TodoState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case TodoActions.AddItem:
      return { ...state, list: [...state.list, action.data] };
    case TodoActions.RemoveItem:
      return {
        ...state,
        list: state.list.filter((_e, i) => i !== action.data),
      };
    default:
      return state;
  }
};
