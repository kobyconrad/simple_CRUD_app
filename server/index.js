const express = require("express");
const app = express();
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

app.get("/", (req, res) => {
  res.send("Hello World! Again. Wooo new code.");
  console.log("triggered GET request");
  res.end();
});

// GET (req) client => server => database || (res) database => server => client

// okay Koby time to build your paths
// 1. receives data, saves it to database
// 2. uhmmmmm do I even need a server/express? can I just read/write/delete from my client components?

// My component can trigger a function that writes to database
// My component can pull data from the database & use that to map components
// My component can update and delete data from database

// READ from the database
app.get("/read-all", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log("triggered /read-all");
  client.query("SELECT text FROM notes", (err, res) => {
    console.log(res);
    client.end();
  });
  //   console.log(res);
  res.end();
});
