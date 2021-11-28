import React, { Component } from "react"

import AppHeader from "../AppHeader"
import SearchPanel from "../SearchPanel"
import TodoList from "../TodoList"
import ItemStatusFilter from "../ItemStatusFilter"
import ItemAddForm from "../ItemAddForm"

import "./App.css"

export default class App extends Component {
  maxId = 1

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Build React App"),
      this.createTodoItem("Have a lunch"),
    ],
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    }
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

  addItem = label => {
    const newItem = this.createTodoItem(label)
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem]
      return {
        todoData: newArray,
      }
    })
  }

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id)

    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }

    const before = arr.slice(0, idx)
    const after = arr.slice(idx + 1)

    return [...before, newItem, ...after]
  }

  toggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      }
    })
  }

  toggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      }
    })
  }

  render() {
    const { todoData } = this.state
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeletedItem={this.deletItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone}
        />
        <ItemAddForm onAddedItem={this.addItem} />
      </div>
    )
  }
}
