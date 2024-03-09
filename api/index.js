let express = require('express');
let cors = require('cors');

const Packages = require("./Models/Packages");
const Users = require("./Models/Users");

require("./DB/Conn");
let app = express();
app.use(express.json({ limit: "5mb" }));
app.use(cors());
app.use(express.static("public"));


let port = 8080;

app.post("/addPackage", (req, res) => {
  try {
    const packages = new Packages(req.body);
    packages.save().then(() => {
      res.status(200).send(packages);
    }).catch((e) => {
      res.status(404).send("Could not save the package!");
    })
  }
  catch {
    res.status(500).send("External Server Error");
  }
})

app.get("/packages", async (req, res) => {
  try {
    const allPackages = await Packages.find();
    res.status(200).send(allPackages);
  }
  catch {
     res.status(404).send("External Server Error");
  }
})

app.post("/users", (req, res) => {
  try {
    const user = new Users(req.body);
    user.save().then(() => {
      res.status(200).send(user);
    }).catch(() => {
      res.status(500).send("Could not save the user!");
    })
  }
  catch {
     res.status(500).send("External Server Error");
  }
})


app.listen(port, () => {
  console.log("Api is running on port: " + port);
});