import React from "react";
import "./InventoryHeader.css";

function InventoryHeader(props) {
  const isVisitor = props.isVisitor;

  return (
    <div className="inventory-header">
      <h2>Inventory Application</h2>
      <p>{isVisitor ? "Visitor Mode" : "Manager Mode"}</p>
    </div>
  );
}

export default InventoryHeader;
