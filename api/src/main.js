import express from "express";

const app = express();
const port = process.env.PORT ?? 3000

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get("/hello", (req, res) => {
  const name = req.query.name ?? "World";
  res.send(`Hello ${name}!`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
