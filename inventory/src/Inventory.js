import React from "react";
import InventoryHeader from "./Components/Inventory/InventoryHeader";
import InventoryFilter from "./Components/Inventory/InventoryFilter";
import ItemList from "./Components/Inventory/ItemList";
import ItemDetails from "./Components/Inventory/ItemDetails";
import { useLocation } from "react-router-dom";

function Inventory() {
  const location = useLocation();
  const isVisitor = location.state?.isVisitor || false;

  return (
    <div className="Inventory">
      <h1>Inventory Page</h1>
      <InventoryHeader visitor={isVisitor} />
      <InventoryFilter visitor={isVisitor} />
      <ItemList visitor={isVisitor} />
      <ItemDetails visitor={isVisitor} />
    </div>
  );
}

export default Inventory;
