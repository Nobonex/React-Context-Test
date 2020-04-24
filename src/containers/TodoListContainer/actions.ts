import { TodoItemModel } from '../../models/TodoItemModel';

export enum TodoActions {
  AddItem = 'Add Item',
  RemoveItem = 'Remove Item',
}

interface AddItem {
  type: TodoActions.AddItem;
  data: TodoItemModel;
}

interface RemoveItem {
  type: TodoActions.RemoveItem;
  data: number;
}

export type TodoActionTypes = AddItem | RemoveItem;
