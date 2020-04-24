import { TodoItemModel } from '../../models/TodoItemModel';
import { Dispatch } from 'react';

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
  addItem: (text: string) => (dispatch: Dispatch<AddItemAction>): void => {
    console.log(text);

    dispatch({ type: TodoActions.AddItem, data: { text } });
  },
};
