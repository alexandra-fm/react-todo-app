import React, { Component } from "react"

import AppHeader from "../AppHeader"
import SearchPanel from "../SearchPanel"
import TodoList from "../TodoList"
import ItemStatusFilter from "../ItemStatusFilter"

import "./App.css"

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Build React App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 },
    ],
  }

  deletItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id)

      const before = todoData.slice(0, idx)
      const after = todoData.slice(idx + 1)

      const newArray = [...before, ...after]

      return {
        todoData: newArray,
      }
    })
  }

  render() {
    const { todoData } = this.state

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={todoData} onDeleted={this.deletItem} />
      </div>
    )
  }
}
