import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoItemModel } from '../../models/TodoItemModel';

interface ListProps {
  list: TodoItemModel[];
}

const TodoList: React.FC<ListProps> = ({ list }) => {
  const remove = (index: number) => {};

  return (
    <>
      {list.map((item, i) => (
        <TodoItem text={item.text} index={i} key={i} remove={() => remove(i)} />
      ))}
    </>
  );
};

export default TodoList;
