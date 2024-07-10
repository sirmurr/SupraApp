const express = require("express");
const pool = require("./db");
const port = 4000;
const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

const app = express();
app.use(express.json());

// test db route
app.get("/test-db", async (req, res) => {
  try {
    const result = await knex.raw("SELECT 1+1 AS result");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Database connection failed", error: err });
  }
});

//routes
app.get("/", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM schools");
    res.status(200).send(data.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post("/", async (req, res) => {
  const { name, location } = req.body;
  try {
    await pool.query("INSERT INTO schools (name, address) VALUES ($1, $2)", [
      name,
      location,
    ]);
    res.status(200).send({ message: "Successfully added child" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("/setup", async (req, res) => {
  try {
    await pool.query(
      "CREATE TABLE schools(id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))"
    );
    res.status(200).send({ message: "Successfully created table" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
