const express = require("express");
const pool = require("./db");
const port = 4000;

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// test-db
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT 1+1 AS result");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Database connection failed", error: err });
  }
});

// initial table creation
app.get("/setup", async (req, res) => {
  try {
    // Creation of 'users' table
    await pool.query(
      "CREATE TABLE users(id SERIAL PRIMARY KEY, firstname VARCHAR(100), lastname VARCHAR(100), username VARCHAR(100), password VARCHAR(100))"
    );
    // Creatoin of 'items' table
    await pool.query(
      "CREATE TABLE items(id SERIAL PRIMARY KEY, users_id INT, itemname VARCHAR(100), description VARCHAR(250), quantity INT)"
    );
    res
      .status(200)
      .send({ message: "Successfully created users and items tables" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  //USERS ROUTES ------------------------------------------------------
  //GET entire list of users
  app.get("/users", async (req, res) => {
    try {
      const data = await pool.query("SELECT * FROM users");
      res.status(200).send(data.rows);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  //GET single user by users/:id

  //POST new user to users table
  app.post("/users", async (req, res) => {
    const { firstname, lastname, username, password } = req.body;
    try {
      await pool.query(
        "INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4)",
        [firstname, lastname, username, password]
      );
      res.status(200).send({ message: "Successfully added users child" });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  //PUT update user information

  //DELETE user from users table

  //ITEMS ROUTES ------------------------------------------------------

  //GET entire list of items
  app.get("/items", async (req, res) => {
    try {
      const data = await pool.query("SELECT * FROM items");
      res.status(200).send(data.rows);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  //GET single item by items/:id

  //POST new item to items table
  app.post("/items", async (req, res) => {
    const { users_id, itemname, description, quantity } = req.body;
    try {
      await pool.query(
        "INSERT INTO items (users_id, itemname, description, quantity) VALUES ($1, $2, $3, $4)",
        [users_id, itemname, description, quantity]
      );
      res.status(200).send({ message: "Successfully added items child" });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
});

//listen to that damn thang
app.listen(port, () => console.log(`Server has started on port: ${port}`));
