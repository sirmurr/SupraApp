import React from "react";

function ItemList(props) {
  const isVisitor = props.visitor;
  return (
    <div className="List">
      <h2>Item List</h2>
      <h2>Inventory Application</h2>
      <p>Big ol table of items, somehow filter with filter tab</p>
      <p>Itemname, Desc, Manager</p>
      <p>Item is clickable, pulls that items detail page</p>
    </div>
  );
}

export default ItemList;
