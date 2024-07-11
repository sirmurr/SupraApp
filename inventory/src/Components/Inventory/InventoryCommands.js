import React, { useState } from "react";
import Collapsible from "react-collapsible";

import CreateUser from "./FilterComp/CreateUser";
import CreateItem from "./FilterComp/CreateItem";

import "./InventoryCommands.css";

function InventoryCommands(props) {
  const isVisitor = props.isVisitor;
  const fetchAll = props.fetchAll;

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="inventory-commands">
      {
        //Not needed right now
        /* <Collapsible trigger="Filter Items By Manager">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible> */
      }

      {!isVisitor && (
        <>
          <Collapsible trigger="Create Item">
            <CreateItem fetchAll={fetchAll} />
          </Collapsible>

          <Collapsible trigger="Create User">
            <CreateUser fetchAll={fetchAll} />
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
        </>
      )}
    </div>
  );
}

export default InventoryCommands;
