import React, { useState } from 'react';

interface NewItemProps {
  add: (text: string) => void;
}

const NewItem: React.FC<NewItemProps> = ({ add }) => {
  const [text, setText] = useState('');
  const handleAdd = () => {
    add(text);

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
