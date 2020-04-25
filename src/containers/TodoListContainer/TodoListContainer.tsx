import React from 'react';
import NewItem from '../../components/NewItem/NewItem';
import TodoList from '../../components/TodoList/TodoList';

const TodoListContainer: React.FC = () => {
  return (
    <div>
      <NewItem />

      <TodoList />
    </div>
  );
};

export default TodoListContainer;
