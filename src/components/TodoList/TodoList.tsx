import React from "react";
import { TodoItemModel } from "../../models/TodoItemModel";
import TodoItem from "../TodoItem/TodoItem";

const TodoList: React.FC<{ list: TodoItemModel[] }> = ({ list }) => {
  return (
    <>
      {list.map((item, key) => (
        <TodoItem key={key} item={item} />
      ))}
    </>
  );
};

export default TodoList;
