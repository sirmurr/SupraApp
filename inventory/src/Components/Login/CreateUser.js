import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser(props) {
  const handleProfileCreated = props.handleProfileCreated;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      firstname,
      lastname,
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:13000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("User added successfully:", data);
        setFirstname("");
        setLastname("");
        setUsername("");
        setPassword("");
        setError("");
        handleProfileCreated();
      } else {
        // Handle error response
        console.error("Failed to add user:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="create-user-form">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Create User</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default CreateUser;
