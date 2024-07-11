import React, { useState } from "react";
import Collapsible from "react-collapsible";

import CreateUser from "./FilterComp/CreateUser";
import CreateItem from "./FilterComp/CreateItem";
import EditUser from "./FilterComp/EditUser";
import DeleteUser from "./FilterComp/DeleteUser";

import "./InventoryCommands.css";

function InventoryCommands(props) {
  const isVisitor = props.isVisitor;
  const fetchAll = props.fetchAll;
  const allUsers = props.allUsers;

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
            <EditUser fetchAll={fetchAll} allUsers={allUsers} />
          </Collapsible>

          <Collapsible trigger="Delete User">
            <DeleteUser fetchAll={fetchAll} allUsers={allUsers} />
          </Collapsible>

          <div className="user-list">
            <h3>Current Users: </h3>
            <div>
              {allUsers.length > 0 ? (
                allUsers.map((user) => (
                  <div>
                    <p>
                      {user.username}, Id: {user.id}
                    </p>
                  </div>
                ))
              ) : (
                <p>No users available</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default InventoryCommands;
