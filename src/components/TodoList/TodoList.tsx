import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoItemModel } from '../../models/TodoItemModel';

interface ListProps {
  items: TodoItemModel[];
  remove: (index: number) => void;
}

const TodoList: React.FC<ListProps> = ({ items, remove }) => {
  return (
    <>
      {items.map((item, i) => (
        <TodoItem text={item.text} index={i} key={i} remove={remove} />
      ))}
    </>
  );
};

export default TodoList;
