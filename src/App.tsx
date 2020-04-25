import React from 'react';
import './App.css';
import TodoListPage from './containers/TodoListContainer/TodoListContainer';
import { TodoProvider } from './contexts/TodoContext/TodoContext';
import Compose from './contexts/Compose';

const App: React.FC = () => {
  return (
    <Compose components={[TodoProvider]}>
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
    </Compose>
  );
};

export default App;
