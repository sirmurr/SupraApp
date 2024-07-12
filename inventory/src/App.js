import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//API start up
import Api from "./Api";

//Components
import Login from "./Login";
import Inventory from "./Inventory";

import "./App.css";

Api();

function App() {
  let isVisitor = true;
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login isVisitor={isVisitor} />} />
        <Route
          path="/inventory"
          element={<Inventory isVisitor={isVisitor} />}
        />
      </Routes>
    </div>
  );
}

export default App;
