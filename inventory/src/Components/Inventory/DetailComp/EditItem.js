import React, { useState, useEffect } from "react";

function EditItem(props) {
  const fetchAll = props.fetchAll;
  const onClose = props.onClose;
  const [users_id, setUsers_id] = useState("");
  const [itemname, setItemname] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = async (event) => {
    console.log(props.itemId);
    event.preventDefault(); // Prevents the default form submission behavior

    const item = {
      users_id,
      itemname,
      description,
      quantity,
    };

    try {
      const response = await fetch(
        `http://localhost:13000/items/${props.itemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );

      setId("");
      setUsers_id("");
      setItemname("");
      setDescription("");
      setQuantity("");
      onClose(); //remove later

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("Item edited successfully:", data);
      } else {
        // Handle error response
        console.error("Failed to edit item:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="edit-item">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">Created By User Id:</label>
          <input
            type="number"
            id="users_id"
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
          <label htmlFor="description">Description:</label>
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
        <button type="submit">Submit Edit</button>
      </form>
    </div>
  );
}

export default EditItem;
