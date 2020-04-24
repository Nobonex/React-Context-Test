import React from 'react';
import { useTodoContext } from '../../contexts/TodoContext/TodoContext';
import NewItem from '../../components/NewItem/NewItem';
import TodoList from '../../components/TodoList/TodoList';
import { actionCreators } from '../../contexts/TodoContext/actions';

const TodoListContainer: React.FC = () => {
  const { state } = useTodoContext();
  return (
    <div>
      <NewItem add={actionCreators.addItem} />

      <TodoList items={state.list} remove={() => {}} />
    </div>
  );
};

export default TodoListContainer;
