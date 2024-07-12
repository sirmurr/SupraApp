import React, { useState } from "react";
import EditItem from "./DetailComp/EditItem.js";
import "./ItemDetails.css";

function ItemDetails(props) {
  const isVisitor = props.isVisitor;
  const item = props.selectedItem;
  const onClose = props.onClose;
  const fetchAll = props.fetchAll;

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode((previousMode) => !previousMode);
  };

  const onDelete = () => {
    console.log(item.id);
    fetch(`http://localhost:13000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => {
        console.log(res);
        onClose();
      });
  };

  return (
    <div className="item-details-overlay">
      <div className="item-details">
        {!isVisitor && (
          <>
            <button className="edit-button" onClick={toggleEditMode}>
              {editMode ? "Disable Edit Mode" : "Enable Edit Mode"}
            </button>
          </>
        )}
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <button className="delete-item-button" onClick={onDelete}>
          Delete Item
        </button>
        <div>
          {!editMode ? (
            <div className="view-mode">
              <h2>{item.itemname}</h2>
              <p>
                <b>Item Id:</b> {item.id} <b>Created By User Id:</b>{" "}
                {item.users_id}
              </p>
              <h3>Quantity: {item.quantity}</h3>
              <p>Description: {item.description}</p>{" "}
            </div>
          ) : (
            <div className="edit-mode">
              <h2>Edit Item: {item.itemname}</h2>
              <EditItem
                fetchAll={fetchAll}
                onClose={onClose}
                itemId={item.id}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
