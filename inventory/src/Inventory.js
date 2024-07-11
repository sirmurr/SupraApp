import React, { useState, useEffect } from "react";
import InventoryHeader from "./Components/Inventory/InventoryHeader";
import InventoryCommands from "./Components/Inventory/InventoryCommands";
import ItemList from "./Components/Inventory/ItemList";
import ItemDetails from "./Components/Inventory/ItemDetails";
import { useLocation } from "react-router-dom";

import "./Inventory.css";

function Inventory() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);
  const isVisitor = false; //= location.state?.isVisitor || false; undo once login is made
  const [allItems, setAllItems] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [error, setError] = useState(null);

  // filled item field to reflect selection
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  // clears item field, in turn closing details
  const handleCloseItemDetails = () => {
    setSelectedItem(null);
  };

  const makeFetch = async (url, options) => {
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
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    // Initial Fetches
    const fetchData = async () => {
      const fetchedItems = await makeFetch("http://localhost:13000/items");
      const fetchedUsers = await makeFetch("http://localhost:13000/users");
      setAllItems(fetchedItems || []);
      setAllUsers(fetchedUsers || []);
    };

    fetchData();
  }, []);

  const fetchAll = async () => {
    const fetchedItems = await makeFetch("http://localhost:13000/items");
    const fetchedUsers = await makeFetch("http://localhost:13000/users");
    setAllItems(fetchedItems || []);
    setAllUsers(fetchedUsers || []);
  };

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="inventory">
      <InventoryHeader isVisitor={isVisitor} />
      <div className="main-content">
        <InventoryCommands
          isVisitor={isVisitor}
          fetchAll={fetchAll}
          allUsers={allUsers}
        />
        <ItemList
          isVisitor={isVisitor}
          onSelectItem={handleSelectItem}
          allItems={allItems}
          allUsers={allUsers}
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
