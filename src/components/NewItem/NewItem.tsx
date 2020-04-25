import React, { useState } from 'react';
import { useTodoContext } from '../../contexts/TodoContext/TodoContext';
import { AddItem } from '../../contexts/TodoContext/actions';

interface NewItemProps {
  add: (text: string) => void;
}

const NewItem: React.FC = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTodoContext();
  const handleAdd = () => {
    dispatch(AddItem(text));

    setText('');
  };

  return (
    <div className="Item">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="New Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button onClick={() => handleAdd()}>Add</button>
      </form>
    </div>
  );
};

export default NewItem;
