import React from "react";

function MgmtEntrance() {
  return (
    <div className="mgmt-container">
      <h2>Inventory Manager Login</h2>
      <form>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username"></input>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password"></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default MgmtEntrance;
