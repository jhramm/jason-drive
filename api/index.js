let express = require('express');
let cors = require('cors');


require("./DB/Conn");
let app = express();
app.use(express.json({ limit: "5mb" }));
app.use(cors());
app.use(express.static("public"));


let port = 8080;


app.listen(port, () => {
  console.log("Api is running on port: " + port);
});