import { TodoItemModel } from '../../models/TodoItemModel';

export enum TodoActionTypes {
  AddTodo = 'Add Todo',
  RemoveTodo = 'Remove Todo',
}

export interface AddTodoAction {
  type: TodoActionTypes.AddTodo;
  item: TodoItemModel;
}

export interface RemoveTodoAction {
  type: TodoActionTypes.RemoveTodo;
  id: number;
}

export type TodoActions = AddTodoAction | RemoveTodoAction;
