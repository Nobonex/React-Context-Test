import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoItemModel } from '../../models/TodoItemModel';

interface ListProps {
  list: TodoItemModel[];
  remove: (index: number) => void;
}

const TodoList: React.FC<ListProps> = ({ list, remove }) => {
  return (
    <>
      {list.map((item, i) => (
        <TodoItem text={item.text} index={i} key={i} remove={remove} />
      ))}
    </>
  );
};

export default TodoList;
