import React from "react";
import "./ItemList.css";

function ItemList(props) {
  const { isVisitor, onSelectItem, allItemsDummy } = props;

  return (
    <div className="item-list">
      <h2>Item List</h2>
      <div>
        {allItemsDummy.map((item) => (
          <div
            className="item-pane"
            key={item.id}
            onClick={() => {
              onSelectItem(item);
              console.log("Item clicked:", item); // Debugging log
            }}
          >
            <h3>{item.itemname}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
