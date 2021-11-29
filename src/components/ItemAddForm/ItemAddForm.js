import React, { Component } from "react"

import "./ItemAddForm.css"

export default class ItemAddForm extends Component {
  state = {
    label: "",
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.onAddedItem(this.state.label)
    this.setState({
      label: "",
    })
  }

  onLabelAdd = event => {
    this.setState({
      label: event.target.value,
    })
  }

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          onChange={this.onLabelAdd}
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    )
  }
}
