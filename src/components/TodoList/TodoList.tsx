import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { useTodoContext } from '../../contexts/TodoContext/TodoContext';
import { RemoveItem } from '../../contexts/TodoContext/actions';

const TodoList: React.FC = () => {
  const { state, dispatch } = useTodoContext();

  const remove = (index: number) => {
    dispatch(RemoveItem(index));
  };

  return (
    <>
      {state.list.map((item, i) => (
        <TodoItem text={item.text} index={i} key={i} remove={() => remove(i)} />
      ))}
    </>
  );
};

export default TodoList;
