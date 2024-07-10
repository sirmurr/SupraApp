import React from "react";
import VisitorEntrance from "./Components/Login/VisitorEntrance";
import MgmtEntrance from "./Components/Login/MgmtEntrance";

function Login() {
  return (
    <div className="Login">
      <h1 className="LoginTitle">Inventory Management Application</h1>
      <VisitorEntrance />
      <MgmtEntrance />
    </div>
  );
}

export default Login;
