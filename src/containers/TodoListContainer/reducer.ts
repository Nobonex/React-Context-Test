import { TodoItemModel } from '../../models/TodoItemModel';
import { TodoActionTypes } from './actions';

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
    default:
      return state;
  }
};
