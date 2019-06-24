import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {

  return (
    <div>
      <ul>
        {props.todoItems.map(el => {
          return (
            <TodoItem
              key={el.id}
              todoItem={el}
          />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList;