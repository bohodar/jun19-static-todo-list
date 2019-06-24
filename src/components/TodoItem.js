import React from 'react'

  function TodoItem(props) {
    console.log(props.todoItem);
    const { id, title, userId, completed } = props.todoItem;
    console.log(title);
    return (
      <li
        //className="todoListItem"
        key={id}
      >
        <input
          type="checkbox"
          //className="checkbox"
          id={"box" + id}
          checked={completed}
        />
        <label htmlFor={"box" + id}>
          <span className="todoTitle">
            {title}
          </span>
        </label>
      </li>
    )
  }

export default TodoItem;