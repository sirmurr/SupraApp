import React, { useState } from "react";
import InventoryHeader from "./Components/Inventory/InventoryHeader";
import InventoryCommands from "./Components/Inventory/InventoryCommands";
import ItemList from "./Components/Inventory/ItemList";
import ItemDetails from "./Components/Inventory/ItemDetails";
import { useLocation } from "react-router-dom";

import "./Inventory.css";

function Inventory() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);
  const isVisitor = location.state?.isVisitor || false;

  // filled item field to reflect selection
  const handleSelectItem = (item) => {
    console.log("Selected Item: ", item);
    setSelectedItem(item);
  };

  // clears item field, in turn closing details
  const handleCloseItemDetails = () => {
    setSelectedItem(null);
  };

  const makeFetch = (url, options) => {
    /////Example URL
    // http://localhost:13000/users

    /////EXAMPLE OPTIONS
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json' // Set content type to JSON
    //   },
    //   body: JSON.stringify(jsonData) // Convert JSON data to a string and set it as the request body
    // };

    fetch(url, options)
      .then((response) => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Handle the JSON data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      });
  };

  // Dummy Data
  const allItemsDummy = [
    {
      users_id: 3,
      itemname: "Table Salt",
      description: "makes that bland meal just a bit tastier",
      quantity: 10,
    },
    {
      users_id: 3,
      itemname: "Chili Flakes",
      description: "Hot. Use with caution",
      quantity: 10,
    },
    {
      users_id: 3,
      itemname: "Coconut Water",
      description: "nature's gatorade",
      quantity: 10,
    },
    // Add more items here
  ];

  return (
    <div className="inventory">
      <InventoryHeader isVisitor={isVisitor} />
      <div className="main-content">
        <InventoryCommands isVisitor={isVisitor} />
        <ItemList
          isVisitor={isVisitor}
          onSelectItem={handleSelectItem}
          allItemsDummy={allItemsDummy}
        />
      </div>
      {selectedItem && (
        <ItemDetails
          isVisitor={isVisitor}
          selectedItem={selectedItem}
          onClose={handleCloseItemDetails}
        />
      )}
    </div>
  );
}

export default Inventory;
