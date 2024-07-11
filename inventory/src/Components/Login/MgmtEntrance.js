// import React from "react";

// function MgmtEntrance() {
//   return (
//     <div className="mgmt-container">
//       <h2>Inventory Manager Login</h2>
//       <form>
//         <div>
//           <label for="username">Username:</label>
//           <input type="text" id="username" name="username"></input>
//         </div>
//         <div>
//           <label for="password">Password:</label>
//           <input type="password" id="password" name="password"></input>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default MgmtEntrance;

import React, { useState } from "react";

function MgmtEntrance() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    //LOGIN LOGIC HERE
    //if user/pass combo exist, let in no visitor mode
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
      </form>
    </div>
  );
}

export default MgmtEntrance;
