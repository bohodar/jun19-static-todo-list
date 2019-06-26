import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {

  return (
    <div className="listWrapper">
      <ul className="todoList">
        {props.todoItems.map(el => {
          return (
            <TodoItem
              key={el.id}
              todoItem={el}
              users={props.users}
          />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList;