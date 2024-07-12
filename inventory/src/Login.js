import React, { useState } from "react";
import VisitorEntrance from "./Components/Login/VisitorEntrance";
import MgmtEntrance from "./Components/Login/MgmtEntrance";
import CreateUser from "./Components/Login/CreateUser";
import "./Login.css";

function Login(props) {
  let isVisitor = props.isVisitor;
  const [profiles, setProfiles] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:13000/users");
      if (response.ok) {
        const data = await response.json();
        setProfiles(data);
      } else {
        console.error("Failed to fetch users:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleProfileCreated = () => {
    fetchUsers();
  };

  return (
    <div className="login-page">
      <h1 className="login-title">Inventory Management Application</h1>

      <div className="login-container">
        <VisitorEntrance />
        <MgmtEntrance isVisitor={isVisitor} profiles={profiles} />
        <CreateUser
          setProfiles={setProfiles}
          handleProfileCreated={handleProfileCreated}
        />
      </div>
    </div>
  );
}

export default Login;
