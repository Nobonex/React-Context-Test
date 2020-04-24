import React from 'react';
import './App.css';
import TodoListPage from './containers/TodoListContainer/TodoListContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          ToDo App
        </h2>
        <TodoListPage />
      </header>
    </div>
  );
};

export default App;
