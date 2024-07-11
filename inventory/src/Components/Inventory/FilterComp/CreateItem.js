import React, { useState } from "react";

function CreateItem(props) {
  const fetchAll = props.fetchAll;

  const [users_id, setUsers_id] = useState("");
  const [itemname, setItemname] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      users_id, //eventually needs to be replaced with currently logged in user
      itemname,
      description,
      quantity,
    };

    try {
      const response = await fetch("http://localhost:13000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("Item added successfully:", data);
        setUsers_id("");
        setItemname("");
        setDescription("");
        setQuantity("");
        fetchAll();
      } else {
        // Handle error response
        console.error("Failed to add item:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="item-form">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="users_id">Item Creator's User Id:</label>
          <input
            type="number"
            id="user_id"
            value={users_id}
            onChange={(e) => setUsers_id(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="itemname">Item Name:</label>
          <input
            type="text"
            id="itemname"
            value={itemname}
            onChange={(e) => setItemname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Item Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default CreateItem;
