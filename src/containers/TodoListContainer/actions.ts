import { TodoItemModel } from '../../models/TodoItemModel';

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
