import React, { useState } from 'react';
import NewItem from '../../components/NewItem/NewItem';
import TodoList from '../../components/TodoList/TodoList';
import { TodoItemModel } from '../../models/TodoItemModel';

type TodoState = {
  list: TodoItemModel[];
};

const initialState: TodoState = {
  list: [],
};

const TodoListContainer: React.FC = () => {
  const [state, setState] = useState(initialState);

  const removeItem = (index: number) => {
    setState({ list: state.list.filter((e, i) => i !== index) });
  };

  const addItem = (text: string) => {
    setState({
      list: [...state.list, { text }],
    });
  };

  return (
    <div>
      <NewItem add={addItem} />

      <TodoList items={state.list} remove={removeItem} />
    </div>
  );
};

export default TodoListContainer;
