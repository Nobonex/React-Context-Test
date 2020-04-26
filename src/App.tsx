import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import TodoListPage from './containers/TodoListContainer/TodoListContainer';
import store from './store/configureStore';

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
