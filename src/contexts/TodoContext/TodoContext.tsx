import React, { createContext, useReducer, Dispatch, useContext } from 'react';
import { TodoActionTypes } from './actions';
import { todoReducer, initialTodoState, TodoState } from './reducer';

type TodoContext = {
  state: TodoState;
  dispatch: Dispatch<TodoActionTypes>;
};

export const TodoContext = createContext<TodoContext>({
  state: initialTodoState,
  dispatch: () => {},
});

const TodoProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  const todoData = { state, dispatch };

  return <TodoContext.Provider value={todoData} {...props} />;
};

export { TodoProvider };
export const useTodoContext = () => useContext(TodoContext);
