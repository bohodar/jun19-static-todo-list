import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import todoItems from './data/todoItems';
import users from './data/users';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <TodoList
          todoItems={todoItems}
          users={users}
        />
      </div>
    )
  }
}

export default App;
