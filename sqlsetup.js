const { Pool, Client } = require("pg");
const connectionString =
  "postgressql://postgres:demo1234@localhost:5432/kobyconrad";

const client = new Client({
  connectionString: connectionString,
});

client.connect();

// client.query(
//   "INSERT INTO schools(name) VALUES ('Capital High')",
//   (err, res) => {
//     console.log("res: ", res);
//     client.end();
//   }
// );

// client.query("SELECT name FROM schools", (err, res) => {
//   console.log(res);
//   client.end();
// });

// client.query(
//   "INSERT INTO notes(text) VALUES ('hello i am a note again')",
//   (err, res) => {
//     console.log("res: ", res);
//     client.end();
//   }
// );

// // client.query("SELECT text FROM notes", (err, res) => {
// //   console.log(res);
// //   client.end();
// // });

// created column id
// client.query("ALTER TABLE notes ADD id varchar(255)", (err, res) => {
//   console.log(res);
//   client.end();
// });

// client.query("SELECT text FROM notes", (err, res) => {
//   const data = res.rows;

//   console.log(data[1]);
//   client.end();
// });

client.query("DELETE FROM notes WHERE table_id='2'", (err, res) => {
  console.log(res);
  client.end();
});

// client.query(
//   "ALTER TABLE notes ADD table_id SERIAL PRIMARY KEY",
//   (err, res) => {
//     console.log(res);
//     client.end();
//   }
// );

// CREATE TABLE notes(text varchar(225))
// INSERT INTO notes(text) VALUES (state/value)
// SELECT text FROM notes
