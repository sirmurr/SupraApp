import React from "react";
import { useNavigate } from "react-router-dom";

function VisitorEntrance() {
  const navigate = useNavigate();

  const handleVisitorEnter = () => {
    navigate("/inventory", { state: { isVisitor: true } });
  };

  return (
    <div className="visitor-container">
      <h2>Enter as a visitor?</h2>
      <button onClick={handleVisitorEnter}>Visitor Enter</button>
    </div>
  );
}

export default VisitorEntrance;
