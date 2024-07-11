import React, { useState } from "react";
import Collapsible from "react-collapsible";
import "./InventoryCommands.css";

function InventoryCommands(props) {
  const isVisitor = props.isVisitor;

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapsible = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="inventory-commands">
      <Collapsible trigger="Filter Items By Manager">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>

      <Collapsible trigger="Create Item">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>

      <Collapsible trigger="Create User">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>

      <Collapsible trigger="Edit User">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>

      <Collapsible trigger="Delete User">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>
    </div>
  );
}

export default InventoryCommands;
