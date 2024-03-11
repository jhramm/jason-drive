let express = require('express');
let cors = require('cors');
let bcrypt = require('bcrypt');

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

app.post("/signup", async (req, res) => {
  try {
    const user = new Users(req.body);

    const findEmail = await Users.find({ email: req.body.email});
    
    if (findEmail.length === 0) {
       user
         .save()
         .then(() => {
           res.status(200).send(user);
         })
         .catch(() => {
           res.status(404).send("Could not save the user!");
         });
    } else {
       res.status(416).send("Email already exists");
    }
   
  }
  catch {
     res.status(500).send("External Server Error");
  }
})

app.post("/login", async (req, res) => {
  try {
    const findUser = await Users.findOne({email: req.body.email});

    if (findUser !== null) {
      const matchPassword = await bcrypt.compare(req.body.password, findUser.password);
      if (matchPassword) {
        res.status(200).send(findUser);
      }
      else {
        res.status(416).send("Passwords do not match");
      }
    }
    else {
      res.status(404).send("user not found");
    }

  }
  catch {
     res.status(500).send("External Server Error");
  }
})

app.listen(port, () => {
  console.log("Api is running on port: " + port);
});