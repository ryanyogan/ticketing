import express from "express";

const app = express();
app.use(express.json());

app.get("/api/users/currentuser", (_req, res) => {
  res.send("Hi there");
});

app.listen(3000, () => {
  console.log("[auth] : http://localhost:3000");
});
