import React from 'react';
import { useTodoContext } from '../../contexts/TodoContext/TodoContext';
import NewItem from '../../components/NewItem/NewItem';
import TodoList from '../../components/TodoList/TodoList';
import { actionCreators } from '../../contexts/TodoContext/actions';

const TodoListContainer: React.FC = () => {
  const { state, dispatch } = useTodoContext();
  return (
    <div>
      <NewItem add={(e) => dispatch(actionCreators.addItem(e))} />

      <TodoList
        items={state.list}
        remove={(e) => dispatch(actionCreators.removeItem(e))}
      />
    </div>
  );
};

export default TodoListContainer;
