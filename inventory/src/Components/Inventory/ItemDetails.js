import React, { useState } from "react";
import "./ItemDetails.css";

function ItemDetails(props) {
  const isVisitor = props.isVisitor;
  const item = props.selectedItem;
  const onClose = props.onClose;

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode((previousMode) => !previousMode);
  };

  return (
    <div className="item-details-overlay">
      <div className="item-details">
        {!isVisitor && (
          <>
            <button className="edit-button" onClick={toggleEditMode}>
              {editMode ? "Enable Edit Mode" : "Disable Edit Mode"}
            </button>
          </>
        )}
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>{item.itemname}</h2>
        <h3>Quantity: {item.quantity}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default ItemDetails;
