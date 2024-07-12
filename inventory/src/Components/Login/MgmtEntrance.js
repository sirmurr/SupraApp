import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MgmtEntrance(props) {
  const navigate = useNavigate();
  const profiles = props.profiles;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [profiles, setProfiles] = useState("");

  useEffect(() => {
    // Fetch profiles from the API
    const fetchProfiles = async () => {
      try {
        const response = await fetch("http://localhost:13000/users");
        const data = await response.json();
        profiles(data);
      } catch (error) {
        console.error("Error fetching initial users:", error);
      }
    };

    fetchProfiles();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    //LOGIN LOGIC HERE
    const user = profiles.find(
      (profile) =>
        profile.username === username && profile.password === password
    );
    if (user) {
      setError(""); // Clear any previous error
      navigate("/inventory", { state: { isVisitor: false } });
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="mgmt-container">
      <h2>Inventory Manager Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default MgmtEntrance;
