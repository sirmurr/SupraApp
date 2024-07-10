const express = require("express");
const app = express();
const port = 8081;
const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Application up and running!");
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await knex.raw("SELECT 1+1 AS result");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Database connection failed", error: err });
  }
});

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
