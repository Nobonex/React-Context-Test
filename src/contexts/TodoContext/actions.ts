import { TodoItemModel } from '../../models/TodoItemModel';

export enum TodoActions {
  AddItem = 'Add Item',
  RemoveItem = 'Remove Item',
}

interface AddItemAction {
  type: TodoActions.AddItem;
  data: TodoItemModel;
}

interface RemoveItemAction {
  type: TodoActions.RemoveItem;
  data: number;
}

export type TodoActionTypes = AddItemAction | RemoveItemAction;

export const actionCreators = {
  addItem: (text: string): AddItemAction => ({
    type: TodoActions.AddItem,
    data: { text },
  }),
  removeItem: (index: number): RemoveItemAction => ({
    type: TodoActions.RemoveItem,
    data: index,
  }),
};
