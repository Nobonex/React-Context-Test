import React from 'react';
import NewItem from '../../components/NewItem/NewItem';
import TodoList from '../../components/TodoList/TodoList';
import { AppState } from '../../store/configureStore';
import { TodoItemModel } from '../../models/TodoItemModel';
import { connect } from 'react-redux';
import { actionCreators as todoActions } from './actions';
import { bindActionCreators } from 'redux';

interface TodoListProps {
  items: TodoItemModel[];
  todoActions: typeof todoActions;
}

const TodoListContainer: React.FC<TodoListProps> = ({ items, todoActions }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          ToDo App
        </h2>
        <div>
          <NewItem add={todoActions.addItem} />
          <TodoList list={items} remove={todoActions.removeItem} />
        </div>
      </header>
    </div>
  );
};

export default connect(
  (state: AppState) => ({
    items: state.todoState.todos,
  }),
  (dispatch) => {
    return {
      todoActions: bindActionCreators(todoActions, dispatch),
    };
  }
)(TodoListContainer);
