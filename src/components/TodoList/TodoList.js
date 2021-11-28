import React from "react"

import TodoListItem from "../TodoListItem"

import "./TodoList.css"

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item

    return (
      <li key={id} className="list-group-item">
        {/*Вариант 1: <TodoListItem label={item.label} imortant={item.imortant} /> */}
        <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
      </li>
    )
  })

  return <ul className="list-group todo-list">{elements}</ul>
}

export default TodoList