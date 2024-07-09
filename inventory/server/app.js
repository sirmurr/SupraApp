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

app.get("/items", (req, res) => {
  knex("items")
    .select("*")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
