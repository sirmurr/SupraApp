import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Inventory from "./Inventory";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;

// //minimal app
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import MinimalComponent from "./MinimalComponent";
// require("react-dom");
// window.React2 = require("react");
// console.log(window.React1 === window.React2);

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navigate to="/minimal" replace />} />
//           <Route path="/minimal" element={<MinimalComponent />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
