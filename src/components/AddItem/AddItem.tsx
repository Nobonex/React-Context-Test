import React, { useState } from "react";
import { AddItemModel } from "../../models/AddItemModel";
import "./AddItem.css";

type addItemState = {
  name: string;
  description?: string;
};

const initialState: addItemState = {
  name: "",
  description: "",
};

const AddItem: React.FC<{ model: AddItemModel }> = ({ model }) => {
  const [localState, setState] = useState(initialState);

  const handleSubmit = () => {
    if (
      (localState.name.trim().length === 0 &&
        localState.description?.trim().length === 0) ||
      (localState.name.trim().length === 0 && localState.description?.trim().length !== 0)
    )
      return;

    model.addItem(
      localState.name,
      localState.description?.trim().length === 0 ? "..." : localState.description
    );
    
    setState(initialState);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="The name..."
        value={localState.name}
        onChange={(e) => setState({ ...localState, name: e.target.value })}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        placeholder="The description..."
        value={localState.description}
        onChange={(e) => setState({ ...localState, description: e.target.value })}
      />
      <button type="submit" onClick={handleSubmit}>
        Add item
      </button>
    </form>
  );
};

export default AddItem;
