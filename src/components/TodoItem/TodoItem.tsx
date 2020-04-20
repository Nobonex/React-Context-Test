import React from "react";
import { TodoItemModel } from "../../models/TodoItemModel";

const TodoItem: React.FC<{ item: TodoItemModel }> = ({ item }) => {
  return (
    <p>
      {item.name} - {item.description}
    </p>
  );
};

export default TodoItem;
