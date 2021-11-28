import React from "react"

import "./ItemAddForm.css"

const ItemAddForm = ({ onAddedItem }) => {
  return (
    <div className="item-add-form">
      {/* <input
        type="text"
        className="form-control add-input"
        placeholder="type to add"
      ></input> */}
      <button
        className="btn btn-outline-secondary"
        onClick={() => onAddedItem("New task added!")}
      >
        Add Item
      </button>
    </div>
  )
}

export default ItemAddForm
