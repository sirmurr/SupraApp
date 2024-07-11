import React from "react";
import VisitorEntrance from "./Components/Login/VisitorEntrance";
import MgmtEntrance from "./Components/Login/MgmtEntrance";

function Login() {
  return (
    <div className="login-page">
      <h1 className="login-title">Inventory Management Application</h1>

      <div className="login-container">
        <VisitorEntrance />
        <MgmtEntrance />
      </div>
    </div>
  );
}

export default Login;
