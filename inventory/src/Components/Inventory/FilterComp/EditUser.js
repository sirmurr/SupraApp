import React, { useState, useEffect } from "react";

function EditUser(props) {
  const fetchAll = props.fetchAll;
  const allUsers = props.allUsers;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    const user = {
      firstname,
      lastname,
      username,
      password,
    };

    try {
      const response = await fetch(`http://localhost:13000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      setId("");
      setFirstname("");
      setLastname("");
      setUsername("");
      setPassword("");
      fetchAll(); //remove later

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("User edited successfully:", data);
      } else {
        // Handle error response
        console.error("Failed to edit user:", response.statusText);
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
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default EditUser;
