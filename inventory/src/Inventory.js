import React from "react";
import InventoryHeader from "./Components/Inventory/InventoryHeader";
import InventoryFilter from "./Components/Inventory/InventoryFilter";
import ItemList from "./Components/Inventory/ItemList";
import ItemDetails from "./Components/Inventory/ItemDetails";

function Inventory() {
  return (
    <div className="Inventory">
      <h1>Inventory Page</h1>
      <InventoryHeader />
      <InventoryFilter />
      <ItemList />
      <ItemDetails />
    </div>
  );
}

export default Inventory;
