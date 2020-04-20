import React, { useState } from "react";
import TodoList from "../components/TodoList/TodoList";
import { TodoItemModel } from "../models/TodoItemModel";
import AddItem from "../components/AddItem/AddItem";

type TodoState = {
  list: TodoItemModel[]
}

const initialState: TodoState = {
  list: []
}

const TodoListContainer: React.FC = () => {
  const [state, setState] = useState(initialState);

  const addItem = (name: string, description?: string) => {
    setState({list: [...state.list, {name, description}]})
  };

  return (
    <>
      <div>
        <AddItem model={{addItem}}/>
      </div>

      <div>
        <TodoList list={state.list} />
      </div>
    </>
  );
};

export default TodoListContainer;
