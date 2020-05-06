const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 4001;
const { Pool, Client } = require("pg");
const connectionString =
  "postgressql://postgres:demo1234@localhost:5432/kobyconrad";

const client = new Client({
  connectionString: connectionString,
});

client.connect();

// tells my server to listen for GET/POST/w.e requests at const port
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World! Again. Wooo new code.");
  console.log("triggered GET request");
  res.end();
});

// READ from the database
app.get("/read-all", (req, response) => {
  response.header("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log("triggered /read-all");

  client.query("SELECT text, table_id FROM notes", (err, res) => {
    response.json(res.rows).end();
  });
});

app.post("/delete", (req, res) => {
  console.log("body", req.body);

  res.send("delete response");
});
