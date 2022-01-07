const express = require("express");
const app = express();
const port = 5003;
app.use(express.json());
const cors = require("cors");
const { selectUser, addUser } = require("./user");

app.use(cors());

app.get("/users", async (req, res) => {
  const list = await selectUser();
  res.json(list);
});

app.post("/addusers", async (req, res) => {
  const user1 = req.body;
  await addUser(user1);
  res.json({ message: "added successfully" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
