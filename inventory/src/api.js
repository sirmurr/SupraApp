function Api() {
  fetch("http://localhost:13000/setup").then(() => {
    return fetch("http://localhost:13000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Mark",
        lastname: "Matthews",
        username: "MarkyMark1",
        password: "pw1",
      }),
    })
      .then(() => {
        return fetch("http://localhost:13000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: "Sasha",
            lastname: "Nevins",
            username: "princess2",
            password: "pw2",
          }),
        });
      })
      .then(() => {
        return fetch("http://localhost:13000/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            users_id: 1,
            itemname: "Table Salt",
            description: "makes that bland meal just a bit tastier",
            quantity: 10,
          }),
        });
      })
      .then(() => {
        return fetch("http://localhost:13000/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            users_id: 1,
            itemname: "Rocket Propellant",
            description: "YIKES",
            quantity: 1,
          }),
        });
      })
      .then(() => {
        return fetch("http://localhost:13000/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            users_id: 1,
            itemname: "Mammas special stuff",
            description: "trust us it slaps. try on frosted flakes",
            quantity: 99,
          }),
        });
      })
      .then(() => {
        return fetch("http://localhost:13000/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            users_id: 2,
            itemname: "Pepper",
            description:
              "FOO BAR FOO BAR klfglknfsdlmk mmfdsklm ksdmflk mlkdsfm lksmdflkm skk l hello jdsnf nlsnl fsln ldklsfm msdf lkm",
            quantity: 100,
          }),
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  return;
}

export default Api;
