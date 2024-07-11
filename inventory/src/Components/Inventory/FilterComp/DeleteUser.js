import React, { useState } from "react";

function DeleteUser(props) {
  const fetchAll = props.fetchAll;
  const allUsers = props.allUsers;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h4>DeleteUser</h4>
    </div>
  );
}

export default DeleteUser;
