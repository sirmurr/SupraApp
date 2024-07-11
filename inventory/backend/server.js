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

//SETUP OF SERVER DO NOT DELETE silly kevin
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
});

//USERS ROUTES ------------------------------------------------------
//GET entire list of users
app.get("/users", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.status(200).send(users.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//GET single user by users/:id
app.get("/users/:id", async (req, res) => {
  // Logic to get a single user
  const userId = req.params.id;

  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1 LIMIT 1", [
      userId,
    ]);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

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
app.put("/users/:id", async (req, res) => {
  // Logic to update a user
  const userId = req.params.id;
  const { firstname, lastname, username, password } = req.body;

  try {
    const updatedUser = await pool.query(
      "UPDATE users SET firstname = $1, lastname = $2, username = $3, password = $4 WHERE id = $5 RETURNING *",
      [firstname, lastname, username, password, userId]
    );

    if (!updatedUser.length) {
      return res.status(404).send("User not found");
    }

    res.json(updatedUser[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//DELETE user from users table
app.delete("/users/:id", async (req, res) => {
  // Logic to delete a user
  const userId = req.params.id;

  try {
    const deleted = await pool.query("DELETE FROM users WHERE id = $1", [
      userId,
    ]);
    if (!deleted) {
      return res.status(404).send("User not found");
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

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
app.get("/items/:id", async (req, res) => {
  const itemId = req.params.id;

  try {
    const item = await pool.query("SELECT * FROM items WHERE id = $1 LIMIT 1", [
      itemId,
    ]);
    if (!item) {
      return res.status(404).send("Item not found");
    }
    res.json(item.rows[0]); // Send single item object as JSON
  } catch (error) {
    res.status(500).send(error.message);
  }
});

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

//PUT update user information
app.put("/items/:id", async (req, res) => {
  const itemId = req.params.id;
  const { users_id, itemname, description, quantity } = req.body;

  try {
    const updatedItem = await pool.query(
      "UPDATE items SET users_id = $1, itemname = $2, description = $3, quantity = $4 WHERE id = $5 RETURNING *",
      [users_id, itemname, description, quantity, itemId]
    );

    if (!updatedItem) {
      return res.status(404).send("Item not found");
    }

    res.json(updatedItem.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//DELETE user from users table
app.delete("/items/:id", async (req, res) => {
  const itemId = req.params.id;

  try {
    const deleted = await pool.query("DELETE FROM items WHERE id = $1", [
      itemId,
    ]);

    if (!deleted) {
      return res.status(404).send("Item not found");
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//listen to that damn thang
app.listen(port, () => console.log(`Server has started on port: ${port}`));
