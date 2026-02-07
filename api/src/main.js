import express from "express";

const app = express();
const port = 3000

app.get("/hello", (req, res) => {
  const name = req.query.name ?? "World";
  res.send(`Hello ${name}!`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
