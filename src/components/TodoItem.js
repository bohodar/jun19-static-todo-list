import React from 'react'

  function TodoItem(props) {
    const { id, title, userId, completed } = props.todoItem;
    return (
      <li
        className={completed ? "todoListItem completed" : "todoListItem"}
        key={id}
      >
        <input
          type="checkbox"
          className="checkbox"
          id={"box" + id}
          checked={completed}
          onChange={() => {}}
        />
        <label
          htmlFor={"box" + id}
          className="inputsLabel"
        >
          <span className="inputsLabel--title">
            {title}
          </span>
          <span className="inputsLabel--userName">
            {props.users
              .filter(el => el.id === userId)
              .map(el => el.name)
            }
          </span>
        </label>
      </li>
    )
  }

export default TodoItem;