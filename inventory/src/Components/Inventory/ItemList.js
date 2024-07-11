import React from "react";
import "./ItemList.css";

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
}

function ItemList(props) {
  const { isVisitor, onSelectItem, allItems, allUsers } = props;

  return (
    <div className="item-list">
      <h2>Item List</h2>
      <div>
        {allItems.length > 0 ? (
          allItems.map((item) => (
            <div
              className="item-pane"
              key={item.id}
              onClick={() => onSelectItem(item)}
            >
              <h3>{item.itemname}</h3>
              <p>
                Item Id: {item.id}, Quantity: {item.quantity}
              </p>
              <p>Description: {truncateText(item.description, 100)}</p>
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
}

export default ItemList;
