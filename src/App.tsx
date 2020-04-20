import React from 'react';
import './App.css';
import TodoListPage from './containers/TodoListContainer/TodoListContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoListPage />
    </div>
  );
};

export default App;
