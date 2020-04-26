import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/configureStore';
import AppRouter from './router/router';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
