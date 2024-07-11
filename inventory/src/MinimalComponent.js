import React, { useState, useEffect } from "react";

function MinimalComponent() {
  const [state, setState] = useState("Initial State");

  useEffect(() => {
    setState("Component Loaded");
  }, []);

  return <div>{state}</div>;
}

export default MinimalComponent;
