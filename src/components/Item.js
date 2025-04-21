import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  function handleUpdateClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
  }

  function handleDeleteClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    }).then(() => onDeleteItem(item));
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button onClick={handleUpdateClick}>
        {item.isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
      <button onClick={handleDeleteClick} className="delete">
        Delete
      </button>
    </li>
  );
}

export default Item;
