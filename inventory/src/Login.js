import React from "react";
import VisitorEntrance from "./Components/Login/VisitorEntrance";
import MgmtEntrance from "./Components/Login/MgmtEntrance";

function Login(props) {
  let isVisitor = props.isVisitor;

  return (
    <div className="login-page">
      <h1 className="login-title">Inventory Management Application</h1>

      <div className="login-container">
        <VisitorEntrance />
        <MgmtEntrance isVisitor={isVisitor} />
      </div>
    </div>
  );
}

export default Login;
