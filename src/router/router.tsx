import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoListContainer from '../containers/TodoListContainer/TodoListContainer';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={TodoListContainer} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
