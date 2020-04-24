import React from 'react';

interface ItemProps {
  index: number;
  text: string;
  remove: (index: number) => void;
}

const TodoItem: React.FC<ItemProps> = ({ index, text, remove }) => {
  return (
    <div className="Item">
      {`${index + 1} ${text}`}
      <span
        onClick={() => {
          remove(index);
        }}
      >
        Done
      </span>
    </div>
  );
};

export default TodoItem;
