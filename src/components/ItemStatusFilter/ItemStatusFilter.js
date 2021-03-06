import React, { Component } from "react"

import "./ItemStatusFilter.css"

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ]

  //btn-info btn-outline-secondary

  render() {
    const { filter, onFilterChange } = this.props

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name
      const setClass = isActive ? "btn-info" : "btn-outline-secondary"

      return (
        <button
          key={name}
          type="button"
          className={`btn ${setClass}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      )
    })

    return <div className="btn-group">{buttons}</div>
  }
}
