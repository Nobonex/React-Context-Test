import { TodoActionTypes, TodoActions } from './actions';
import { TodoItemModel } from '../../models/TodoItemModel';

export type TodoState = {
  todos: TodoItemModel[];
};

const initialState: TodoState = {
  todos: [{ text: 'ayyy' }],
};

export const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case TodoActions.AddTodo:
      return { ...state, todos: [...state.todos, action.item] };
    case TodoActions.RemoveTodo:
      return {
        ...state,
        todos: state.todos.filter((_e, i) => i !== action.index),
      };
    default:
      return state;
  }
};
