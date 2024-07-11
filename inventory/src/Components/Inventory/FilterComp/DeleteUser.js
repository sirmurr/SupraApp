import React, { useState } from "react";

function DeleteUser(props) {
  const fetchAll = props.fetchAll;
  const allUsers = props.allUsers;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await fetch(`http://localhost:13000/users/${id}`, {
        method: "DELETE",
      });

      setId("");
      fetchAll();

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("User delete successfully:", data);
      } else {
        // Handle error response
        console.error("Failed to delete user:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="edit-form">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">Id:</label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default DeleteUser;
