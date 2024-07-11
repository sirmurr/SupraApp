import React from "react";
import "./ItemList.css";

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
